import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import rawPacks from '@/data/cardPacks.js'
import { loadFromLocal, saveToLocal } from '@/utils/storage'

export const useCardPackStore = defineStore('cardPack', () => {
  const cardPacks = ref([])
  const selectedPackId = ref(null)
  // 新增：卡包→饰品ID列表的映射
  const packGifts = ref({})

  // 墓碑键：区分「卡包+饰品」的移除记录
  const tombstoneKey = (packId, giftId) => `${packId}::${giftId}`

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
    const removed = loadFromLocal('removedPackGifts', [])

    // 合并预设 giftIds（只增不覆盖）：
    //   - 本地没有该卡包映射 → 用预设 giftIds 作种子
    //   - 本地已有映射 → 追加预设中缺失的 giftId（用户改过的保留，不被冲掉）
    //   - 用户主动移除过的预设饰品 → 记在 removedPackGifts 墓碑里，不再追加
    for (const pack of cardPacks.value) {
      const preset = rawPacks.find((p) => p.id === pack.id)
      const presetIds = preset?.giftIds || []

      if (!gifts[pack.id]) {
        gifts[pack.id] = presetIds.filter((gid) => !removed.includes(tombstoneKey(pack.id, gid)))
        continue
      }

      const current = gifts[pack.id]
      const added = presetIds.filter(
        (gid) => !current.includes(gid) && !removed.includes(tombstoneKey(pack.id, gid)),
      )
      if (added.length > 0) {
        current.push(...added)
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
    // 清理该卡包的饰品墓碑，避免卡包重建后旧墓碑误伤
    const removedGifts = loadFromLocal('removedPackGifts', [])
    const nextRemoved = removedGifts.filter((k) => !k.startsWith(`${id}::`))
    if (nextRemoved.length !== removedGifts.length) {
      saveToLocal('removedPackGifts', nextRemoved)
    }
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
    // 手动加回来 → 清除对应墓碑，避免下次加载又被当成「用户移除过」
    clearTombstone(packId, giftId)
  }

  function removeGiftFromPack(packId, giftId) {
    if (packGifts.value[packId]) {
      packGifts.value[packId] = packGifts.value[packId].filter((id) => id !== giftId)
      saveToLocal('packGifts', packGifts.value)
    }
    // 用户主动移除 → 记入墓碑，防止预设里同款饰品下次加载又被追加回来
    addTombstone(packId, giftId)
  }

  function setPackGifts(packId, giftIds) {
    packGifts.value[packId] = [...giftIds]
    saveToLocal('packGifts', packGifts.value)
  }

  // --- 墓碑：记录用户主动移除过的「卡包+饰品」组合 ---
  // 只记录预设中的饰品 —— 非预设饰品删了也不会被重新注入，无需墓碑
  function addTombstone(packId, giftId) {
    const preset = rawPacks.find((p) => p.id === packId)
    if (!preset?.giftIds?.includes(giftId)) return
    const removed = loadFromLocal('removedPackGifts', [])
    const key = tombstoneKey(packId, giftId)
    if (!removed.includes(key)) {
      removed.push(key)
      saveToLocal('removedPackGifts', removed)
    }
  }

  function clearTombstone(packId, giftId) {
    const removed = loadFromLocal('removedPackGifts', [])
    const key = tombstoneKey(packId, giftId)
    const next = removed.filter((k) => k !== key)
    if (next.length !== removed.length) {
      saveToLocal('removedPackGifts', next)
    }
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
