/**
 * 图片懒加载指令：元素进入视口前不设置 src。
 *
 * 为什么不用原生 loading="lazy"：
 *   图鉴页一次性渲染 466 个饰品格子，Chromium 的原生 lazy 只跳过视口外的元素，
 *   而这些格子分布在同一条长滚动流里，实测仍会立即发出 431 个请求。
 *   这些请求全挤在同一条 HTTP/2 连接上形成队头阻塞 —— 实测 20 秒完成 0 张。
 *
 * 改用 IntersectionObserver 主动接管：只给进入视口（含预加载边距）的元素设置 src，
 * 把并发压到浏览器能承受的范围。
 *
 * 用法：<img v-lazy-img="imageUrl" />
 */
const pending = new WeakMap()
let observer = null

function ensureObserver() {
  if (observer) return observer
  if (typeof IntersectionObserver === 'undefined') return null

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const apply = pending.get(entry.target)
        if (!apply) continue
        pending.delete(entry.target)
        observer.unobserve(entry.target)
        apply()
      }
    },
    // 提前 300px 加载，滚动时不易看到空白
    { rootMargin: '300px 0px' },
  )
  return observer
}

export const lazyImg = {
  mounted(el, binding) {
    const src = binding.value
    if (!src) return

    const apply = () => {
      if (el.getAttribute('src') !== src) el.setAttribute('src', src)
    }

    const obs = ensureObserver()
    if (!obs) {
      // 浏览器不支持 IntersectionObserver → 直接加载
      apply()
      return
    }

    pending.set(el, apply)
    obs.observe(el)
  },

  updated(el, binding) {
    const src = binding.value
    if (!src) return

    if (pending.has(el)) {
      // 还没进入视口，更新目标地址即可
      pending.set(el, () => el.setAttribute('src', src))
    } else if (el.getAttribute('src') !== src) {
      el.setAttribute('src', src)
    }
  },

  unmounted(el) {
    pending.delete(el)
    if (observer) observer.unobserve(el)
  },
}
