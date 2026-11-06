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
      <button
        class="reset-btn"
        :disabled="resetStore.resetting"
        title="清除全部本地数据并恢复到初始预设状态"
        @click="handleReset"
      >
        {{ resetStore.resetting ? '恢复中…' : '恢复默认' }}
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
import { useResetStore } from './stores/reset'

const giftsStore = useGiftsStore()
const cardPackStore = useCardPackStore()
const recipeStore = useRecipesStore()
const modeStore = useModeStore()
const resetStore = useResetStore()

onMounted(async () => {
  // 加载所有数据
  await Promise.all([giftsStore.loadGifts(), cardPackStore.loadPacks(), recipeStore.loadRecipes()])
})

function handleReset() {
  if (
    !confirm('确定要恢复默认吗？\n\n这将清除全部本地数据：\n· 自定义饰品与卡包\n· 卡包封面、饰品图标\n· 合成配方\n· 标签、稀有度、类别\n· 已选饰品与楼层规划\n\n此操作不可撤销。')
  ) {
    return
  }
  resetStore.resetAll()
}
</script>

<style scoped>
/* 同原样式 */
</style>
