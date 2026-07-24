// src/stores/mode.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModeStore = defineStore('mode', () => {
  const isAdmin = ref(false) // 默认游客模式

  function toggle() {
    isAdmin.value = !isAdmin.value
  }

  return {
    isAdmin,
    toggle,
  }
})
