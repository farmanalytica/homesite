import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import SolucoesPage from '../pages/SolucoesPage.vue'
import BlogPage from '../pages/BlogPage.vue'
import ContatoPage from '../pages/ContatoPage.vue'
import PrivacidadePage from '../pages/PrivacidadePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/solucoes', name: 'solucoes', component: SolucoesPage },
    { path: '/blog', name: 'blog', component: BlogPage },
    { path: '/contato', name: 'contato', component: ContatoPage },
    { path: '/politica-de-privacidade', name: 'privacidade', component: PrivacidadePage },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

export default router
