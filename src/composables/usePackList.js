/**
 * Extract pack list for a given gift.
 * Used across CompendiumPage, PackGiftsPage, and PlanningPage.
 */
export function usePackList(cardPackStore) {
  function getPackList(giftId) {
    if (!giftId) return []
    const result = []
    for (const [packId, giftIds] of Object.entries(cardPackStore.packGifts)) {
      if (giftIds.includes(giftId)) {
        const pack = cardPackStore.cardPacks.find((p) => p.id === packId)
        if (pack) result.push(pack)
      }
    }
    return result
  }

  return { getPackList }
}
