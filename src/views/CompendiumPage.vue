<template>
  <div class="compendium">
    <div class="filter-bar">
      <button
        v-for="cat in ALL_CATEGORIES"
        :key="cat"
        class="filter-btn"
        :class="{ active: giftStore.activeCategory === cat }"
        @click="giftStore.setCategory(cat)"
      >
        {{ cat }}
      </button>
    </div>

    <input
      v-model="searchQuery"
      class="search-input"
      placeholder="搜索饰品名称..."
      @input="giftStore.setSearchQuery(searchQuery)"
    />

    <button v-if="modeStore.isAdmin" class="add-gift-btn" @click="showAddForm = true">
      + 添加饰品
    </button>

    <div class="gift-sections">
      <div v-for="section in categorizedGifts" :key="section.label" class="rarity-section">
        <h3 class="rarity-section__title">{{ section.label }}</h3>
        <div class="gift-grid">
          <GiftCard
            v-for="g in section.gifts"
            :key="g.id"
            :gift="g"
            @click="openDetail(g)"
            @contextmenu="openContextMenu(g, $event)"
            @mouseenter="setHoverGift(g)"
            @mouseleave="scheduleClosePanel"
          />
        </div>
      </div>
    </div>

    <GiftDetailModal :gift="selectedGift" @close="selectedGift = null" />

    <ContextMenu
      v-if="contextMenuGift"
      :position="contextMenuPos"
      :gift="contextMenuGift"
      :card-packs="cardPacks"
      :current-label="currentLabel"
      :current-card-pack-id="currentPackId"
      @add-to-selected="handleAddToSelected"
      @save-label="handleSaveLabel"
      @save-card-pack="handleSaveCardPack"
      @change-category="handleChangeCategory"
      @delete-gift="handleDeleteGift"
      @edit-gift="handleEditGift"
      @close="closeContextMenu"
    />

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

    <div v-if="showAddForm" class="add-gift-overlay" @click.self="showAddForm = false">
      <div class="add-gift-form">
        <h3>{{ editingGift ? '编辑饰品' : '添加饰品' }}</h3>
        <label>名称</label>
        <input v-model="formName" class="form-input" placeholder="饰品名称" />
        <label>类别</label>
        <select v-model="formCategory" class="form-input">
          <option v-for="c in CATEGORIES" :key="c" :value="c">{{ c }}</option>
        </select>
        <label>描述（未强化）</label>
        <textarea
          v-model="formDescBase"
          class="form-input form-textarea"
          placeholder="基础版描述"
        ></textarea>
        <label>描述（+）</label>
        <textarea
          v-model="formDescPlus"
          class="form-input form-textarea"
          placeholder="+版描述（可选）"
        ></textarea>
        <label>描述（++）</label>
        <textarea
          v-model="formDescDouble"
          class="form-input form-textarea"
          placeholder="++版描述（可选）"
        ></textarea>
        <label>图片</label>
        <input type="file" accept="image/*" @change="onFileChange" class="form-input" />
        <div class="form-actions">
          <button class="form-btn form-btn--confirm" @click="saveGift">保存</button>
          <button class="form-btn form-btn--cancel" @click="cancelForm">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useGiftsStore } from '@/stores/gifts'
import { useUserDataStore } from '@/stores/userData'
import { useModeStore } from '@/stores/mode'
import { useCardPackStore } from '@/stores/cardPack'
import { useRecipesStore } from '@/stores/recipes'
import { ALL_CATEGORIES, CATEGORIES, RARITY_ORDER } from '@/constants'
import { useRecipePanel } from '@/composables/useRecipePanel'
import { useGiftHelpers } from '@/composables/useGiftHelpers'
import { usePackImages } from '@/composables/useGiftHelpers'
import { usePackList } from '@/composables/usePackList'
import RecipePanel from '@/components/RecipePanel.vue'
import GiftCard from '@/components/GiftCard.vue'
import GiftDetailModal from '@/components/GiftDetailModal.vue'
import ContextMenu from '@/components/ContextMenu.vue'

const giftStore = useGiftsStore()
const userStore = useUserDataStore()
const modeStore = useModeStore()
const cardPackStore = useCardPackStore()
const recipeStore = useRecipesStore()

const recipePanel = useRecipePanel()
const {
  hoverGift,
  panelStyle,
  scheduleClosePanel,
  onPanelEnter,
  onPanelLeave,
  closePanel,
  setHoverGift,
  cleanup,
  startDrag,
} = recipePanel

const { getIconUrl, getGiftName } = useGiftHelpers(giftStore)
const { packImages, loadPackImages } = usePackImages()
const { getPackList } = usePackList(cardPackStore)

const searchQuery = ref('')
const selectedGift = ref(null)
const contextMenuGift = ref(null)
const contextMenuPos = ref(null)
const iconVersion = ref(0)

// 添加/编辑饰品
const showAddForm = ref(false)
const editingGift = ref(null)
const formName = ref('')
const formCategory = ref('泛用')
const formDescBase = ref('')
const formDescPlus = ref('')
const formDescDouble = ref('')
const fileBase64 = ref(null)

const cardPacks = computed(() => cardPackStore.cardPacks)
const currentLabel = computed(() => userStore.giftLabels[contextMenuGift.value?.id] || '')
const currentPackId = computed(() => userStore.giftCardPackMap[contextMenuGift.value?.id] || null)

const categorizedGifts = computed(() => {
  const gifts = giftStore.filteredGifts
  const getRarity = (g) => userStore.giftRarities[g.id] || g.defaultRarity || null
  const groups = []
  const unrated = gifts.filter((g) => !getRarity(g))
  if (unrated.length) groups.push({ label: '未分类', gifts: unrated })
  for (const r of RARITY_ORDER) {
    const list = gifts.filter((g) => getRarity(g) === r)
    if (list.length) groups.push({ label: r, gifts: list })
  }
  return groups
})

const recipes = computed(() => {
  if (!hoverGift.value) return []
  return recipeStore.getRecipesForGift(hoverGift.value.id)
})

const packList = computed(() => getPackList(hoverGift.value?.id))

function openDetail(g) {
  selectedGift.value = g
}

function openContextMenu(g, event) {
  contextMenuGift.value = g
  contextMenuPos.value = { x: event.clientX, y: event.clientY }
}

function closeContextMenu() {
  contextMenuGift.value = null
  contextMenuPos.value = null
}

function handleAddToSelected(id) {
  userStore.addToSelected(id)
}

function handleSaveLabel(id, label) {
  userStore.setLabel(id, label)
}

function handleSaveCardPack(id, packId) {
  userStore.setGiftCardPack(id, packId)
}

function handleChangeCategory(id, cat) {
  userStore.setCategoryOverride(id, cat)
  giftStore.refreshCategoryOverrides()
}

function handleDeleteGift(id) {
  giftStore.removeGift(id)
}

function handleEditGift(g) {
  editingGift.value = g
  formName.value = g.name
  formCategory.value = g.category
  formDescBase.value = g.descriptions.base || ''
  formDescPlus.value = g.descriptions.plus || ''
  formDescDouble.value = g.descriptions.double_plus || ''
  fileBase64.value = null
  showAddForm.value = true
}

function onFileChange(e) {
  const file = e.target.files[0]
  if (!file || !file.type.startsWith('image/')) return
  const reader = new FileReader()
  reader.onload = () => {
    fileBase64.value = reader.result
  }
  reader.readAsDataURL(file)
}

function saveGift() {
  if (!formName.value.trim()) return
  const data = {
    name: formName.value.trim(),
    category: formCategory.value,
    descBase: formDescBase.value,
    descPlus: formDescPlus.value,
    descDoublePlus: formDescDouble.value,
    iconBase64: fileBase64.value,
  }
  if (editingGift.value) {
    giftStore.updateGift(editingGift.value.id, data)
  } else {
    giftStore.addGift(data)
  }
  iconVersion.value++
  cancelForm()
}

function cancelForm() {
  showAddForm.value = false
  editingGift.value = null
  formName.value = ''
  formCategory.value = '泛用'
  formDescBase.value = ''
  formDescPlus.value = ''
  formDescDouble.value = ''
  fileBase64.value = null
}

onMounted(() => {
  loadPackImages(cardPacks.value)
})

onUnmounted(() => {
  cleanup()
})
</script>

<style scoped>
.compendium {
  padding: 16px 16px 300px;
  background: #1a1a2e;
  min-height: 100vh;
  font-family: LimbusFont, sans-serif;
}

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.filter-btn {
  padding: 8px 16px;
  border: 1px solid #444;
  border-radius: 20px;
  background: #2a2a4a;
  color: #ccc;
  cursor: pointer;
  font-size: 15px;
  font-family: LimbusFont, sans-serif;
  transition:
    background 0.2s,
    color 0.2s;
}

.filter-btn:hover {
  background: #3a3a5a;
}

.filter-btn.active {
  background: #5a5aaa;
  color: #fff;
  border-color: #5a5aaa;
}

.search-input {
  width: 300px;
  padding: 10px 16px;
  border: 1px solid #444;
  border-radius: 20px;
  background: #2a2a4a;
  color: #e0e0e0;
  font-size: 16px;
  font-family: LimbusFont, sans-serif;
  outline: none;
  margin-bottom: 16px;
}

.search-input:focus {
  border-color: #7a7aff;
}

.search-input::placeholder {
  color: #777;
}

.gift-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.gift-sections {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.rarity-section__title {
  margin: 0 0 8px;
  font-size: 24px;
  color: #ffba00;
  border-bottom: 1px solid #333;
  padding-bottom: 6px;
}

.add-gift-btn {
  margin-left: 12px;
  padding: 8px 16px;
  border: 1px solid #5a5aaa;
  border-radius: 20px;
  background: #2a2a4a;
  color: #aaf;
  font-size: 13px;
  font-family: LimbusFont, sans-serif;
  cursor: pointer;
  transition: background 0.2s;
}

.add-gift-btn:hover {
  background: #3a3a6a;
}

.add-gift-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3000;
}

.add-gift-form {
  background: #1e1e3f;
  border-radius: 12px;
  padding: 24px;
  width: 360px;
  color: #e0e0e0;
  font-family: LimbusFont, sans-serif;
}

.add-gift-form h3 {
  margin: 0 0 16px;
  font-size: 18px;
}

.add-gift-form label {
  display: block;
  margin: 10px 0 4px;
  font-size: 13px;
  color: #aaa;
}

.form-input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #444;
  border-radius: 8px;
  background: #2a2a4a;
  color: #e0e0e0;
  font-size: 14px;
  font-family: LimbusFont, sans-serif;
  outline: none;
  box-sizing: border-box;
}

.form-input:focus {
  border-color: #7a7aff;
}

.form-textarea {
  min-height: 150px;
  resize: vertical;
}

.form-actions {
  display: flex;
  gap: 10px;
  margin-top: 16px;
}

.form-btn {
  flex: 1;
  padding: 8px 16px;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  font-family: LimbusFont, sans-serif;
  cursor: pointer;
}

.form-btn--confirm {
  background: #5a5aaa;
  color: #fff;
}

.form-btn--confirm:hover {
  background: #6a6abb;
}

.form-btn--cancel {
  background: #4a3a3a;
  color: #e74c3c;
}

.form-btn--cancel:hover {
  background: #5a3a3a;
}
</style>
