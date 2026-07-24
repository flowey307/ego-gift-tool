// src/stores/userData.js
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loadFromLocal, saveToLocal } from '@/utils/storage'

export const useUserDataStore = defineStore('userData', () => {
  // --- 状态 ---
  const selectedGiftIds = ref(loadFromLocal('selectedGiftIds', []))
  const giftLabels = ref(loadFromLocal('giftLabels', {}))
  const giftRarities = ref(loadFromLocal('giftRarities', {}))
  const giftCategoryOverrides = ref(loadFromLocal('giftCategoryOverrides', {}))
  const giftCardPackMap = ref(loadFromLocal('giftCardPackMap', {}))

  // --- 选中饰品 ---
  function addToSelected(id) {
    if (!selectedGiftIds.value.includes(id)) {
      selectedGiftIds.value.push(id)
      saveToLocal('selectedGiftIds', selectedGiftIds.value)
    }
  }

  function removeFromSelected(id) {
    selectedGiftIds.value = selectedGiftIds.value.filter((g) => g !== id)
    saveToLocal('selectedGiftIds', selectedGiftIds.value)
  }

  // --- 标签（如 "复刻"） ---
  function setLabel(id, label) {
    if (label && label.trim()) {
      giftLabels.value[id] = label.trim()
    } else {
      delete giftLabels.value[id]
    }
    saveToLocal('giftLabels', giftLabels.value)
  }

  // --- 稀有度（I ~ EX） ---
  function setRarity(id, rarity) {
    if (rarity) {
      giftRarities.value[id] = rarity
    } else {
      delete giftRarities.value[id]
    }
    saveToLocal('giftRarities', giftRarities.value)
  }

  // --- 类别覆盖（管理员可改类别） ---
  function setCategoryOverride(id, category) {
    if (category) {
      giftCategoryOverrides.value[id] = category
    } else {
      delete giftCategoryOverrides.value[id]
    }
    saveToLocal('giftCategoryOverrides', giftCategoryOverrides.value)
  }

  // --- 卡包映射（一个饰品可属于多个卡包） ---
  function setGiftCardPack(giftId, packId) {
    if (packId) {
      giftCardPackMap.value[giftId] = packId
    } else {
      delete giftCardPackMap.value[giftId]
    }
    saveToLocal('giftCardPackMap', giftCardPackMap.value)
  }

  function addGiftToPack(giftId, packId) {
    const current = giftCardPackMap.value[giftId]
    if (Array.isArray(current)) {
      if (!current.includes(packId)) {
        current.push(packId)
        saveToLocal('giftCardPackMap', giftCardPackMap.value)
      }
    } else if (current) {
      giftCardPackMap.value[giftId] = [current, packId]
      saveToLocal('giftCardPackMap', giftCardPackMap.value)
    } else {
      giftCardPackMap.value[giftId] = packId
      saveToLocal('giftCardPackMap', giftCardPackMap.value)
    }
  }

  function removeGiftFromPack(giftId, packId) {
    const current = giftCardPackMap.value[giftId]
    if (Array.isArray(current)) {
      const filtered = current.filter((p) => p !== packId)
      if (filtered.length === 0) {
        delete giftCardPackMap.value[giftId]
      } else {
        giftCardPackMap.value[giftId] = filtered
      }
    } else if (current === packId) {
      delete giftCardPackMap.value[giftId]
    }
    saveToLocal('giftCardPackMap', giftCardPackMap.value)
  }

  function giftBelongsToPack(giftId, packId) {
    const val = giftCardPackMap.value[giftId]
    return Array.isArray(val) ? val.includes(packId) : val === packId
  }

  return {
    selectedGiftIds,
    giftLabels,
    giftRarities,
    giftCategoryOverrides,
    giftCardPackMap,
    addToSelected,
    removeFromSelected,
    setLabel,
    setRarity,
    setCategoryOverride,
    setGiftCardPack,
    addGiftToPack,
    removeGiftFromPack,
    giftBelongsToPack,
  }
})
