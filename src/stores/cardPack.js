import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import rawPacks from '@/data/cardPacks.js'
import defaultPackGifts from '@/data/cardPackGifts.js' // 新增
import { loadFromLocal, saveToLocal } from '@/utils/storage'

export const useCardPackStore = defineStore('cardPack', () => {
  const cardPacks = ref([])
  const selectedPackId = ref(null)
  // 新增：卡包→饰品ID列表的映射
  const packGifts = ref({})

  // --- 加载卡包 ---
  function loadPacks() {
    const saved = loadFromLocal('cardPacks', [])
    // 如果 saved 有数据，但某些卡包 floors 为空，从预设补全
    if (saved.length > 0) {
      // 建立预设数据的映射（按 id 或 imageKey）
      const presetMap = {}
      rawPacks.forEach((p) => {
        presetMap[p.id] = p.floors || []
        // 如果预设中有 imageKey 且与 id 不同，也可作为备用
        if (p.imageKey && p.imageKey !== p.id) {
          presetMap[p.imageKey] = p.floors || []
        }
      })
      // 合并：如果 saved 中的 floors 为空，且预设中有值，则使用预设值
      const merged = saved.map((p) => {
        const presetFloors = presetMap[p.id] || presetMap[p.imageKey]
        if (presetFloors && presetFloors.length > 0 && (!p.floors || p.floors.length === 0)) {
          p.floors = [...presetFloors]
        }
        return p
      })
      cardPacks.value = merged
      saveToLocal('cardPacks', cardPacks.value)
    } else {
      // 无数据，使用预设
      cardPacks.value = rawPacks.map((p) => ({
        id: p.id,
        name: p.name,
        imageKey: p.imageKey || null,
        floors: p.floors || [],
      }))
      saveToLocal('cardPacks', cardPacks.value)
    }

    const savedGifts = loadFromLocal('packGifts', null)
    if (savedGifts !== null) {
      packGifts.value = savedGifts
    } else {
      packGifts.value = { ...defaultPackGifts }
      saveToLocal('packGifts', packGifts.value)
    }
  }

  // --- 卡包 CRUD ---
  function addCardPack(name, imageKey) {
    const id = crypto.randomUUID()
    const newPack = { id, name, imageKey: imageKey || null, floors: [] }
    cardPacks.value.push(newPack)
    saveToLocal('cardPacks', cardPacks.value)
    // 同时初始化其饰品列表为空
    packGifts.value[id] = []
    saveToLocal('packGifts', packGifts.value)
    return id
  }

  function renameCardPack(id, newName) {
    const pack = cardPacks.value.find((p) => p.id === id)
    if (pack) {
      pack.name = newName
      saveToLocal('cardPacks', cardPacks.value)
    }
  }

  function setFloors(id, floors) {
    const pack = cardPacks.value.find((p) => p.id === id)
    if (pack) {
      pack.floors = [...new Set(floors)].filter((f) => f >= 1 && f <= 15).sort((a, b) => a - b)
      saveToLocal('cardPacks', cardPacks.value)
    }
  }

  function removeCardPack(id) {
    cardPacks.value = cardPacks.value.filter((p) => p.id !== id)
    if (selectedPackId.value === id) selectedPackId.value = null
    saveToLocal('cardPacks', cardPacks.value)
    // 删除对应的饰品映射
    delete packGifts.value[id]
    saveToLocal('packGifts', packGifts.value)
  }

  function selectPack(id) {
    selectedPackId.value = id
  }

  // --- 卡包饰品操作 ---
  function getGiftsForPack(packId) {
    return packGifts.value[packId] || []
  }

  function addGiftToPack(packId, giftId) {
    if (!packGifts.value[packId]) {
      packGifts.value[packId] = []
    }
    if (!packGifts.value[packId].includes(giftId)) {
      packGifts.value[packId].push(giftId)
      saveToLocal('packGifts', packGifts.value)
    }
  }

  function removeGiftFromPack(packId, giftId) {
    if (packGifts.value[packId]) {
      packGifts.value[packId] = packGifts.value[packId].filter((id) => id !== giftId)
      saveToLocal('packGifts', packGifts.value)
    }
  }

  function setPackGifts(packId, giftIds) {
    packGifts.value[packId] = [...giftIds]
    saveToLocal('packGifts', packGifts.value)
  }

  // --- 计算属性：楼层分布（用于 FloorGrid） ---
  const floorDistribution = computed(() => {
    const map = {}
    for (let i = 1; i <= 15; i++) map[i] = []
    for (const pack of cardPacks.value) {
      for (const floor of pack.floors) {
        if (map[floor]) map[floor].push(pack)
      }
    }
    return map
  })

  return {
    cardPacks,
    selectedPackId,
    packGifts,
    floorDistribution,
    loadPacks,
    addCardPack,
    renameCardPack,
    setFloors,
    removeCardPack,
    selectPack,
    getGiftsForPack,
    addGiftToPack,
    removeGiftFromPack,
    setPackGifts,
  }
})
