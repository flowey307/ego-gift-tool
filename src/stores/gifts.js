// src/stores/gifts.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import rawGifts from '@/data/gifts.js'
import { loadFromLocal, saveToLocal } from '@/utils/storage'

export const useGiftsStore = defineStore('gifts', () => {
  // --- 状态 ---
  const gifts = ref([])
  const loadStatus = ref('idle')
  const loadError = ref(null)
  const activeCategory = ref('全部')
  const searchQuery = ref('')

  // --- 加载数据 ---
  // 合并策略为「只增不覆盖」，与卡包 / 配方保持一致：
  //   - 本地快照存在 → 以本地为准，预设中新增的饰品追加进来
  //   - 预设中删掉的饰品 → 不会从本地移除，避免误删用户数据
  //   - 用户改过的饰品 → 保留用户的版本，预设覆盖会被本地快照挡住
  //   - 用户删掉的饰品 → 记入 deletedGiftIds 墓碑，重开不会复活
  //
  // 统一维护 `giftsSnapshot`：本地快照是数据的唯一基准（以用户为主），
  // 预设只在加载时提供新增内容，不会覆盖用户改过的版本。
  function persistSnapshot() {
    saveToLocal('giftsSnapshot', gifts.value)
  }

  async function loadGifts() {
    loadStatus.value = 'loading'
    try {
      const snapshot = loadFromLocal('giftsSnapshot', null)
      const custom = loadFromLocal('customGifts', [])
      const deleted = loadFromLocal('deletedGiftIds', [])
      const overrides = loadFromLocal('giftOverrides', {})
      const isFirstLoad = !snapshot || !Array.isArray(snapshot) || snapshot.length === 0

      if (isFirstLoad) {
        // 首次加载（或已清空）：全量使用预设
        gifts.value = rawGifts.map((g) => ({ ...g, isCustom: false }))
      } else {
        // 本地已有快照：以本地为基准，追加预设中新增的饰品
        const localIds = new Set(snapshot.map((g) => g.id))
        const added = rawGifts
          .filter((g) => !localIds.has(g.id) && !deleted.includes(g.id))
          .map((g) => ({ ...g, isCustom: false }))
        gifts.value = added.length > 0 ? [...snapshot, ...added] : snapshot
      }

      // 应用用户覆盖（giftOverrides 是用户编辑的最终意图，始终优先于预设与快照）
      // 迁移场景：老用户只有 giftOverrides、没有快照时，靠这一步保住编辑
      gifts.value = gifts.value.map((g) => {
        const ov = overrides[g.id]
        return ov ? { ...g, ...ov, isCustom: g.isCustom } : g
      })

      // 自定义饰品并入（不在预设内，不会与预设冲突）
      for (const c of custom) {
        if (!gifts.value.some((g) => g.id === c.id)) {
          gifts.value.push({ ...c, isCustom: true })
        }
      }

      // 墓碑过滤：用户删掉的饰品不显示
      gifts.value = gifts.value.filter((g) => !deleted.includes(g.id))

      // 首次生成快照，后续都以本地为准
      if (isFirstLoad) persistSnapshot()

      loadStatus.value = 'success'
    } catch (err) {
      loadError.value = err.message
      loadStatus.value = 'error'
    }
  }

  // --- 计算属性：过滤后的饰品 ---
  const filteredGifts = computed(() => {
    let result = gifts.value
    if (activeCategory.value !== '全部') {
      result = result.filter((g) => g.category === activeCategory.value)
    }
    const q = searchQuery.value.trim().toLowerCase()
    if (q) {
      result = result.filter((g) => g.name.toLowerCase().includes(q))
    }
    return result
  })

  // --- 操作 ---
  function setCategory(cat) {
    activeCategory.value = cat
  }

  function setSearchQuery(q) {
    searchQuery.value = q
  }

  // --- 管理员：增删改 ---
  function addGift(giftData) {
    const id = 80000 + Math.floor(Math.random() * 10000)
    const newGift = {
      id,
      name: giftData.name || '未命名饰品',
      category: giftData.category || '泛用',
      descriptions: {
        base: giftData.descBase || '',
        plus: giftData.descPlus || '',
        double_plus: giftData.descDoublePlus || '',
      },
      simple_descriptions: {
        base: '',
        plus: '',
        double_plus: '',
      },
      isCustom: true,
    }

    gifts.value.push(newGift)
    persistSnapshot()

    const custom = loadFromLocal('customGifts', [])
    custom.push(newGift)
    saveToLocal('customGifts', custom)

    if (giftData.iconBase64) {
      try {
        localStorage.setItem(`egogift_icon_${id}`, giftData.iconBase64)
      } catch {
        // icon storage failed, continue
      }
    }

    return id
  }

  function updateGift(id, data) {
    const index = gifts.value.findIndex((g) => g.id === id)
    if (index === -1) return

    const old = gifts.value[index]
    const updated = {
      ...old,
      name: data.name || old.name,
      category: data.category || old.category,
      descriptions: {
        base: data.descBase !== undefined ? data.descBase : old.descriptions.base,
        plus: data.descPlus !== undefined ? data.descPlus : old.descriptions.plus,
        double_plus:
          data.descDoublePlus !== undefined ? data.descDoublePlus : old.descriptions.double_plus,
      },
    }
    gifts.value[index] = updated
    persistSnapshot()

    if (old.isCustom) {
      const custom = loadFromLocal('customGifts', [])
      const idx = custom.findIndex((g) => g.id === id)
      if (idx !== -1) {
        custom[idx] = updated
        saveToLocal('customGifts', custom)
      }
    } else {
      // 官方饰品：同时写 giftOverrides —— 它是用户编辑的最终意图，
      // 加载时优先级最高，能挡住预设与快照的同名字段
      const overrides = loadFromLocal('giftOverrides', {})
      overrides[id] = {
        name: updated.name,
        category: updated.category,
        descriptions: updated.descriptions,
      }
      saveToLocal('giftOverrides', overrides)
    }

    if (data.iconBase64) {
      try {
        localStorage.setItem(`egogift_icon_${id}`, data.iconBase64)
      } catch {
        // icon storage failed, continue
      }
    }
  }

  function removeGift(id) {
    gifts.value = gifts.value.filter((g) => g.id !== id)
    persistSnapshot()

    const custom = loadFromLocal('customGifts', [])
    const filteredCustom = custom.filter((g) => g.id !== id)
    saveToLocal('customGifts', filteredCustom)

    // 清除该饰品的覆盖记录，避免删除后又被 overrides 复活
    const overrides = loadFromLocal('giftOverrides', {})
    if (overrides[id]) {
      delete overrides[id]
      saveToLocal('giftOverrides', overrides)
    }

    const deleted = loadFromLocal('deletedGiftIds', [])
    if (!deleted.includes(id)) {
      deleted.push(id)
      saveToLocal('deletedGiftIds', deleted)
    }

    try {
      localStorage.removeItem(`egogift_icon_${id}`)
    } catch {
      // icon removal failed, continue
    }
  }

  // --- 工具 ---
  function getEffectiveCategory(gift) {
    const override = loadFromLocal('giftCategoryOverrides', {})[gift.id]
    return override || gift.category
  }

  function refreshCategoryOverrides() {
    // 触发响应式更新，实际数据从 userDataStore 读取
  }

  return {
    gifts,
    loadStatus,
    loadError,
    activeCategory,
    searchQuery,
    filteredGifts,
    loadGifts,
    setCategory,
    setSearchQuery,
    addGift,
    updateGift,
    removeGift,
    getEffectiveCategory,
    refreshCategoryOverrides,
  }
})
