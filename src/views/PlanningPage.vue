<template>
  <div class="planning-page">
    <div class="planning-page__section">
      <div class="section-header">
        <h3 class="section-title">已选中饰品</h3>
        <button v-if="selectedGifts.length" class="clear-all-btn" @click="clearAll">
          清除全部
        </button>
      </div>
      <div v-for="group in groupedSelected" :key="group.key" class="selected-group">
        <div class="selected-list">
          <div
            v-for="gift in group.gifts"
            :key="gift.id"
            class="selected-item"
            @mouseenter="setHoverGift(gift)"
            @mouseleave="scheduleClosePanel"
            @click="openDetail(gift)"
          >
            <GiftCard :gift="gift" />
            <button class="selected-item__remove" @click.stop="removeFromSelected(gift.id)">
              x
            </button>
          </div>
        </div>
      </div>
      <span v-if="!selectedGifts.length" class="selected-list__empty">暂无已选中饰品</span>
    </div>

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

    <div class="planning-page__section">
      <div class="section-header">
        <h3 class="section-title">楼层分布</h3>
        <button
          v-if="hiddenPackIds.length"
          class="clear-all-btn"
          @click="restoreAllHiddenPacks"
        >
          恢复所有隐藏卡包
        </button>
      </div>
      <FloorGrid
        :card-packs="relatedPacks"
        :pack-images="packImages"
        :gifts="allGifts"
        :gift-card-pack-map="giftCardPackMap"
        :hidden-packs="hiddenPackIds"
        @hover-gift="setHoverGift"
        @click-gift="openDetail"
        @toggle-pack-visibility="togglePackVisibility"
      />
    </div>

    <GiftDetailModal :gift="selectedGift" @close="selectedGift = null" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useUserDataStore } from '@/stores/userData'
import { useGiftsStore } from '@/stores/gifts'
import { useCardPackStore } from '@/stores/cardPack'
import { useRecipesStore } from '@/stores/recipes'
import { SELECTED_GIFT_GROUPS, FLOOR_RANGES } from '@/constants'
import { useRecipePanel } from '@/composables/useRecipePanel'
import { useGiftHelpers } from '@/composables/useGiftHelpers'
import { usePackImages } from '@/composables/useGiftHelpers'
import { usePackList } from '@/composables/usePackList'
import RecipePanel from '@/components/RecipePanel.vue'
import GiftCard from '@/components/GiftCard.vue'
import GiftDetailModal from '@/components/GiftDetailModal.vue'
import FloorGrid from '@/components/FloorGrid.vue'

const userStore = useUserDataStore()
const giftStore = useGiftsStore()
const cardPackStore = useCardPackStore()
const recipeStore = useRecipesStore()

const recipePanel = useRecipePanel()
const { hoverGift, panelStyle, scheduleClosePanel, setHoverGift, startDrag, cleanup } = recipePanel

const { getIconUrl, getGiftName } = useGiftHelpers(giftStore)
const { packImages, loadPackImages } = usePackImages()
const { getPackList } = usePackList(cardPackStore)

const selectedGift = ref(null)
const hiddenPackIds = ref([])

// 从 localStorage 加载/保存隐藏卡包状态
function loadHiddenPacks() {
  const stored = localStorage.getItem('egogift_hiddenPacks')
  if (stored) {
    try { hiddenPackIds.value = JSON.parse(stored) } catch { hiddenPackIds.value = [] }
  }
}

function saveHiddenPacks() {
  localStorage.setItem('egogift_hiddenPacks', JSON.stringify(hiddenPackIds.value))
}

loadHiddenPacks()

const allGifts = computed(() => giftStore.gifts)
const selectedIds = computed(() => userStore.selectedGiftIds)
const selectedGifts = computed(() =>
  selectedIds.value.map((id) => allGifts.value.find((g) => g.id === id)).filter(Boolean),
)

function getAverageFloor(giftId) {
  for (const [packId, giftIds] of Object.entries(cardPackStore.packGifts)) {
    if (giftIds.includes(giftId)) {
      const pack = cardPackStore.cardPacks.find((p) => p.id === packId)
      if (pack && pack.floors.length) {
        const sum = pack.floors.reduce((a, b) => a + b, 0)
        return sum / pack.floors.length
      }
    }
  }
  return -1
}

const groupedSelected = computed(() => {
  const groups = SELECTED_GIFT_GROUPS.map((g) => ({ ...g, gifts: [] }))
  for (const g of selectedGifts.value) {
    const avgFloor = getAverageFloor(g.id)
    if (avgFloor >= FLOOR_RANGES.low[0] && avgFloor <= FLOOR_RANGES.low[1]) groups[1].gifts.push(g)
    else if (avgFloor > FLOOR_RANGES.low[1] && avgFloor <= FLOOR_RANGES.mid[1]) groups[2].gifts.push(g)
    else if (avgFloor > FLOOR_RANGES.mid[1] && avgFloor <= FLOOR_RANGES.high[1]) groups[3].gifts.push(g)
    else groups[0].gifts.push(g)
  }
  return groups.filter((g) => g.gifts.length)
})

const recipes = computed(() => {
  if (!hoverGift.value) return []
  return recipeStore.getRecipesForGift(hoverGift.value.id)
})

const packList = computed(() => getPackList(hoverGift.value?.id))

const relatedPacks = computed(() => {
  const set = new Set()
  for (const g of selectedGifts.value) {
    for (const [packId, giftIds] of Object.entries(cardPackStore.packGifts)) {
      if (giftIds.includes(g.id)) set.add(packId)
    }
  }
  return cardPackStore.cardPacks.filter((p) => set.has(p.id))
})

const giftCardPackMap = computed(() => {
  const map = {}
  for (const [packId, giftIds] of Object.entries(cardPackStore.packGifts)) {
    for (const giftId of giftIds) {
      if (!map[giftId]) map[giftId] = []
      if (!map[giftId].includes(packId)) map[giftId].push(packId)
    }
  }
  return map
})

function removeFromSelected(id) {
  userStore.removeFromSelected(id)
}

function clearAll() {
  if (confirm('确定清除所有已选中饰品？')) {
    for (const id of selectedIds.value) {
      userStore.removeFromSelected(id)
    }
  }
}

function openDetail(g) {
  selectedGift.value = g
}

function togglePackVisibility(packId) {
  const idx = hiddenPackIds.value.indexOf(packId)
  if (idx >= 0) {
    hiddenPackIds.value.splice(idx, 1)
  } else {
    hiddenPackIds.value.push(packId)
  }
  saveHiddenPacks()
}

function restoreAllHiddenPacks() {
  hiddenPackIds.value = []
  saveHiddenPacks()
}

onMounted(() => {
  loadPackImages(cardPackStore.cardPacks)
})

onUnmounted(() => {
  cleanup()
})
</script>

<style scoped>
.planning-page {
  padding: 16px;
  background: #1a1a2e;
  min-height: 100vh;
  font-family: LimbusFont, sans-serif;
  color: #e0e0e0;
}

.planning-page__section {
  margin-bottom: 24px;
}

.section-title {
  margin: 0;
  font-size: 16px;
  color: #e0e0e0;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.clear-all-btn {
  padding: 4px 12px;
  border: 1px solid #733;
  border-radius: 16px;
  background: #4a2a2a;
  color: #e74c3c;
  font-size: 12px;
  font-family: LimbusFont, sans-serif;
  cursor: pointer;
}

.clear-all-btn:hover {
  background: #5a3a3a;
}

.selected-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: flex-start;
}

.selected-list__empty {
  color: #666;
  font-size: 13px;
}

.selected-group {
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid #333;
}

.selected-group:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.selected-item {
  position: relative;
  cursor: pointer;
}

.selected-item__remove {
  position: absolute;
  top: -4px;
  right: -4px;
  background: #4a2a2a;
  border: 1px solid #733;
  border-radius: 50%;
  color: #e74c3c;
  font-size: 14px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  line-height: 1;
  padding: 0;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.15s;
}

.selected-item:hover .selected-item__remove {
  opacity: 1;
}

.selected-item__remove:hover {
  color: #ff6b6b;
  background: #5a3a3a;
}
</style>
