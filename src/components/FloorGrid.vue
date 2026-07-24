<template>
  <div class="floor-grid-container">
    <!-- 卡包缩略图总览 -->
    <div class="pack-overview">
      <div
        v-for="(pack, index) in sortedPacks"
        :key="pack.id"
        class="pack-overview__item"
        :style="{ borderColor: getColor(index) }"
      >
        <img v-if="packImages[pack.id]" :src="packImages[pack.id]" class="pack-overview__img" />
        <div v-else class="pack-overview__placeholder"></div>
        <span class="pack-overview__name">{{ pack.name }}</span>
        <button
          class="pack-overview__close"
          @click.stop="togglePackVisibility(pack.id)"
          title="隐藏此卡包"
        >
          ×
        </button>
      </div>
      <span v-if="!sortedPacks.length" class="pack-overview__empty">暂无卡包</span>
    </div>

    <!-- 楼层矩阵表格 -->
    <div v-if="sortedPacks.length" class="floor-table-wrapper">
      <table class="floor-table">
        <thead>
          <tr>
            <th class="floor-table__corner floor-table__sticky">层</th>
            <th v-for="(pack, index) in sortedPacks" :key="pack.id" class="floor-table__col-header">
              <span :style="{ color: getColor(index) }">{{ index + 1 }}</span>
              <button
                class="floor-table__col-close"
                @click.stop="togglePackVisibility(pack.id)"
                title="隐藏此卡包"
              >
                ×
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in floorRows" :key="row.key">
            <td class="floor-table__row-label floor-table__sticky">
              <span class="floor-table__floor-num">{{ row.label }}</span>
            </td>
            <td
              v-for="(pack, index) in sortedPacks"
              :key="pack.id"
              class="floor-table__cell"
              :class="{
                'floor-table__cell--active': isCellActive(pack, row),
                'floor-table__cell--merged': isCellMerged(pack, row),
              }"
              :style="getCellStyle(pack, row, index)"
              :rowspan="getRowSpan(pack, row)"
              @mouseenter="hoverPack = pack"
              @mouseleave="hoverPack = null"
              @click="selectPack(pack)"
            >
              <span v-if="shouldShowName(pack, row)" class="floor-table__cell-name">
                {{ pack.name }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 选中卡包的饰品详情 -->
    <div v-if="selectedPack" class="floor-detail">
      <h4 class="floor-detail__title">{{ selectedPack.name }} 的饰品</h4>
      <div class="floor-detail__gifts">
        <!-- 普通饰品 -->
        <GiftCard
          v-for="g in normalGifts"
          :key="g.id"
          :gift="g"
          @click="emit('clickGift', g)"
          @mouseenter="emit('hoverGift', g)"
        />
        <!-- 分隔符 -->
        <div v-if="normalGifts.length && recipeGifts.length" class="floor-detail__separator"></div>
        <!-- 可合成饰品 -->
        <GiftCard
          v-for="g in recipeGifts"
          :key="g.id"
          :gift="g"
          @click="emit('clickGift', g)"
          @mouseenter="emit('hoverGift', g)"
        />
        <span v-if="!allGiftsInPack.length" class="floor-detail__empty">暂无饰品</span>
      </div>

      <!-- 复刻饰品 -->
      <div v-if="reprintNormal.length || reprintRecipe.length" class="floor-detail__reprint">
        <span class="floor-detail__reprint-label">复刻</span>
        <div class="floor-detail__gifts">
          <GiftCard
            v-for="g in reprintNormal"
            :key="g.id"
            :gift="g"
            @click="emit('clickGift', g)"
            @mouseenter="emit('hoverGift', g)"
          />
          <div
            v-if="reprintNormal.length && reprintRecipe.length"
            class="floor-detail__separator"
          ></div>
          <GiftCard
            v-for="g in reprintRecipe"
            :key="g.id"
            :gift="g"
            @click="emit('clickGift', g)"
            @mouseenter="emit('hoverGift', g)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRecipesStore } from '@/stores/recipes'
import { useUserDataStore } from '@/stores/userData'
import GiftCard from '@/components/GiftCard.vue'
import { PACK_COLORS, FLOOR_ROWS } from '@/constants'

const props = defineProps({
  cardPacks: { type: Array, default: () => [] },
  filterPackId: { type: String, default: null },
  packImages: { type: Object, default: () => ({}) },
  gifts: { type: Array, default: () => [] },
  giftCardPackMap: { type: Object, default: () => ({}) },
  hiddenPacks: { type: Array, default: () => [] },
})

const emit = defineEmits(['hoverGift', 'clickGift', 'togglePackVisibility'])

const recipeStore = useRecipesStore()
const userStore = useUserDataStore()

const hoverPack = ref(null)
const selectedPack = ref(null)

// 颜色池
const colors = PACK_COLORS

function getColor(index) {
  return colors[index % colors.length]
}

// 排序：按平均楼层排序
const sortedPacks = computed(() => {
  // 过滤已隐藏的卡包
  const hidden = new Set(Array.isArray(props.hiddenPacks) ? props.hiddenPacks : [])
  let packs = props.cardPacks.filter(
    (p) => p.floors && p.floors.length > 0 && !hidden.has(p.id),
  )
  if (props.filterPackId) {
    packs = packs.filter((p) => p.id === props.filterPackId)
  }
  return packs.slice().sort((a, b) => {
    const avgA = a.floors.reduce((s, f) => s + f, 0) / a.floors.length
    const avgB = b.floors.reduce((s, f) => s + f, 0) / b.floors.length
    return avgA - avgB
  })
})

function togglePackVisibility(packId) {
  // 如果隐藏的是当前选中的卡包，取消选中
  if (selectedPack.value?.id === packId) {
    selectedPack.value = null
  }
  emit('togglePackVisibility', packId)
}

// 楼层行定义
const floorRows = FLOOR_ROWS

// 判断卡包是否包含某行楼层
function hasFloor(pack, row) {
  return pack.floors.some((f) => row.floors.includes(f))
}

// 获取合并行数
function getRowSpan(pack, row) {
  if (!hasFloor(pack, row)) return 1
  const idx = floorRows.indexOf(row)
  let span = 1
  for (let i = idx + 1; i < floorRows.length; i++) {
    if (hasFloor(pack, floorRows[i])) span++
    else break
  }
  return span
}

function isCellActive(pack, row) {
  return hasFloor(pack, row)
}

function isCellMerged(pack, row) {
  if (!hasFloor(pack, row)) return false
  const idx = floorRows.indexOf(row)
  return idx > 0 && hasFloor(pack, floorRows[idx - 1])
}

function shouldShowName(pack, row) {
  if (!hasFloor(pack, row)) return false
  const idx = floorRows.indexOf(row)
  return idx === 0 || !hasFloor(pack, floorRows[idx - 1])
}

function getCellStyle(pack, row, index) {
  if (!hasFloor(pack, row)) return {}
  const color = getColor(index)
  return {
    backgroundColor: color + '30',
    borderColor: color,
  }
}

function selectPack(pack) {
  selectedPack.value = selectedPack.value?.id === pack.id ? null : pack
}

// 获取卡包内所有饰品
const allGiftsInPack = computed(() => {
  if (!selectedPack.value) return []
  const packId = selectedPack.value.id
  const ids = []
  for (const [gid, pid] of Object.entries(props.giftCardPackMap)) {
    if (Array.isArray(pid) && pid.includes(packId)) ids.push(Number(gid))
    else if (pid === packId) ids.push(Number(gid))
  }
  return props.gifts.filter((g) => ids.includes(g.id))
})

// 判断是否为复刻
function isReprint(gift) {
  return (userStore.giftLabels[gift.id] || '') === '复刻'
}

// 判断是否可合成（该饰品可作为配方材料或结果）
function isRecipeGift(gift) {
  const recipes = recipeStore.recipes
  return recipes.some((r) => r.materialIds.includes(gift.id) || r.resultId === gift.id)
}

const normalGifts = computed(() => {
  return allGiftsInPack.value.filter((g) => !isReprint(g) && !isRecipeGift(g))
})

const recipeGifts = computed(() => {
  return allGiftsInPack.value.filter((g) => !isReprint(g) && isRecipeGift(g))
})

const reprintNormal = computed(() => {
  return allGiftsInPack.value.filter((g) => isReprint(g) && !isRecipeGift(g))
})

const reprintRecipe = computed(() => {
  return allGiftsInPack.value.filter((g) => isReprint(g) && isRecipeGift(g))
})
</script>

<style scoped>
.floor-grid-container {
  font-family: LimbusFont, sans-serif;
}

/* ===== 卡包总览 ===== */
.pack-overview {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 16px;
  padding: 12px;
  background: #1e1e3f;
  border-radius: 10px;
}

.pack-overview__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  border: 2px solid transparent;
  border-radius: 8px;
  padding: 4px;
}

.pack-overview__img {
  width: 50px;
  height: 65px;
  object-fit: cover;
  border-radius: 4px;
}

.pack-overview__placeholder {
  width: 50px;
  height: 65px;
  background: #333;
  border-radius: 4px;
}

.pack-overview__name {
  font-size: 11px;
  color: #ccc;
  text-align: center;
  max-width: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.pack-overview__item {
  position: relative;
}

.pack-overview__close {
  position: absolute;
  top: 2px;
  right: 2px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.6);
  color: #e0e0e0;
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.15s, background 0.15s;
  padding: 0;
}

.pack-overview__item:hover .pack-overview__close {
  opacity: 1;
}

.pack-overview__close:hover {
  background: rgba(231, 76, 60, 0.8);
}

.pack-overview__empty {
  color: #666;
  font-size: 13px;
}

/* ===== 楼层表格 ===== */
.floor-table-wrapper {
  overflow-x: auto;
}

.floor-table {
  border-collapse: separate;
  border-spacing: 3px;
  width: 100%;
}

.floor-table__sticky {
  position: sticky;
  left: 0;
  z-index: 2;
  background: #1a1a2e;
}

.floor-table__corner {
  width: 80px;
  font-size: 12px;
  color: #888;
  text-align: center;
}

.floor-table__col-header {
  position: relative;
  font-size: 12px;
  text-align: center;
  padding: 4px;
  min-width: 60px;
}

.floor-table__col-close {
  position: absolute;
  top: 2px;
  right: 2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.6);
  color: #e0e0e0;
  font-size: 12px;
  line-height: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.15s, background 0.15s;
  padding: 0;
}

.floor-table__col-header:hover .floor-table__col-close {
  opacity: 1;
}

.floor-table__col-close:hover {
  background: rgba(231, 76, 60, 0.8);
}

.floor-table__row-label {
  text-align: left;
  font-size: 13px;
  color: #aaa;
  font-weight: 700;
  padding: 4px 8px;
  min-width: 80px;
  white-space: nowrap;
}

.floor-table__floor-num {
  margin-right: 6px;
}

.floor-table__cell {
  background: #1e1e3f;
  border-radius: 4px;
  height: 28px;
  min-width: 60px;
}

.floor-table__cell--active {
  border: 2px solid;
  border-radius: 6px;
  text-align: center;
  vertical-align: middle;
  padding: 4px;
  cursor: pointer;
  transition: opacity 0.15s;
}

.floor-table__cell--active:hover {
  opacity: 0.8;
}

.floor-table__cell--merged {
  display: none;
}

.floor-table__cell-name {
  font-size: 12px;
  color: #e0e0e0;
  font-weight: 700;
}

/* ===== 卡包详情 ===== */
.floor-detail {
  margin-top: 16px;
  padding: 16px;
  background: #1e1e3f;
  border-radius: 10px;
}

.floor-detail__title {
  margin: 0 0 12px;
  font-size: 16px;
  color: #e0e0e0;
}

.floor-detail__gifts {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

.floor-detail__empty {
  color: #666;
  font-size: 14px;
}

.floor-detail__separator {
  width: 2px;
  align-self: stretch;
  background: #555;
  margin: 4px 8px;
  border-radius: 1px;
}

.floor-detail__reprint {
  margin-top: 10px;
  padding-top: 8px;
  border-top: 1px dashed #555;
}

.floor-detail__reprint-label {
  font-size: 12px;
  color: #888;
  margin-bottom: 6px;
  display: block;
}
</style>
