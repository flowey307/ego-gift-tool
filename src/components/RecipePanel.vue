<template>
  <div
    v-if="hoverGift"
    ref="panelRef"
    class="recipe-panel"
    :style="panelStyle"
    @mouseenter="emit('enter')"
    @mouseleave="emit('leave')"
  >
    <div
      class="recipe-panel__header"
      @mousedown="onDragStart"
      style="cursor: grab; user-select: none"
    >
      <h3 class="recipe-panel__title">合成方式</h3>
      <div class="recipe-panel__actions">
        <button class="recipe-panel__close" @click="emit('close')" aria-label="关闭">x</button>
      </div>
    </div>
    <div v-if="recipes.length === 0" class="recipe-panel__empty">暂无合成方式</div>
    <div v-else class="recipe-panel__list">
      <div v-for="r in recipes" :key="r.id" class="recipe-panel__item">
        <div v-if="r.resultId === hoverGift.id" class="recipe-panel__entry">
          <span class="recipe-panel__label">由</span>
          <span v-for="(mid, idx) in r.materialIds" :key="mid" class="recipe-panel__material">
            <img :src="getIcon(mid)" class="recipe-panel__icon" />
            <span class="recipe-panel__name">{{ getGiftName(mid) }}</span>
            <span v-if="idx < r.materialIds.length - 1" class="recipe-panel__plus">+</span>
          </span>
          <span class="recipe-panel__label">合成</span>
        </div>
        <div v-else class="recipe-panel__entry">
          <span class="recipe-panel__label">可合成为</span>
          <img :src="getIcon(r.resultId)" class="recipe-panel__icon" />
          <span class="recipe-panel__name">{{ getGiftName(r.resultId) }}</span>
        </div>
      </div>
    </div>
    <div v-if="packList.length" class="recipe-panel__packs">
      <h4 class="recipe-panel__packs-title">所属卡包</h4>
      <div v-for="p in packList" :key="p.id" class="recipe-panel__pack-item">
        <img v-if="packImages[p.id]" :src="packImages[p.id]" class="recipe-panel__pack-img" />
        <div v-else class="recipe-panel__pack-placeholder"></div>
        <span class="recipe-panel__pack-name">{{ p.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['enter', 'leave', 'close', 'drag'])

defineProps({
  recipes: { type: Array, required: true, default: () => [] },
  packList: { type: Array, required: true, default: () => [] },
  packImages: { type: Object, required: true, default: () => ({}) },
  hoverGift: { type: Object, default: null },
  getIcon: { type: Function, required: true },
  getGiftName: { type: Function, required: true },
  panelStyle: { type: Object, required: true },
  onDragStart: { type: Function, default: null },
})

const panelRef = ref(null)
</script>

<style scoped>
.recipe-panel {
  position: fixed;
  max-height: calc(100vh - 80px);
  overflow-y: auto;
  background: #1e1e3f;
  border: 1px solid #333;
  border-radius: 10px;
  padding: 12px;
  z-index: 9999;
  box-shadow: -4px 0 12px rgba(0, 0, 0, 0.4);
  width: 350px;
  user-select: none;
}

.recipe-panel__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  cursor: grab;
}

.recipe-panel__header:active {
  cursor: grabbing;
}

.recipe-panel__actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.recipe-panel__close {
  background: none;
  border: none;
  color: #aaa;
  font-size: 22px;
  cursor: pointer;
  padding: 0 4px;
  line-height: 1;
}

.recipe-panel__close:hover {
  color: #fff;
}

.recipe-panel__empty {
  color: #777;
  font-size: 13px;
  text-align: center;
  padding: 20px 0;
}

.recipe-panel__list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.recipe-panel__item {
  padding: 8px;
  background: #2a2a4a;
  border-radius: 8px;
}

.recipe-panel__entry {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
  font-size: 13px;
}

.recipe-panel__label {
  color: #aaa;
  margin: 0 2px;
}

.recipe-panel__material {
  display: inline-flex;
  align-items: center;
  gap: 3px;
}

.recipe-panel__icon {
  width: 40px;
  height: 40px;
  object-fit: contain;
  border-radius: 3px;
}

.recipe-panel__name {
  color: #e0e0e0;
  font-size: 12px;
}

.recipe-panel__plus {
  color: #aaa;
  margin: 0 2px;
}

.recipe-panel__packs {
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px solid #333;
}

.recipe-panel__packs-title {
  margin: 0 0 8px;
  font-size: 14px;
  color: #aaa;
}

.recipe-panel__pack-item {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 6px;
}

.recipe-panel__pack-img {
  width: 40px;
  height: 52px;
  object-fit: cover;
  border-radius: 4px;
}

.recipe-panel__pack-placeholder {
  width: 40px;
  height: 52px;
  background: #333;
  border-radius: 4px;
}

.recipe-panel__pack-name {
  font-size: 13px;
  color: #ccc;
}
</style>
