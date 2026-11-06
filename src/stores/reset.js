// src/stores/reset.js
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { clearAppStorage } from '@/utils/storage'

export const useResetStore = defineStore('reset', () => {
  const resetting = ref(false)

  /**
   * 恢复默认：清除本项目写入的所有 localStorage 数据并刷新页面。
   * 刷新后各 store 的「首次加载」分支会重新用 data/*.js 的预设数据初始化，
   * 等同于全新安装状态。
   */
  function resetAll() {
    if (resetting.value) return
    resetting.value = true
    try {
      clearAppStorage()
    } finally {
      // 等待状态更新后再刷新，确保按钮不会残留按下态
      setTimeout(() => {
        location.reload()
      }, 50)
    }
  }

  return { resetting, resetAll }
})
