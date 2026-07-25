<template>
  <div class="recipe-page">
    <h2 class="page-title">合成方式</h2>

    <!-- 管理员表单 -->
    <div v-if="modeStore.isAdmin" class="recipe-form">
      <!-- 材料搜索 -->
      <div class="form-section">
        <label class="form-label">材料饰品（2-3个）</label>
        <div class="search-wrapper">
          <input
            ref="materialSearchInput"
            v-model="materialSearch"
            class="search-input"
            placeholder="搜索饰品名称..."
            @input="onMaterialInput"
            @focus="showMaterialDropdown = true"
          />
          <div
            v-if="showMaterialDropdown && materialResults.length"
            ref="materialDropdown"
            class="dropdown"
          >
            <div
              v-for="g in materialResults"
              :key="g.id"
              class="dropdown-item"
              @mousedown.prevent="addMaterial(g.id)"
            >
              <img :src="giftHelpers.getIconUrl(g.id)" class="dropdown-icon" />
              <span>{{ g.name }}</span>
            </div>
          </div>
        </div>
        <!-- 已选材料标签 -->
        <div class="selected-materials">
          <div v-for="id in materialIds" :key="id" class="material-tag">
            <img :src="giftHelpers.getIconUrl(id)" class="tag-icon" />
            <span>{{ giftHelpers.getGiftName(id) }}</span>
            <button class="tag-remove" @click="removeMaterial(id)">×</button>
          </div>
        </div>
      </div>

      <!-- 结果搜索 -->
      <div class="form-section">
        <label class="form-label">结果饰品（1个）</label>
        <div class="search-wrapper">
          <input
            ref="resultSearchInput"
            v-model="resultSearch"
            class="search-input"
            placeholder="搜索饰品名称..."
            @input="onResultInput"
            @focus="showResultDropdown = true"
          />
          <div
            v-if="showResultDropdown && resultResults.length"
            ref="resultDropdown"
            class="dropdown"
          >
            <div
              v-for="g in resultResults"
              :key="g.id"
              class="dropdown-item"
              @mousedown.prevent="setResult(g.id)"
            >
              <img :src="giftHelpers.getIconUrl(g.id)" class="dropdown-icon" />
              <span>{{ g.name }}</span>
            </div>
          </div>
        </div>
        <div v-if="resultId" class="selected-materials">
          <div class="material-tag">
            <img :src="giftHelpers.getIconUrl(resultId)" class="tag-icon" />
            <span>{{ giftHelpers.getGiftName(resultId) }}</span>
            <button class="tag-remove" @click="resultId = null">×</button>
          </div>
        </div>
      </div>

      <!-- 操作按钮 -->
      <button class="create-btn" :disabled="!canSave" @click="saveRecipe">
        {{ editingRecipeId ? '保存修改' : editingIndex !== null ? '插入配方' : '创建' }}
      </button>
      <button
        v-if="editingRecipeId || editingIndex !== null"
        class="cancel-btn"
        @click="cancelEdit"
      >
        取消
      </button>
    </div>

    <!-- 配方列表 -->
    <div class="recipe-list">
      <h3 class="list-title">配方</h3>
      <div v-if="!recipes.length" class="empty-hint">暂无配方</div>
      <div v-for="(r, idx) in recipes" :key="r.id" class="recipe-item">
        <div class="recipe-materials">
          <span v-for="(mid, i) in r.materialIds" :key="mid" class="recipe-material-entry">
            <GiftCard
              :gift="giftHelpers.getGift(mid)"
              size="small"
              @click="openDetail(giftHelpers.getGift(mid))"
              @contextmenu.prevent="openContextMenu($event, mid)"
              @mouseenter="setHoverGift(giftHelpers.getGift(mid))"
            />
            <span class="recipe-gift-name">{{ giftHelpers.getGiftName(mid) }}</span>
            <span v-if="i < r.materialIds.length - 1" class="recipe-plus">+</span>
          </span>
        </div>
        <span class="recipe-equals">=</span>
        <div class="recipe-result" @contextmenu.prevent="openContextMenu($event, r.resultId)">
          <GiftCard
            :gift="giftHelpers.getGift(r.resultId)"
            size="small"
            @click="openDetail(giftHelpers.getGift(r.resultId))"
            @mouseenter="setHoverGift(giftHelpers.getGift(r.resultId))"
          />
          <span class="recipe-result-name">{{ giftHelpers.getGiftName(r.resultId) }}</span>
        </div>
        <div v-if="modeStore.isAdmin" class="recipe-actions">
          <button class="move-btn" @click="moveRecipe(r.id, 'up')">↑</button>
          <button class="move-btn" @click="moveRecipe(r.id, 'down')">↓</button>
          <button class="edit-btn" @click="editRecipe(r)">编辑</button>
          <button class="insert-btn" @click="startInsert(idx + 1)">插入↓</button>
          <button class="delete-btn" @click="deleteRecipe(r.id)">删除</button>
        </div>
      </div>
    </div>

    <!-- 右键菜单 -->
    <div
      v-if="contextMenu.visible"
      class="context-menu"
      :style="{ left: contextMenu.x + 'px', top: contextMenu.y + 'px' }"
    >
      <div class="context-menu-item" @click="addToSelected(contextMenu.giftId)">+ 添加</div>
    </div>

    <!-- 详情弹窗 -->
    <GiftDetailModal :gift="detailGift" @close="detailGift = null" />

    <RecipePanel
      :recipes="recipes"
      :pack-list="packList"
      :pack-images="packImages"
      :hover-gift="hoverGift"
      :get-icon="getIconUrl"
      :get-gift-name="getGiftName"
      :panel-style="panelStyle"
      :on-drag-start="startDrag"
      @enter="onPanelEnter"
      @leave="onPanelLeave"
      @close="closePanel"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useModeStore } from '@/stores/mode'
import { useGiftsStore } from '@/stores/gifts'
import { useCardPackStore } from '@/stores/cardPack'
import { useRecipesStore } from '@/stores/recipes'
import { useUserDataStore } from '@/stores/userData'
import { useRecipePanel } from '@/composables/useRecipePanel'
import { useGiftHelpers } from '@/composables/useGiftHelpers'
import { usePackImages } from '@/composables/useGiftHelpers'
import { usePackList } from '@/composables/usePackList'
import RecipePanel from '@/components/RecipePanel.vue'
import GiftCard from '@/components/GiftCard.vue'
import GiftDetailModal from '@/components/GiftDetailModal.vue'

const modeStore = useModeStore()
const giftStore = useGiftsStore()
const cardPackStore = useCardPackStore()
const recipeStore = useRecipesStore()
const userStore = useUserDataStore()

const giftHelpers = useGiftHelpers(giftStore)

const recipePanel = useRecipePanel()
const { hoverGift, panelStyle, setHoverGift, scheduleClosePanel, startDrag, onPanelEnter, onPanelLeave, closePanel } =
  recipePanel

const { packImages, loadPackImages } = usePackImages()
const { getPackList } = usePackList(cardPackStore)

const recipes = computed(() => recipeStore.recipes)
const packList = computed(() => getPackList(hoverGift.value?.id))
const allGifts = computed(() => giftStore.gifts)

// 表单状态
const materialIds = ref([])
const resultId = ref(null)
const materialSearch = ref('')
const resultSearch = ref('')
const showMaterialDropdown = ref(false)
const showResultDropdown = ref(false)
const editingRecipeId = ref(null)
const editingIndex = ref(null)
const detailGift = ref(null)
const contextMenu = ref({ visible: false, x: 0, y: 0, giftId: null })

// 输入框和下拉的 ref
const materialSearchInput = ref(null)
const materialDropdown = ref(null)
const resultSearchInput = ref(null)
const resultDropdown = ref(null)

// 搜索结果
const materialResults = computed(() => {
  if (!materialSearch.value.trim()) return []
  const q = materialSearch.value.trim().toLowerCase()
  return allGifts.value
    .filter((g) => g.name.toLowerCase().includes(q) && !materialIds.value.includes(g.id))
    .slice(0, 10)
})

const resultResults = computed(() => {
  if (!resultSearch.value.trim()) return []
  const q = resultSearch.value.trim().toLowerCase()
  return allGifts.value
    .filter((g) => g.name.toLowerCase().includes(q) && g.id !== resultId.value)
    .slice(0, 10)
})

const canSave = computed(
  () => materialIds.value.length >= 2 && materialIds.value.length <= 3 && resultId.value !== null,
)

// 输入事件（触发搜索）
function onMaterialInput() {
  // 如果有输入内容，显示下拉
  if (materialSearch.value.trim()) {
    showMaterialDropdown.value = true
  }
}

function onResultInput() {
  if (resultSearch.value.trim()) {
    showResultDropdown.value = true
  }
}

// 选择材料
function addMaterial(id) {
  if (materialIds.value.length < 3 && !materialIds.value.includes(id)) {
    materialIds.value.push(id)
    materialSearch.value = ''
    showMaterialDropdown.value = false
  }
}

function removeMaterial(id) {
  materialIds.value = materialIds.value.filter((m) => m !== id)
}

// 选择结果
function setResult(id) {
  resultId.value = id
  resultSearch.value = ''
  showResultDropdown.value = false
}

// 保存配方
function saveRecipe() {
  if (!canSave.value) return
  const ids = [...materialIds.value]
  const res = resultId.value
  if (editingRecipeId.value) {
    recipeStore.updateRecipe(editingRecipeId.value, ids, res)
  } else if (editingIndex.value !== null) {
    recipeStore.insertRecipeAt(editingIndex.value, ids, res)
  } else {
    recipeStore.addRecipe(ids, res)
  }
  resetForm()
}

function resetForm() {
  materialIds.value = []
  resultId.value = null
  editingRecipeId.value = null
  editingIndex.value = null
  materialSearch.value = ''
  resultSearch.value = ''
  showMaterialDropdown.value = false
  showResultDropdown.value = false
}

function cancelEdit() {
  resetForm()
}

// 编辑 / 插入
function editRecipe(r) {
  editingRecipeId.value = r.id
  materialIds.value = [...r.materialIds]
  resultId.value = r.resultId
  editingIndex.value = null
  window.scrollTo(0, 0)
}

function startInsert(index) {
  editingIndex.value = index
  materialIds.value = []
  resultId.value = null
  editingRecipeId.value = null
  window.scrollTo(0, 0)
}

function moveRecipe(id, direction) {
  recipeStore.moveRecipe(id, direction)
}

function deleteRecipe(id) {
  if (confirm('确定删除此配方吗？')) {
    recipeStore.removeRecipe(id)
  }
}

function openDetail(g) {
  detailGift.value = g
}

// 右键菜单
function openContextMenu(event, giftId) {
  contextMenu.value = { visible: true, x: event.clientX, y: event.clientY, giftId }
}

function addToSelected(giftId) {
  userStore.addToSelected(giftId)
  contextMenu.value.visible = false
}

// 点击外部关闭下拉
function handleClickOutside(event) {
  // 材料下拉
  const matInput = materialSearchInput.value
  const matDrop = materialDropdown.value
  if (matInput && matDrop) {
    const isInside = matInput.contains(event.target) || matDrop.contains(event.target)
    if (!isInside) {
      showMaterialDropdown.value = false
    }
  }
  // 结果下拉
  const resInput = resultSearchInput.value
  const resDrop = resultDropdown.value
  if (resInput && resDrop) {
    const isInside = resInput.contains(event.target) || resDrop.contains(event.target)
    if (!isInside) {
      showResultDropdown.value = false
    }
  }
  // 右键菜单外部关闭
  if (contextMenu.value.visible) {
    contextMenu.value.visible = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  loadPackImages(cardPackStore.cardPacks)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.recipe-page {
  padding: 16px;
  background: #1a1a2e;
  min-height: 100vh;
  font-family: LimbusFont, sans-serif;
  color: #e0e0e0;
}

.page-title {
  margin: 0 0 20px;
  font-size: 22px;
  color: #e0e0e0;
}

.recipe-form {
  background: #1e1e3f;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
}

.form-section {
  margin-bottom: 16px;
}

.form-label {
  display: block;
  margin-bottom: 8px;
  color: #aaa;
  font-size: 14px;
}

.search-wrapper {
  position: relative;
}

.search-input {
  width: 300px;
  padding: 8px 14px;
  border: 1px solid #444;
  border-radius: 20px;
  background: #2a2a4a;
  color: #e0e0e0;
  font-size: 14px;
  font-family: LimbusFont, sans-serif;
  outline: none;
}

.search-input:focus {
  border-color: #7a7aff;
}

.search-input::placeholder {
  color: #777;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 320px;
  max-height: 200px;
  overflow-y: auto;
  background: #2a2a4a;
  border: 1px solid #555;
  border-radius: 8px;
  margin-top: 4px;
  z-index: 100;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background 0.15s;
}

.dropdown-item:hover {
  background: #3a3a5a;
}

.dropdown-icon {
  width: 28px;
  height: 28px;
  object-fit: contain;
  border-radius: 4px;
}

.selected-materials {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}

.material-tag {
  display: flex;
  align-items: center;
  gap: 6px;
  background: #3a3a5a;
  border-radius: 16px;
  padding: 4px 10px;
  font-size: 13px;
}

.tag-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
  border-radius: 4px;
}

.tag-remove {
  background: none;
  border: none;
  color: #e74c3c;
  font-size: 16px;
  cursor: pointer;
  padding: 0 2px;
  line-height: 1;
}

.create-btn {
  padding: 8px 24px;
  background: #5a5aaa;
  border: none;
  border-radius: 20px;
  color: #fff;
  font-size: 14px;
  font-family: LimbusFont, sans-serif;
  cursor: pointer;
  transition: background 0.2s;
}

.create-btn:hover:not(:disabled) {
  background: #6a6abb;
}

.create-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.cancel-btn {
  padding: 8px 20px;
  background: #4a3a3a;
  border: 1px solid #733;
  border-radius: 20px;
  color: #e74c3c;
  font-size: 14px;
  font-family: LimbusFont, sans-serif;
  cursor: pointer;
  margin-left: 8px;
}

.cancel-btn:hover {
  background: #5a3a3a;
}

.recipe-list {
  background: #1e1e3f;
  border-radius: 12px;
  padding: 20px;
}

.list-title {
  margin: 0 0 16px;
  font-size: 16px;
  color: #ccc;
}

.empty-hint {
  color: #777;
  font-size: 14px;
}

.recipe-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid #333;
}

.recipe-item:last-child {
  border-bottom: none;
}

.recipe-materials {
  display: flex;
  align-items: center;
  gap: 4px;
}

.recipe-material-entry {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.recipe-gift-name {
  font-size: 12px;
  color: #ccc;
  max-width: 60px;
  word-break: break-all;
  line-height: 1.2;
}

.recipe-plus {
  color: #aaa;
  margin: 0 4px;
  font-size: 14px;
}

.recipe-equals {
  color: #aaa;
  font-size: 18px;
  margin: 0 8px;
}

.recipe-result {
  display: flex;
  align-items: center;
  gap: 8px;
}

.recipe-result-name {
  font-size: 14px;
  color: #e0e0e0;
}

.recipe-actions {
  display: flex;
  gap: 4px;
  margin-left: auto;
  align-items: center;
}

.move-btn {
  padding: 4px 8px;
  background: #3a3a5a;
  border: 1px solid #555;
  border-radius: 8px;
  color: #ccc;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s;
}

.move-btn:hover {
  background: #4a4a6a;
  color: #fff;
}

.edit-btn {
  padding: 4px 10px;
  background: #3a4a3a;
  border: 1px solid #5a7a5a;
  border-radius: 12px;
  color: #8c8;
  font-size: 12px;
  font-family: LimbusFont, sans-serif;
  cursor: pointer;
  transition: background 0.2s;
}

.edit-btn:hover {
  background: #4a5a4a;
}

.insert-btn {
  padding: 4px 10px;
  background: #3a3a4a;
  border: 1px solid #5a5a7a;
  border-radius: 12px;
  color: #aaf;
  font-size: 12px;
  font-family: LimbusFont, sans-serif;
  cursor: pointer;
  transition: background 0.2s;
}

.insert-btn:hover {
  background: #4a4a5a;
}

.delete-btn {
  padding: 4px 12px;
  background: #4a2a2a;
  border: 1px solid #733;
  border-radius: 12px;
  color: #e74c3c;
  font-size: 12px;
  font-family: LimbusFont, sans-serif;
  cursor: pointer;
  transition: background 0.2s;
}

.delete-btn:hover {
  background: #5a3a3a;
}

.context-menu {
  position: fixed;
  background: #2a2a4a;
  border: 1px solid #555;
  border-radius: 8px;
  padding: 4px 0;
  z-index: 1000;
  min-width: 160px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
}

.context-menu-item {
  padding: 8px 16px;
  cursor: pointer;
  font-size: 13px;
  color: #e0e0e0;
  transition: background 0.15s;
}

.context-menu-item:hover {
  background: #3a3a5a;
}
</style>
