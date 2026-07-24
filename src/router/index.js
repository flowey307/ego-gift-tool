import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import CompendiumPage from '@/views/CompendiumPage.vue'
import CardPackPage from '@/views/CardPackPage.vue'
import PackGiftsPage from '@/views/PackGiftsPage.vue'
import PlanningPage from '@/views/PlanningPage.vue'
import RecipePage from '@/views/RecipePage.vue'

const routes = [
  { path: '/', component: CompendiumPage },
  { path: '/cardpack', component: CardPackPage },
  { path: '/packgifts', component: PackGiftsPage },
  { path: '/planning', component: PlanningPage },
  { path: '/recipe', component: RecipePage },
]

const router = createRouter({
  history: import.meta.env.MODE === 'single' ? createWebHashHistory() : createWebHistory(),
  routes,
  scrollBehavior(to, from, saved) {
    return saved || { top: 0 }
  },
})

export { router }
