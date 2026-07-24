import { ref, computed } from 'vue'

/**
 * Composable for managing the draggable recipe hover panel.
 * Replaces duplicated drag + hover timer logic across CompendiumPage,
 * PlanningPage, and PackGiftsPage.
 */
export function useRecipePanel() {
  const hoverGift = ref(null)
  const panelPosition = ref({ x: null, y: null })
  const isDragging = ref(false)
  const dragOffset = ref({ x: 0, y: 0 })
  const hoverTimer = ref(null)
  const isHoveringPanel = ref(false)

  function scheduleClosePanel() {
    if (isHoveringPanel.value) return
    if (hoverTimer.value) clearTimeout(hoverTimer.value)
    hoverTimer.value = setTimeout(() => {
      hoverGift.value = null
    }, 5000)
  }

  function cancelClosePanel() {
    if (hoverTimer.value) {
      clearTimeout(hoverTimer.value)
      hoverTimer.value = null
    }
  }

  function onPanelEnter() {
    isHoveringPanel.value = true
    cancelClosePanel()
  }

  function onPanelLeave() {
    isHoveringPanel.value = false
    scheduleClosePanel()
  }

  function closePanel() {
    hoverGift.value = null
    panelPosition.value = { x: null, y: null }
    if (hoverTimer.value) clearTimeout(hoverTimer.value)
  }

  function startDrag(e) {
    if (e.button !== 0) return
    const panel = document.querySelector('.recipe-panel')
    if (!panel) return
    const rect = panel.getBoundingClientRect()
    dragOffset.value = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    if (panelPosition.value.x === null || panelPosition.value.y === null) {
      panelPosition.value = { x: rect.left, y: rect.top }
    }
    isDragging.value = true
    document.addEventListener('mousemove', onDrag)
    document.addEventListener('mouseup', stopDrag)
  }

  function onDrag(e) {
    if (!isDragging.value) return
    panelPosition.value = { x: e.clientX - dragOffset.value.x, y: e.clientY - dragOffset.value.y }
  }

  function stopDrag() {
    isDragging.value = false
    document.removeEventListener('mousemove', onDrag)
    document.removeEventListener('mouseup', stopDrag)
  }

  function setHoverGift(g) {
    hoverGift.value = g
  }

  return {
    hoverGift,
    panelPosition,
    isDragging,
    panelStyle: computed(() => {
      const pos = panelPosition.value
      if (pos.x === null || pos.y === null) {
        return { right: '0px', top: '60px', left: 'auto' }
      }
      return { right: 'auto', top: pos.y + 'px', left: pos.x + 'px' }
    }),
    scheduleClosePanel,
    cancelClosePanel,
    onPanelEnter,
    onPanelLeave,
    closePanel,
    startDrag,
    stopDrag,
    setHoverGift,
    cleanup: () => {
      document.removeEventListener('mousemove', onDrag)
      document.removeEventListener('mouseup', stopDrag)
      if (hoverTimer.value) clearTimeout(hoverTimer.value)
    },
  }
}
