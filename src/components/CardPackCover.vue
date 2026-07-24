<template>
  <div class="card-pack-cover" @click="emit('click', packId)">
    <div class="card-pack-cover__image">
      <img v-if="imageData" :src="imageData" :alt="name" class="card-pack-cover__img" />
      <div v-else class="card-pack-cover__placeholder">
        <span class="card-pack-cover__placeholder-text">无封面</span>
      </div>
    </div>
    <div class="card-pack-cover__name" @click.stop>
      <input
        v-if="isEditing"
        ref="nameInput"
        v-model="editName"
        class="card-pack-cover__input"
        @keydown.enter="confirmRename"
        @blur="confirmRename"
      />
      <span v-else class="card-pack-cover__label" @dblclick="startRename">
        {{ name }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const props = defineProps({
  packId: { type: String, required: true },
  imageData: { type: String, default: null },
  name: { type: String, required: true },
  editable: { type: Boolean, default: false },
})

const emit = defineEmits(['click', 'rename'])

const isEditing = ref(false)
const editName = ref('')
const nameInput = ref(null)

function startRename() {
  if (!props.editable) return
  isEditing.value = true
  editName.value = props.name
  nextTick(() => {
    nameInput.value?.focus()
    nameInput.value?.select()
  })
}

function confirmRename() {
  if (!isEditing.value) return
  const newName = editName.value.trim()
  if (newName && newName !== props.name) {
    emit('rename', props.packId, newName)
  }
  isEditing.value = false
}
</script>

<style scoped>
.card-pack-cover {
  width: 150px;
  height: 200px;
  border-radius: 8px;
  background: #2a2a4a;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.2s ease;
  font-family: LimbusFont, sans-serif;
}

.card-pack-cover:hover {
  box-shadow: 0 0 12px 3px rgba(120, 120, 255, 0.6);
}

.card-pack-cover__image {
  flex: 1;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-pack-cover__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-pack-cover__placeholder {
  width: 100%;
  height: 100%;
  background: #1a1a2e;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-pack-cover__placeholder-text {
  color: #666;
  font-size: 13px;
}

.card-pack-cover__name {
  padding: 8px;
  text-align: center;
  color: #e0e0e0;
  font-size: 15px;
  min-height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-pack-cover__label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
}

.card-pack-cover__input {
  width: 100%;
  padding: 2px 6px;
  border: 1px solid #7a7aff;
  border-radius: 4px;
  background: #1a1a2e;
  color: #e0e0e0;
  font-size: 13px;
  font-family: LimbusFont, sans-serif;
  text-align: center;
  outline: none;
}
</style>
