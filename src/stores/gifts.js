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
  async function loadGifts() {
    loadStatus.value = 'loading'
    try {
      const overrides = loadFromLocal('giftOverrides', {})
      const custom = loadFromLocal('customGifts', [])
      const deleted = loadFromLocal('deletedGiftIds', [])

      let base = rawGifts.map((g) => ({
        ...g,
        isCustom: false,
      }))

      // 应用覆盖（修改官方饰品名称、类别、描述）
      base = base.map((g) => {
        const ov = overrides[g.id]
        return ov ? { ...g, ...ov } : g
      })

      const all = [...base, ...custom]
      const filtered = all.filter((g) => !deleted.includes(g.id))

      gifts.value = filtered
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

    if (old.isCustom) {
      const custom = loadFromLocal('customGifts', [])
      const idx = custom.findIndex((g) => g.id === id)
      if (idx !== -1) {
        custom[idx] = updated
        saveToLocal('customGifts', custom)
      }
    } else {
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

    const custom = loadFromLocal('customGifts', [])
    const filteredCustom = custom.filter((g) => g.id !== id)
    saveToLocal('customGifts', filteredCustom)

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
