<template>
  <div v-if="gift" class="modal-overlay" @click.self="emit('close')">
    <div class="modal-content" ref="modalContentEl">
      <button class="modal-close" @click="emit('close')">×</button>

      <!-- 头部：图标 + 名称 + 类别 -->
      <div class="modal-header">
        <img :src="iconUrl" class="modal-icon" @error="onIconError" />
        <div>
          <h2 class="modal-name">{{ gift.name }}</h2>
          <div class="modal-category">
            <img v-if="categoryIcon" :src="categoryIcon" class="modal-category-icon" />
            <span>{{ effectiveCategory }}</span>
          </div>
        </div>
      </div>

      <!-- 控制区：版本切换 + 稀有度 -->
      <div class="modal-controls">
        <div class="pill-group">
          <button
            class="pill-btn"
            :class="{ active: version === 'base' }"
            @click="version = 'base'"
          >
            -
          </button>
          <button
            v-if="hasPlus"
            class="pill-btn"
            :class="{ active: version === 'plus' }"
            @click="version = 'plus'"
          >
            +
          </button>
          <button
            v-if="hasDoublePlus"
            class="pill-btn"
            :class="{ active: version === 'double_plus' }"
            @click="version = 'double_plus'"
          >
            ++
          </button>
        </div>
        <!-- 稀有度选择（管理员可见） -->
        <div v-if="modeStore.isAdmin" class="pill-group">
          <button
            v-for="r in rarityOptions"
            :key="r"
            class="pill-btn rarity-btn"
            :class="{ active: rarity === r }"
            @click="setRarity(r)"
          >
            {{ r }}
          </button>
        </div>
      </div>

      <!-- 描述区 -->
      <div
        class="modal-description"
        ref="descEl"
        v-html="descriptionHTML"
        @mouseenter="onDescriptionMouseEnter"
        @mousemove="onDescriptionMouseMove"
        @mouseleave="onDescriptionMouseLeave"
      ></div>

      <!-- 状态悬浮提示 -->
      <div
        v-if="statusTip.visible"
        class="status-tip"
        :style="{ left: statusTip.left + 'px', top: statusTip.top + 'px' }"
      >
        <div class="status-tip__name">{{ statusTip.trans }}</div>
        <div class="status-tip__desc">{{ statusTip.desc }}</div>
      </div>

      <!-- 合成配方 -->
      <div v-if="recipes.length > 0" class="recipe-section">
        <h3 class="recipe-section-title">合成方式</h3>
        <div v-for="recipe in recipes" :key="recipe.id" class="recipe-row">
          <span v-for="(mat, idx) in recipe.materialIds" :key="mat" class="recipe-entry">
            <img :src="giftHelpers.getIconUrl(mat)" class="recipe-mini-icon" />
            <span class="recipe-material-name">{{ giftHelpers.getGiftName(mat) }}</span>
            <span v-if="idx < recipe.materialIds.length - 1" class="recipe-plus">+</span>
          </span>
          <span class="recipe-arrow">→</span>
          <img :src="giftHelpers.getIconUrl(recipe.resultId)" class="recipe-mini-icon" />
          <span class="recipe-result-name">{{ giftHelpers.getGiftName(recipe.resultId) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { translateStatus, statusDescriptions, statusTranslations } from '@/utils/statusHelpers'
import { useUserDataStore } from '@/stores/userData'
import { useRecipesStore } from '@/stores/recipes'
import { useModeStore } from '@/stores/mode'
import { useGiftsStore } from '@/stores/gifts'
import { RARITY_ORDER } from '@/constants'
import { useCategoryIcon, useGiftHelpers } from '@/composables/useGiftHelpers'

const props = defineProps({ gift: Object })
const emit = defineEmits(['close'])

const userStore = useUserDataStore()
const recipeStore = useRecipesStore()
const modeStore = useModeStore()
const giftStore = useGiftsStore()

const version = ref('base')

// 切换饰品时重置版本为 -
watch(
  () => props.gift?.id,
  () => { version.value = 'base' },
)

// 状态悬浮提示
const statusTip = ref({ visible: false, left: 0, top: 0, trans: '', desc: '' })
const descEl = ref(null)

function getStatusEl(target) {
  let el = target
  while (el && el !== descEl.value) {
    if (el.getAttribute && el.getAttribute('data-status')) return el
    el = el.parentNode
  }
  return null
}

function onDescriptionMouseEnter(e) {
  if (getStatusEl(e.target)) {
    onDescriptionMouseMove(e)
  }
}

function onDescriptionMouseMove(e) {
  const statusEl = getStatusEl(e.target)
  if (!statusEl) {
    if (statusTip.value.visible) {
      statusTip.value.visible = false
    }
    return
  }
  const key = statusEl.getAttribute('data-status')
  const trans = statusTranslations[key] || key
  const desc = statusDescriptions[key] || trans
  statusTip.value = {
    visible: true,
    left: e.clientX + 12,
    top: e.clientY + 12,
    trans,
    desc,
  }
}

function onDescriptionMouseLeave() {
  statusTip.value.visible = false
}
const rarityOptions = RARITY_ORDER

const giftHelpers = useGiftHelpers(giftStore)

// 当前稀有度
const rarity = computed(() => {
  const userSet = userStore.giftRarities[props.gift.id]
  if (userSet) return userSet
  return props.gift.defaultRarity || RARITY_ORDER[RARITY_ORDER.length - 1]
})

// 有效类别（考虑覆盖）
const effectiveCategory = computed(() => {
  if (!props.gift) return ''
  return userStore.giftCategoryOverrides[props.gift.id] || props.gift.category
})

// 类别图标
const categoryOverride = computed(() => userStore.giftCategoryOverrides[props.gift.id] || props.gift.category)
const { categoryIcon } = useCategoryIcon(categoryOverride)

// 图标 URL（优先使用自定义 Base64）
const iconUrl = computed(() => {
  if (!props.gift) return ''
  return giftHelpers.getIconUrl(props.gift.id)
})

// 是否有强化版描述
const hasPlus = computed(() => {
  return !!(props.gift?.descriptions?.plus || props.gift?.simple_descriptions?.plus)
})

const hasDoublePlus = computed(() => {
  return !!(props.gift?.descriptions?.double_plus || props.gift?.simple_descriptions?.double_plus)
})

// 当前显示的描述（HTML 格式）
const descriptionHTML = computed(() => {
  if (!props.gift) return ''
  const desc = props.gift.descriptions?.[version.value] || ''
  // 去除每行开头的所有空格和制表符
  const cleaned = desc
    .split('\n')
    .map((line) => line.replace(/^[ \t]+/, ''))
    .join('\n')
  return translateStatus(cleaned)
})

// 该饰品的合成配方
const recipes = computed(() => {
  if (!props.gift) return []
  return recipeStore.getRecipesForGift(props.gift.id)
})

// ----- 方法 -----
function onIconError(e) {
  e.target.style.background = '#555'
  e.target.style.borderRadius = '8px'
}

function setRarity(r) {
  if (props.gift) {
    userStore.setRarity(props.gift.id, r)
  }
}
</script>

<style scoped>
/* 所有弹窗相关样式（从原 HTML 中提取，作用域仅限本组件） */
.modal-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  font-family: LimbusFont, sans-serif;
}

.modal-content {
  position: relative;
  max-width: 600px;
  width: 90%;
  background: #1e1e3f;
  border-radius: 12px;
  padding: 24px;
  color: #e0e0e0;
  max-height: 80vh;
  overflow-x: visible;
  overflow-y: auto;
}

.modal-close {
  position: absolute;
  top: 12px;
  right: 16px;
  background: none;
  border: none;
  color: #e0e0e0;
  font-size: 28px;
  cursor: pointer;
  line-height: 1;
}

.modal-close:hover {
  color: #fff;
}

.modal-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}

.modal-icon {
  width: 120px;
  height: 120px;
  object-fit: contain;
  border-radius: 8px;
}

.modal-name {
  margin: 0 0 8px;
  font-size: 20px;
  color: #e0e0e0;
}

.modal-category {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #aaa;
}

.modal-category-icon {
  width: 20px;
  height: 20px;
}

.modal-controls {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.pill-group {
  display: flex;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #444;
}

.pill-btn {
  padding: 6px 14px;
  background: #2a2a4a;
  border: none;
  color: #aaa;
  cursor: pointer;
  font-size: 13px;
  font-family: LimbusFont, sans-serif;
  transition:
    background 0.2s,
    color 0.2s;
}

.pill-btn:hover {
  background: #3a3a5a;
}

.pill-btn.active {
  background: #5a5aaa;
  color: #fff;
}

.rarity-btn {
  font-weight: bold;
}

.modal-description {
  position: relative;
  overflow: visible;
  line-height: 1.8;
  white-space: pre-wrap;
  font-size: 16px;
}

.modal-description :deep(.status-icon) {
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin-right: 2px;
}

.modal-description :deep(.status-name-translated) {
  color: #d4a843;
  text-decoration: underline;
  margin-right: 2px;
  cursor: help;
}

/* 状态悬浮提示 */
.status-tip {
  position: fixed;
  z-index: 3000;
  background: #2a2a4a;
  border: 1px solid #555;
  border-radius: 8px;
  padding: 12px;
  width: 220px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  pointer-events: none;
  font-size: 13px;
}

.status-tip__name {
  color: #d4a843;
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 14px;
}

.status-tip__desc {
  color: #ccc;
  line-height: 1.5;
  white-space: pre-wrap;
  word-break: break-all;
}

.recipe-section {
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid #333;
}

.recipe-section-title {
  margin: 0 0 12px;
  font-size: 15px;
  color: #aaa;
}

.recipe-row {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 8px;
  flex-wrap: wrap;
}

.recipe-entry {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.recipe-mini-icon {
  width: 28px;
  height: 28px;
  object-fit: contain;
  border-radius: 4px;
}

.recipe-material-name,
.recipe-result-name {
  font-size: 12px;
  color: #e0e0e0;
}

.recipe-plus {
  color: #aaa;
  font-size: 14px;
  margin: 0 2px;
}

.recipe-arrow {
  color: #aaa;
  font-size: 16px;
  margin: 0 4px;
}
</style>
