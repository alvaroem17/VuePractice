import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '../pages/Home.vue'
// import AboutView from './AboutView.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: Home},
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})