import { ref, computed } from 'vue'
import {
  ICON_BASE_URL,
  ICON_STORAGE_KEY,
  CARD_PACK_BASE_URL,
  CARDPACK_IMG_STORAGE_KEY,
  BUF_BASE_URL,
} from '@/constants'
import { CATEGORY_ICON_MAP } from '@/constants'

/**
 * Composable for gift-related utility functions.
 * Shared across views and components to avoid duplication.
 */
export function useGiftHelpers(giftStore) {
  function getIconUrl(id) {
    const base64 = localStorage.getItem(ICON_STORAGE_KEY(id))
    return base64 || `${ICON_BASE_URL}/${id}.png`
  }

  function getGiftName(id) {
    const g = giftStore.gifts.find((item) => item.id === id)
    return g ? g.name : `#${id}`
  }

  function getGift(id) {
    return giftStore.gifts.find((g) => g.id === id) || { id, name: `#${id}` }
  }

  return { getIconUrl, getGiftName, getGift }
}

/**
 * Composable for card pack image loading.
 * Shared across CompendiumPage, PlanningPage, PackGiftsPage.
 */
export function usePackImages() {
  const packImages = ref({})

  function loadPackImages(cardPacks) {
    const images = {}
    for (const pack of cardPacks) {
      if (pack.imageKey) {
        const key = pack.imageKey.endsWith('.png') ? pack.imageKey : `${pack.imageKey}.png`
        images[pack.id] = `${CARD_PACK_BASE_URL}/${key}`
      } else {
        const data = localStorage.getItem(CARDPACK_IMG_STORAGE_KEY(pack.id))
        if (data) images[pack.id] = data
      }
    }
    packImages.value = images
  }

  return { packImages, loadPackImages }
}

/**
 * Composable for category icon URL resolution.
 * Used by GiftCard and GiftDetailModal.
 */
export function useCategoryIcon(categoryOverride) {
  const categoryIcon = computed(() => {
    const cat = categoryOverride.value || ''
    if (cat === '泛用') return null
    const en = CATEGORY_ICON_MAP[cat]
    return en ? `${BUF_BASE_URL}/${en}.png` : null
  })

  return { categoryIcon }
}
