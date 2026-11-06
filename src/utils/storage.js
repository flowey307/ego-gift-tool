const PREFIX = 'egogift_'

export function loadFromLocal(key, defaultValue) {
  try {
    const raw = localStorage.getItem(PREFIX + key)
    return raw ? JSON.parse(raw) : defaultValue
  } catch {
    return defaultValue
  }
}

export function saveToLocal(key, value) {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value))
  } catch (e) {
    console.warn('Storage write failed', e)
  }
}

/**
 * 列出所有本项目写入的 localStorage 键。
 * 包含 `egogift_` 前缀的键，以及自定义图片的 `cardpack_img_${id}` 键
 * （后者不带前缀，由 constants 的工厂函数直接写入）。
 */
export function listAppKeys() {
  const keys = []
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (!key) continue
    if (key.startsWith(PREFIX) || key.startsWith('cardpack_img_')) {
      keys.push(key)
    }
  }
  return keys
}

/**
 * 清除本项目写入的所有 localStorage 数据（不含其他站点/应用的数据）。
 */
export function clearAppStorage() {
  const keys = listAppKeys()
  for (const key of keys) {
    try {
      localStorage.removeItem(key)
    } catch (e) {
      console.warn('Storage removal failed', key, e)
    }
  }
  return keys.length
}
