<template>
  <div class="card-pack-page">
    <div class="card-pack-page__header">
      <input v-model="searchQuery" class="search-input" placeholder="搜索卡包名称..." />
      <button class="add-btn" @click="showAddForm = !showAddForm">添加卡包</button>
    </div>

    <div v-if="showAddForm" class="add-form">
      <input v-model="newPackName" class="add-form__input" placeholder="卡包名称" />
      <input type="file" accept="image/*" class="add-form__file" @change="onFileChange" />
      <button class="add-form__submit" :disabled="!newPackName.trim()" @click="addPack">
        确认添加
      </button>
    </div>

    <div class="pack-list">
      <CardPackCover
        v-for="pack in filteredPacks"
        :key="pack.id"
        :pack-id="pack.id"
        :name="pack.name"
        :image-data="packImages[pack.id] || null"
        editable
        @click="selectPack(pack.id)"
        @rename="renamePack"
        @contextmenu.prevent="openContextMenu($event, pack)"
      />
    </div>

    <div v-if="selectedPack" class="pack-modal-overlay" @click.self="selectPack(null)">
      <div class="pack-modal">
        <div class="pack-detail__header">
          <h3 class="pack-detail__title">{{ selectedPack.name }}</h3>
          <div class="pack-detail__actions">
            <button class="delete-btn" @click="deletePack(selectedPack.id)">删除</button>
            <button class="close-btn" @click="selectPack(null)">x</button>
          </div>
        </div>

        <div class="pack-detail__section">
          <h4>关联饰品</h4>
          <div class="pack-detail__gifts">
            <GiftCard
              v-for="g in packGiftObjects"
              :key="g.id"
              :gift="g"
              size="small"
              @click="openDetail(g)"
            />
            <span v-if="!packGiftObjects.length" class="pack-detail__empty">暂无关联饰品</span>
          </div>
        </div>

        <div class="pack-detail__section">
          <h4>楼层选择</h4>
          <div class="floor-checkboxes">
            <label v-for="floor in 15" :key="floor" class="floor-checkbox">
              <input
                type="checkbox"
                :checked="selectedPack.floors.includes(floor)"
                @change="toggleFloor(floor)"
              />
              <span>{{ floor }}</span>
            </label>
            <label class="floor-checkbox floor-checkbox--group">
              <input type="checkbox" :checked="isParallel" @change="toggleParallel" />
              <span>平行叠加</span>
            </label>
            <label class="floor-checkbox floor-checkbox--group">
              <input type="checkbox" :checked="isExtreme" @change="toggleExtreme" />
              <span>极限模式</span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="contextMenu.visible"
      class="pack-context-menu"
      :style="{ left: contextMenu.x + 'px', top: contextMenu.y + 'px' }"
    >
      <div class="pack-context-menu__item" @click="replaceCover">替换封面图</div>
      <div
        class="pack-context-menu__item pack-context-menu__item--danger"
        @click="deletePack(contextMenu.packId)"
      >
        删除卡包
      </div>
    </div>

    <input
      ref="fileInput"
      type="file"
      accept="image/*"
      style="display: none"
      @change="onCoverChange"
    />

    <GiftDetailModal :gift="detailGift" @close="detailGift = null" />
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { PARALLEL_FLOOR_RANGE, EXTREME_FLOOR_RANGE } from '@/constants'
import { useCardPackStore } from '@/stores/cardPack'
import { useGiftsStore } from '@/stores/gifts'
import { usePackImages } from '@/composables/useGiftHelpers'
import { readFileAsDataURL } from '@/utils/fileHelpers'
import CardPackCover from '@/components/CardPackCover.vue'
import GiftCard from '@/components/GiftCard.vue'
import GiftDetailModal from '@/components/GiftDetailModal.vue'

const cardPackStore = useCardPackStore()
const giftStore = useGiftsStore()

const { packImages, loadPackImages } = usePackImages()

const searchQuery = ref('')
const showAddForm = ref(false)
const newPackName = ref('')
const newPackFile = ref(null)
const selectedPack = ref(null)
const detailGift = ref(null)
const contextMenu = ref({ visible: false, x: 0, y: 0, packId: null })
const fileInput = ref(null)

const filteredPacks = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  return q
    ? cardPackStore.cardPacks.filter((p) => p.name.toLowerCase().includes(q))
    : cardPackStore.cardPacks
})

const packGiftIds = computed(() => {
  if (!selectedPack.value) return []
  return cardPackStore.getGiftsForPack(selectedPack.value.id)
})

const packGiftObjects = computed(() => {
  const ids = packGiftIds.value
  return giftStore.gifts.filter((g) => ids.includes(g.id))
})

const isParallel = computed(
  () =>
    selectedPack.value?.floors.some(
      (f) => f >= PARALLEL_FLOOR_RANGE[0] && f <= PARALLEL_FLOOR_RANGE[1],
    ) || false,
)
const isExtreme = computed(
  () =>
    selectedPack.value?.floors.some(
      (f) => f >= EXTREME_FLOOR_RANGE[0] && f <= EXTREME_FLOOR_RANGE[1],
    ) || false,
)

function selectPack(id) {
  selectedPack.value = cardPackStore.cardPacks.find((p) => p.id === id) || null
}

function onFileChange(e) {
  newPackFile.value = e.target.files[0] || null
}

async function addPack() {
  const name = newPackName.value.trim()
  if (!name) return
  if (newPackFile.value) {
    const base64 = await readFileAsDataURL(newPackFile.value)
    const id = await cardPackStore.addCardPack(name, null)
    localStorage.setItem(`cardpack_img_${id}`, base64)
  } else {
    cardPackStore.addCardPack(name, null)
  }
  newPackName.value = ''
  newPackFile.value = null
  showAddForm.value = false
}

function renamePack(id, newName) {
  cardPackStore.renameCardPack(id, newName)
}

function deletePack(id) {
  if (confirm('确定删除此卡包吗？')) {
    cardPackStore.removeCardPack(id)
    if (selectedPack.value?.id === id) selectedPack.value = null
  }
  contextMenu.value.visible = false
}

function toggleFloor(floor) {
  if (!selectedPack.value) return
  const current = selectedPack.value.floors
  const idx = current.indexOf(floor)
  if (idx === -1) current.push(floor)
  else current.splice(idx, 1)
  cardPackStore.setFloors(selectedPack.value.id, current)
}

function toggleParallel(e) {
  if (!selectedPack.value) return
  const checked = e.target.checked
  let floors = selectedPack.value.floors.filter(
    (f) => f < PARALLEL_FLOOR_RANGE[0] || f > PARALLEL_FLOOR_RANGE[1],
  )
  if (checked) {
    for (let f = PARALLEL_FLOOR_RANGE[0]; f <= PARALLEL_FLOOR_RANGE[1]; f++) {
      if (!floors.includes(f)) floors.push(f)
    }
  }
  floors.sort((a, b) => a - b)
  cardPackStore.setFloors(selectedPack.value.id, floors)
}

function toggleExtreme(e) {
  if (!selectedPack.value) return
  const checked = e.target.checked
  let floors = selectedPack.value.floors.filter(
    (f) => f < EXTREME_FLOOR_RANGE[0] || f > EXTREME_FLOOR_RANGE[1],
  )
  if (checked) {
    for (let f = EXTREME_FLOOR_RANGE[0]; f <= EXTREME_FLOOR_RANGE[1]; f++) {
      if (!floors.includes(f)) floors.push(f)
    }
  }
  floors.sort((a, b) => a - b)
  cardPackStore.setFloors(selectedPack.value.id, floors)
}

function openContextMenu(event, pack) {
  contextMenu.value = { visible: true, x: event.clientX, y: event.clientY, packId: pack.id }
}

function replaceCover() {
  fileInput.value.click()
}

async function onCoverChange(e) {
  const file = e.target.files[0]
  if (!file) return
  const base64 = await readFileAsDataURL(file)
  const packId = contextMenu.value.packId
  if (packId) {
    localStorage.setItem(`cardpack_img_${packId}`, base64)
    const pack = cardPackStore.cardPacks.find((p) => p.id === packId)
    if (pack) pack.imageKey = null
  }
  contextMenu.value.visible = false
  fileInput.value.value = ''
}

function openDetail(g) {
  detailGift.value = g
}

// 只监听卡包列表变化，重建 images
watch(
  () => cardPackStore.cardPacks.map((p) => p.id),
  () => {
    loadPackImages(cardPackStore.cardPacks)
  },
  { deep: true },
)

onMounted(() => {
  loadPackImages(cardPackStore.cardPacks)
})
</script>

<style scoped>
.card-pack-page {
  padding: 16px;
  background: #1a1a2e;
  min-height: 100vh;
  font-family: LimbusFont, sans-serif;
  color: #e0e0e0;
}

.card-pack-page__header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.search-input {
  width: 300px;
  padding: 8px 14px;
  border: 1px solid #444;
  border-radius: 20px;
  background: #2a2a4a;
  color: #e0e0e0;
  font-size: 14px;
  font-family: LimbusFont, sans-serif;
  outline: none;
}

.search-input:focus {
  border-color: #7a7aff;
}

.search-input::placeholder {
  color: #777;
}

.add-btn {
  padding: 8px 16px;
  border: 1px solid #5a5aaa;
  border-radius: 20px;
  background: #5a5aaa;
  color: #fff;
  cursor: pointer;
  font-size: 13px;
  font-family: LimbusFont, sans-serif;
  transition: background 0.2s;
}

.add-btn:hover {
  background: #6a6abb;
}

.add-form {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  padding: 12px;
  background: #2a2a4a;
  border-radius: 8px;
}

.add-form__input {
  padding: 6px 12px;
  border: 1px solid #555;
  border-radius: 6px;
  background: #1a1a2e;
  color: #e0e0e0;
  font-size: 13px;
  font-family: LimbusFont, sans-serif;
  outline: none;
}

.add-form__input:focus {
  border-color: #7a7aff;
}

.add-form__file {
  color: #aaa;
  font-size: 13px;
}

.add-form__submit {
  padding: 6px 14px;
  border: none;
  border-radius: 6px;
  background: #5a5aaa;
  color: #fff;
  cursor: pointer;
  font-size: 13px;
  font-family: LimbusFont, sans-serif;
}

.add-form__submit:disabled {
  background: #444;
  cursor: not-allowed;
}

.pack-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;
}

.pack-modal-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.pack-modal {
  background: #1e1e3f;
  border-radius: 12px;
  padding: 24px;
  max-width: 700px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  color: #e0e0e0;
}

.pack-detail__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.pack-detail__title {
  margin: 0;
  font-size: 18px;
  color: #e0e0e0;
}

.pack-detail__actions {
  display: flex;
  gap: 8px;
  align-items: center;
}

.delete-btn {
  padding: 6px 14px;
  border: 1px solid #e74c3c;
  border-radius: 6px;
  background: transparent;
  color: #e74c3c;
  cursor: pointer;
  font-size: 13px;
  font-family: LimbusFont, sans-serif;
  transition: background 0.2s;
}

.delete-btn:hover {
  background: #e74c3c;
  color: #fff;
}

.close-btn {
  background: none;
  border: none;
  color: #e0e0e0;
  font-size: 24px;
  cursor: pointer;
  line-height: 1;
  padding: 0 4px;
}

.close-btn:hover {
  color: #fff;
}

.pack-detail__section {
  margin-bottom: 16px;
}

.pack-detail__section h4 {
  margin: 0 0 8px;
  font-size: 14px;
  color: #aaa;
}

.pack-detail__gifts {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.pack-detail__empty {
  color: #666;
  font-size: 13px;
}

.floor-checkboxes {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.floor-checkbox {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  background: #1a1a2e;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  color: #ccc;
}

.floor-checkbox input[type='checkbox'] {
  accent-color: #5a5aaa;
}

.floor-checkbox--group {
  background: #2a3a5a;
  border: 1px solid #4a5a7a;
}

.pack-context-menu {
  position: fixed;
  background: #2a2a4a;
  border: 1px solid #555;
  border-radius: 8px;
  padding: 4px 0;
  z-index: 3000;
  min-width: 140px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
}

.pack-context-menu__item {
  padding: 8px 16px;
  cursor: pointer;
  font-size: 13px;
  color: #e0e0e0;
  transition: background 0.15s;
}

.pack-context-menu__item:hover {
  background: #3a3a5a;
}

.pack-context-menu__item--danger {
  color: #e74c3c;
}

.pack-context-menu__item--danger:hover {
  background: #4a2a2a;
}
</style>
