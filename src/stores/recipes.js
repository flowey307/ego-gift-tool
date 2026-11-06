// src/stores/recipes.js
import { defineStore } from 'pinia'
import { ref } from 'vue'
import rawRecipes from '@/data/recipes.js'
import { loadFromLocal, saveToLocal } from '@/utils/storage'

export const useRecipesStore = defineStore('recipes', () => {
  const recipes = ref([])

  // --- 加载配方 ---
  // 合并策略与卡包一致，采用「只增不覆盖」：
  //   - 预设中有、本地没有的配方 → 追加进来（新配方能自动送达老用户）
  //   - 本地已有的配方 → 以用户版本为准（编辑、移动顺序都不会被预设冲掉）
  //   - 用户删掉的预设配方 → 记入 `removedRecipeIds` 墓碑，避免下次加载复活
  //   - 用户自建的配方 → id 为 UUID，永远不会被预设覆盖
  function loadRecipes() {
    const saved = loadFromLocal('recipes', [])
    const removedIds = loadFromLocal('removedRecipeIds', [])

    if (saved.length > 0) {
      const localIds = new Set(saved.map((r) => r.id))
      const added = rawRecipes
        .filter((r) => !localIds.has(r.id) && !removedIds.includes(r.id))
        .map((r) => ({ ...r, materialIds: [...r.materialIds] }))
      if (added.length > 0) {
        saved.push(...added)
      }
      recipes.value = saved
    } else {
      // 无本地数据，全量使用预设
      recipes.value = rawRecipes.map((r) => ({ ...r, materialIds: [...r.materialIds] }))
    }
    saveToLocal('recipes', recipes.value)
  }

  // --- 添加配方 ---
  function addRecipe(materialIds, resultId) {
    const id = crypto.randomUUID()
    const newRecipe = { id, materialIds: [...materialIds], resultId }
    recipes.value.push(newRecipe)
    saveToLocal('recipes', recipes.value)
    return id
  }

  // --- 在指定位置插入配方 ---
  function insertRecipeAt(index, materialIds, resultId) {
    const id = crypto.randomUUID()
    const newRecipe = { id, materialIds: [...materialIds], resultId }
    recipes.value.splice(index, 0, newRecipe)
    recipes.value = [...recipes.value] // 触发响应式
    saveToLocal('recipes', recipes.value)
    return id
  }

  // --- 删除配方 ---
  function removeRecipe(id) {
    recipes.value = recipes.value.filter((r) => r.id !== id)
    saveToLocal('recipes', recipes.value)
    // 预设配方被删除时记入墓碑，避免下次加载被「新增预设配方」的逻辑加回来
    if (rawRecipes.some((r) => r.id === id)) {
      const removed = loadFromLocal('removedRecipeIds', [])
      if (!removed.includes(id)) {
        removed.push(id)
        saveToLocal('removedRecipeIds', removed)
      }
    }
  }

  // --- 移动配方（上/下） ---
  function moveRecipe(id, direction) {
    const index = recipes.value.findIndex((r) => r.id === id)
    if (index === -1) return
    const newIndex = direction === 'up' ? index - 1 : index + 1
    if (newIndex < 0 || newIndex >= recipes.value.length) return
    const [item] = recipes.value.splice(index, 1)
    recipes.value.splice(newIndex, 0, item)
    recipes.value = [...recipes.value]
    saveToLocal('recipes', recipes.value)
  }

  // --- 更新配方 ---
  function updateRecipe(id, materialIds, resultId) {
    const recipe = recipes.value.find((r) => r.id === id)
    if (recipe) {
      recipe.materialIds = [...materialIds]
      recipe.resultId = resultId
      recipes.value = [...recipes.value]
      saveToLocal('recipes', recipes.value)
    }
  }

  // --- 查询：某个饰品参与的所有配方 ---
  function getRecipesForGift(giftId) {
    return recipes.value.filter((r) => r.materialIds.includes(giftId) || r.resultId === giftId)
  }

  return {
    recipes,
    loadRecipes,
    addRecipe,
    insertRecipeAt,
    removeRecipe,
    moveRecipe,
    updateRecipe,
    getRecipesForGift,
  }
})
