import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import rawPacks from '@/data/cardPacks.js'
import { loadFromLocal, saveToLocal } from '@/utils/storage'

export const useCardPackStore = defineStore('cardPack', () => {
  const cardPacks = ref([])
  const selectedPackId = ref(null)
  // 新增：卡包→饰品ID列表的映射
  const packGifts = ref({})

  // --- 加载卡包 ---
  // 合并策略为「只增不覆盖」：
  //   - 本地已有的卡包以用户版本为准（改名、改楼层都不会被预设冲掉）
  //   - 预设中本地没有的卡包会追加进来，新用户/老用户都能拿到最新预设
  //   - 预设里删掉的卡包不会从本地移除，避免误删用户数据
  //   - 新追加的卡包同时会补上预设的 giftIds 种子
  function loadPacks() {
    const toPack = (p) => ({
      id: p.id,
      name: p.name,
      imageKey: p.imageKey || null,
      floors: p.floors || [],
    })

    const saved = loadFromLocal('cardPacks', [])

    if (saved.length > 0) {
      // 已有本地数据：补全 floors，并把预设中缺失的卡包追加进来
      const presetMap = {}
      rawPacks.forEach((p) => {
        presetMap[p.id] = p.floors || []
        // 如果预设中有 imageKey 且与 id 不同，也可作为备用
        if (p.imageKey && p.imageKey !== p.id) {
          presetMap[p.imageKey] = p.floors || []
        }
      })
      const merged = saved.map((p) => {
        const presetFloors = presetMap[p.id] || presetMap[p.imageKey]
        if (presetFloors && presetFloors.length > 0 && (!p.floors || p.floors.length === 0)) {
          p.floors = [...presetFloors]
        }
        return p
      })

      const removedIds = loadFromLocal('removedPackIds', [])
      const localIds = new Set(merged.map((p) => p.id))
      const added = rawPacks
        .filter((p) => !localIds.has(p.id) && !removedIds.includes(p.id))
        .map(toPack)
      if (added.length > 0) {
        merged.push(...added)
      }

      cardPacks.value = merged
    } else {
      // 无本地数据，全量使用预设
      cardPacks.value = rawPacks.map(toPack)
    }
    saveToLocal('cardPacks', cardPacks.value)

    const savedGifts = loadFromLocal('packGifts', null)
    const gifts = savedGifts !== null ? savedGifts : {}

    // 确保每个卡包都有映射条目；缺的新卡包用预设 giftIds 作种子
    for (const pack of cardPacks.value) {
      if (!gifts[pack.id]) {
        const preset = rawPacks.find((p) => p.id === pack.id)
        gifts[pack.id] = [...(preset?.giftIds || [])]
      }
    }
    packGifts.value = gifts
    saveToLocal('packGifts', packGifts.value)
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
    const pack = cardPacks.value.find((p) => p.id === id)
    cardPacks.value = cardPacks.value.filter((p) => p.id !== id)
    if (selectedPackId.value === id) selectedPackId.value = null
    saveToLocal('cardPacks', cardPacks.value)
    // 预设卡包被删除时记入墓碑，避免下次加载被「新增预设卡包」的逻辑加回来
    if (pack && rawPacks.some((p) => p.id === id)) {
      const removed = loadFromLocal('removedPackIds', [])
      if (!removed.includes(id)) {
        removed.push(id)
        saveToLocal('removedPackIds', removed)
      }
    }
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
