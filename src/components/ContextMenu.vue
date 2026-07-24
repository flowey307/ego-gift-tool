<template>
  <div
    v-if="position"
    ref="menuRef"
    class="context-menu"
    :style="{ left: position.x + 'px', top: position.y + 'px' }"
  >
    <!-- 添加 -->
    <div class="context-menu__item" @click="handleAdd">+ 添加</div>

    <!-- 管理员额外功能 -->
    <template v-if="modeStore.isAdmin">
      <div class="context-menu__item" @click="handleEditLabel">修改标签</div>
      <div v-if="showLabelInput" class="context-menu__inline">
        <input
          ref="labelInput"
          v-model="labelValue"
          class="context-menu__input"
          placeholder="输入标签（如：复刻）"
          @keydown.enter="confirmLabel"
          @blur="confirmLabel"
        />
      </div>

      <div v-if="cardPacks.length > 0" class="context-menu__item" @click="handleEditPack">
        修改所属卡包
      </div>
      <div v-if="showPackSelect" class="context-menu__inline">
        <select v-model="packValue" class="context-menu__select" @change="confirmPack">
          <option :value="null">（无）</option>
          <option v-for="p in cardPacks" :key="p.id" :value="p.id">
            {{ p.name }}
          </option>
        </select>
      </div>

      <div class="context-menu__item" @click="handleEditCategory">修改类别</div>
      <div v-if="showCategorySelect" class="context-menu__inline">
        <select v-model="categoryValue" class="context-menu__select">
          <option value="" disabled>选择类别...</option>
          <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
        </select>
        <button class="context-menu__confirm" @click="confirmCategory">确认</button>
      </div>

      <div class="context-menu__item" @click="handleEditGift">编辑饰品</div>
      <div class="context-menu__item context-menu__item--danger" @click="handleDelete">
        删除饰品
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'
import { useModeStore } from '@/stores/mode'
import { CATEGORIES } from '@/constants'

const props = defineProps({
  position: Object, // { x, y }
  gift: Object,
  cardPacks: Array,
  currentLabel: String,
  currentCardPackId: String,
})
const emit = defineEmits([
  'addToSelected',
  'saveLabel',
  'saveCardPack',
  'changeCategory',
  'deleteGift',
  'editGift',
  'close',
])

const modeStore = useModeStore()
const categories = CATEGORIES

const showLabelInput = ref(false)
const showPackSelect = ref(false)
const showCategorySelect = ref(false)
const labelValue = ref('')
const packValue = ref(null)
const categoryValue = ref('')
const menuRef = ref(null)
const labelInput = ref(null)

// 点击外部关闭
function handleOutsideClick(e) {
  if (menuRef.value && !menuRef.value.contains(e.target)) {
    emit('close')
  }
}

// 监听位置变化，重置状态 + 管理外部点击
watch(
  () => props.position,
  (newPos) => {
    if (newPos) {
      showLabelInput.value = false
      showPackSelect.value = false
      showCategorySelect.value = false
      labelValue.value = props.currentLabel || ''
      packValue.value = props.currentCardPackId || null
      categoryValue.value = ''
      document.addEventListener('click', handleOutsideClick)
    } else {
      document.removeEventListener('click', handleOutsideClick)
    }
  },
  { immediate: true },
)

// ----- 操作方法 -----
function handleAdd() {
  if (props.gift) emit('addToSelected', props.gift.id)
  emit('close')
}

function handleEditLabel() {
  showLabelInput.value = !showLabelInput.value
  showPackSelect.value = false
  showCategorySelect.value = false
  nextTick(() => labelInput.value?.focus())
}

function confirmLabel() {
  if (props.gift) emit('saveLabel', props.gift.id, labelValue.value)
  showLabelInput.value = false
  emit('close')
}

function handleEditPack() {
  showPackSelect.value = !showPackSelect.value
  showLabelInput.value = false
  showCategorySelect.value = false
}

function confirmPack() {
  if (props.gift) emit('saveCardPack', props.gift.id, packValue.value)
  showPackSelect.value = false
  emit('close')
}

function handleEditCategory() {
  showCategorySelect.value = !showCategorySelect.value
  showLabelInput.value = false
  showPackSelect.value = false
}

function confirmCategory() {
  if (props.gift && categoryValue.value) {
    emit('changeCategory', props.gift.id, categoryValue.value)
  }
  showCategorySelect.value = false
  emit('close')
}

function handleEditGift() {
  if (props.gift) emit('editGift', props.gift)
  emit('close')
}

function handleDelete() {
  if (props.gift && confirm(`确定删除「${props.gift.name}」吗？此操作不可撤销。`)) {
    emit('deleteGift', props.gift.id)
  }
  emit('close')
}
</script>

<style scoped>
.context-menu {
  position: fixed;
  z-index: 1000;
  background: #2a2a4a;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  padding: 4px 0;
  min-width: 160px;
  font-family: LimbusFont, sans-serif;
  color: #e0e0e0;
}
.context-menu__item {
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.15s;
}
.context-menu__item:hover {
  background: #3a3a6a;
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
.context-menu__input,
.context-menu__select {
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
.context-menu__input:focus,
.context-menu__select:focus {
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
  font-family: LimbusFont, sans-serif;
  cursor: pointer;
}
.context-menu__confirm:hover {
  background: #6a6abb;
}
</style>
