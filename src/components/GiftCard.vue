<template>
  <div
    class="gift-card"
    :class="`gift-card--${size}`"
    @click="emit('click', gift)"
    @contextmenu.prevent="emit('contextmenu', $event)"
    @mouseenter="emit('hover', gift)"
  >
    <span v-if="rarity" class="gift-card__rarity">{{ rarity }}</span>
    <img :src="iconUrl" :alt="gift.name" class="gift-card__icon" @error="onError" />
    <img v-if="categoryIcon" :src="categoryIcon" :alt="gift.category" class="gift-card__category" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useUserDataStore } from '@/stores/userData'
import { useCategoryIcon } from '@/composables/useGiftHelpers'

const props = defineProps({
  gift: { type: Object, required: true },
  size: { type: String, default: 'normal' }, // normal | small
})
const emit = defineEmits(['click', 'contextmenu', 'hover'])

const userStore = useUserDataStore()

const rarity = computed(() => {
  const userSet = userStore.giftRarities[props.gift.id]
  if (userSet) return userSet
  return props.gift.defaultRarity || null
})

const categoryOverride = computed(() => userStore.giftCategoryOverrides[props.gift.id] || props.gift.category)
const { categoryIcon } = useCategoryIcon(categoryOverride)

const iconUrl = computed(() => {
  const base64 = localStorage.getItem(`egogift_icon_${props.gift.id}`)
  return base64 || `./EgoGiftIcon/${props.gift.id}.png`
})

function onError(e) {
  e.target.style.display = 'none'
}
</script>

<style scoped>
.gift-card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #2a2a4a;
  cursor: pointer;
  transition: box-shadow 0.2s ease;
  font-family: LimbusFont, sans-serif;
}
.gift-card:hover {
  box-shadow: 0 0 12px 3px rgba(120, 120, 255, 0.6);
}
.gift-card--normal {
  width: 80px;
  height: 80px;
}
.gift-card--small {
  width: 50px;
  height: 50px;
}
.gift-card--small .gift-card__category {
  width: 14px;
  height: 14px;
  right: 1px;
  bottom: 1px;
}
.gift-card--small .gift-card__rarity {
  font-size: 12px;
  left: 1px;
  top: 1px;
}
.gift-card__icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 8px;
}
.gift-card__category {
  position: absolute;
  right: 2px;
  bottom: 2px;
  width: 20px;
  height: 20px;
  pointer-events: none;
}
.gift-card__rarity {
  position: absolute;
  left: 2px;
  top: 2px;
  background: none;
  color: #ffba00;
  font-size: 21px;
  font-weight: 700;
  padding: 1px 4px;
  border-radius: 3px;
  pointer-events: none;
  z-index: 1;
}
</style>
