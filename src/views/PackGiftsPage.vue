<template>
  <div class="pack-gifts-page">
    <h2 class="page-title">卡包饰品</h2>
    <input v-model="searchQuery" class="search-input" placeholder="搜索卡包名称..." />

    <div class="pack-list">
      <div
        v-for="pack in filteredPacks"
        :key="pack.id"
        class="pack-item"
        :class="{ 'pack-item--active': selectedPackId === pack.id }"
        @click="selectPack(pack.id)"
      >
        <img v-if="packImages[pack.id]" :src="packImages[pack.id]" class="pack-item__cover" />
        <div v-else class="pack-item__cover-placeholder"></div>
        <span class="pack-item__name">{{ pack.name }}</span>
      </div>
    </div>

    <div v-if="selectedPack" class="pack-detail">
      <div class="pack-detail__header">
        <h3 class="pack-detail__title">{{ selectedPack.name }}</h3>
        <div class="pack-detail__search-wrapper">
          <input
            v-model="searchGift"
            class="pack-detail__search"
            placeholder="添加饰品..."
            @focus="showDropdown = true"
          />
          <div v-if="showDropdown && searchResults.length" class="pack-detail__dropdown">
            <div
              v-for="g in searchResults"
              :key="g.id"
              class="pack-detail__dropdown-item"
              @mousedown.prevent="addGiftToPack(g.id)"
            >
              <img :src="getIcon(g.id)" class="pack-detail__dropdown-icon" />
              <span>{{ g.name }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="pack-detail__gifts">
        <div v-for="g in packGiftObjects" :key="g.id" class="pack-detail__gift-item">
          <GiftCard
            :gift="g"
            @click="openDetail(g)"
            @contextmenu.prevent="openGiftMenu($event, g)"
            @mouseenter="setHoverGift(g)"
          />
        </div>
        <div v-if="!packGiftObjects.length" class="pack-detail__empty">暂无饰品</div>
      </div>

      <div v-if="reprintGiftObjects.length" class="pack-detail__reprint">
        <span class="pack-detail__reprint-label">复刻</span>
        <div class="pack-detail__gifts">
          <div v-for="g in reprintGiftObjects" :key="g.id" class="pack-detail__gift-item">
            <GiftCard
              :gift="g"
              @click="openDetail(g)"
              @contextmenu.prevent="openGiftMenu($event, g)"
              @mouseenter="setHoverGift(g)"
            />
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="giftMenu.visible"
      class="context-menu"
      :style="{ left: giftMenu.x + 'px', top: giftMenu.y + 'px' }"
    >
      <div class="context-menu__item" @click="addToSelected(giftMenu.giftId)">+ 添加</div>
      <div class="context-menu__item" @click="toggleLabelInput">修改标签</div>
      <div v-if="showLabelInput" class="context-menu__inline">
        <input
          v-model="labelValue"
          class="context-menu__input"
          placeholder="输入标签"
          @keydown.enter="saveLabel"
        />
        <button class="context-menu__confirm" @click="saveLabel">确认</button>
      </div>
      <div
        class="context-menu__item context-menu__item--danger"
        @click="removeGiftFromPack(giftMenu.giftId)"
      >
        移出卡包
      </div>
    </div>

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
      @enter="recipePanel.onPanelEnter"
      @leave="recipePanel.onPanelLeave"
      @close="recipePanel.closePanel"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useCardPackStore } from '@/stores/cardPack'
import { useGiftsStore } from '@/stores/gifts'
import { useUserDataStore } from '@/stores/userData'
import { useRecipesStore } from '@/stores/recipes'
import { useRecipePanel } from '@/composables/useRecipePanel'
import { useGiftHelpers } from '@/composables/useGiftHelpers'
import { usePackImages } from '@/composables/useGiftHelpers'
import { usePackList } from '@/composables/usePackList'
import RecipePanel from '@/components/RecipePanel.vue'
import GiftCard from '@/components/GiftCard.vue'
import GiftDetailModal from '@/components/GiftDetailModal.vue'

const cardPackStore = useCardPackStore()
const giftStore = useGiftsStore()
const userStore = useUserDataStore()
const recipeStore = useRecipesStore()

const recipePanel = useRecipePanel()
const { hoverGift, panelStyle, setHoverGift, startDrag } = recipePanel

const { getIconUrl, getGiftName } = useGiftHelpers(giftStore)
const { packImages, loadPackImages } = usePackImages()
const { getPackList } = usePackList(cardPackStore)

const searchQuery = ref('')
const selectedPackId = ref(null)
const searchGift = ref('')
const showDropdown = ref(false)
const detailGift = ref(null)
const giftMenu = ref({ visible: false, x: 0, y: 0, giftId: null })
const showLabelInput = ref(false)
const labelValue = ref('')

const filteredPacks = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  return q
    ? cardPackStore.cardPacks.filter((p) => p.name.toLowerCase().includes(q))
    : cardPackStore.cardPacks
})

const packList = computed(() => getPackList(hoverGift.value?.id))

const selectedPack = computed(() =>
  cardPackStore.cardPacks.find((p) => p.id === selectedPackId.value),
)

const packGiftIds = computed(() => {
  if (!selectedPackId.value) return []
  return cardPackStore.getGiftsForPack(selectedPackId.value)
})

const allPackGiftObjects = computed(() => {
  const ids = packGiftIds.value
  return giftStore.gifts.filter((g) => ids.includes(g.id))
})

const packGiftObjects = computed(() => {
  return allPackGiftObjects.value.filter((g) => (userStore.giftLabels[g.id] || '') !== '复刻')
})

const reprintGiftObjects = computed(() => {
  return allPackGiftObjects.value.filter((g) => (userStore.giftLabels[g.id] || '') === '复刻')
})

const recipes = computed(() => {
  if (!hoverGift.value) return []
  return recipeStore.getRecipesForGift(hoverGift.value.id)
})

const searchResults = computed(() => {
  if (!searchGift.value.trim() || !selectedPackId.value) return []
  const q = searchGift.value.trim().toLowerCase()
  return giftStore.gifts
    .filter((g) => g.name.toLowerCase().includes(q) && !packGiftIds.value.includes(g.id))
    .slice(0, 10)
})

function selectPack(id) {
  selectedPackId.value = id
  searchGift.value = ''
  showDropdown.value = false
}

function addGiftToPack(giftId) {
  if (selectedPackId.value) {
    cardPackStore.addGiftToPack(selectedPackId.value, giftId)
    searchGift.value = ''
    showDropdown.value = false
  }
}

function removeGiftFromPack(giftId) {
  if (selectedPackId.value) {
    cardPackStore.removeGiftFromPack(selectedPackId.value, giftId)
    giftMenu.value.visible = false
  }
}

function openGiftMenu(event, gift) {
  giftMenu.value = { visible: true, x: event.clientX, y: event.clientY, giftId: gift.id }
  labelValue.value = userStore.giftLabels[gift.id] || ''
  showLabelInput.value = false
}

function toggleLabelInput() {
  showLabelInput.value = !showLabelInput.value
}

function saveLabel() {
  if (giftMenu.value.giftId) {
    userStore.setLabel(giftMenu.value.giftId, labelValue.value)
  }
  showLabelInput.value = false
  giftMenu.value.visible = false
}

function addToSelected(giftId) {
  userStore.addToSelected(giftId)
  giftMenu.value.visible = false
}

function openDetail(g) {
  detailGift.value = g
}

onMounted(() => {
  loadPackImages(cardPackStore.cardPacks)
})
</script>

<style scoped>
.pack-gifts-page {
  padding: 16px;
  background: #1a1a2e;
  min-height: 100vh;
  font-family: LimbusFont, sans-serif;
  color: #e0e0e0;
}

.page-title {
  margin: 0 0 16px;
  font-size: 22px;
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

.pack-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.pack-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 6px;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid transparent;
  transition:
    border-color 0.15s,
    background 0.15s;
  width: 80px;
}

.pack-item:hover {
  background: #2a2a4a;
}

.pack-item--active {
  border-color: #5a5aaa;
  background: #2a2a4a;
}

.pack-item__cover {
  width: 60px;
  height: 78px;
  object-fit: cover;
  border-radius: 6px;
}

.pack-item__cover-placeholder {
  width: 60px;
  height: 78px;
  background: #333;
  border-radius: 6px;
}

.pack-item__name {
  font-size: 11px;
  color: #ccc;
  text-align: center;
  word-break: break-all;
  max-width: 75px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pack-detail {
  padding: 16px;
  background: #1e1e3f;
  border-radius: 10px;
}

.pack-detail__header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;
  flex-wrap: wrap;
}

.pack-detail__title {
  margin: 0;
  font-size: 18px;
  color: #e0e0e0;
}

.pack-detail__search-wrapper {
  position: relative;
}

.pack-detail__search {
  width: 200px;
  padding: 6px 12px;
  border: 1px solid #444;
  border-radius: 16px;
  background: #2a2a4a;
  color: #e0e0e0;
  font-size: 14px;
  font-family: LimbusFont, sans-serif;
  outline: none;
}

.pack-detail__search:focus {
  border-color: #7a7aff;
}

.pack-detail__search::placeholder {
  color: #777;
}

.pack-detail__dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 280px;
  max-height: 200px;
  overflow-y: auto;
  background: #2a2a4a;
  border: 1px solid #555;
  border-radius: 8px;
  margin-top: 4px;
  z-index: 1000;
}

.pack-detail__dropdown-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background 0.15s;
}

.pack-detail__dropdown-item:hover {
  background: #3a3a5a;
}

.pack-detail__dropdown-icon {
  width: 28px;
  height: 28px;
  object-fit: contain;
  border-radius: 4px;
}

.pack-detail__gifts {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.pack-detail__gift-item {
  position: relative;
}

.pack-detail__separator {
  width: 2px;
  align-self: stretch;
  background: #555;
  margin: 4px 8px;
  border-radius: 1px;
}

.pack-detail__empty {
  color: #666;
  font-size: 13px;
}

.pack-detail__reprint {
  margin-top: 10px;
  padding-top: 8px;
  border-top: 1px dashed #555;
}

.pack-detail__reprint-label {
  font-size: 12px;
  color: #888;
  margin-bottom: 6px;
  display: block;
}

.context-menu {
  position: fixed;
  background: #2a2a4a;
  border: 1px solid #555;
  border-radius: 8px;
  padding: 4px 0;
  z-index: 1000;
  min-width: 140px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
}

.context-menu__item {
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  color: #e0e0e0;
  transition: background 0.15s;
}

.context-menu__item:hover {
  background: #3a3a5a;
}

.context-menu__item--danger {
  color: #e74c3c;
}

.context-menu__item--danger:hover {
  background: #4a2a2a;
}

.context-menu__inline {
  padding: 4px 12px 8px;
}

.context-menu__input {
  width: 100%;
  padding: 4px 8px;
  border: 1px solid #555;
  border-radius: 4px;
  background: #1a1a2e;
  color: #e0e0e0;
  font-size: 13px;
  font-family: LimbusFont, sans-serif;
  outline: none;
}

.context-menu__input:focus {
  border-color: #7a7aff;
}

.context-menu__confirm {
  margin-top: 4px;
  width: 100%;
  padding: 4px 8px;
  border: none;
  border-radius: 4px;
  background: #5a5aaa;
  color: #fff;
  font-size: 12px;
  cursor: pointer;
}
</style>
