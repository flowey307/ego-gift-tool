// src/stores/recipes.js
import { defineStore } from 'pinia'
import { ref } from 'vue'
import rawRecipes from '@/data/recipes.js'
import { loadFromLocal, saveToLocal } from '@/utils/storage'

export const useRecipesStore = defineStore('recipes', () => {
  const recipes = ref([])

  // --- 加载配方（优先从 localStorage，否则用预设） ---
  function loadRecipes() {
    const saved = loadFromLocal('recipes', [])
    if (saved.length > 0) {
      recipes.value = saved
    } else {
      recipes.value = rawRecipes.map((r) => ({ ...r }))
      saveToLocal('recipes', recipes.value)
    }
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
