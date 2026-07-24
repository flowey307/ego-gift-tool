<template>
  <div class="app">
    <nav class="nav-bar">
      <router-link to="/" class="nav-link">饰品图鉴</router-link>
      <router-link v-if="modeStore.isAdmin" to="/cardpack" class="nav-link">卡包管理</router-link>
      <router-link to="/packgifts" class="nav-link">卡包饰品</router-link>
      <router-link to="/planning" class="nav-link">楼层规划</router-link>
      <router-link to="/recipe" class="nav-link">合成方式</router-link>
      <button class="mode-toggle" @click="modeStore.toggle">
        {{ modeStore.isAdmin ? '管理' : '游客' }}
      </button>
    </nav>
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useGiftsStore } from './stores/gifts'
import { useCardPackStore } from './stores/cardPack'
import { useRecipesStore } from './stores/recipes'
import { useModeStore } from './stores/mode'

const giftsStore = useGiftsStore()
const cardPackStore = useCardPackStore()
const recipeStore = useRecipesStore()
const modeStore = useModeStore()

onMounted(async () => {
  // 加载所有数据
  await Promise.all([
    giftsStore.loadGifts(),
    cardPackStore.loadPacks(),
    recipeStore.loadRecipes(),
  ])
})
</script>

<style scoped>
/* 同原样式 */
</style>
