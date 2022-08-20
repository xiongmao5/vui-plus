import { createRouter, createWebHistory } from 'vue-router'
import VButton from '../views/Button.vue'
import VLink from '../views/Link.vue'
import VRadio from '../views/Radio.vue'
import VPagination from '../views/Pagination'
import VCard from '../views/Card.vue'
import VCarousel from '../views/Carousel.vue'
import VDropdown from '../views/Dropdown.vue'
import VNavMenu from '../views/NavMenu.vue'

const routes = [
  {
    path: '/button',
    name: 'button',
    component: VButton
  },
  {
    path: '/link',
    name: 'link',
    component: VLink
  },
  {
    path: '/radio',
    name: 'radio',
    component: VRadio
  },
  {
    path: '/checkbox',
    name: 'checkbox',
    component: () => import('../views/Checkbox.vue')
  },
  {
    path: '/pagination',
    name: 'pagination',
    component: VPagination
  },
  {
    path: '/card',
    name: 'card',
    component: VCard
  },
  {
    path: '/carousel',
    name: 'caarousel',
    component: VCarousel
  },
  {
    path: '/dropdown',
    name: 'dropdown',
    component: VDropdown
  },
  {
    path: '/navmenu',
    name: 'navmenu',
    component: VNavMenu
  },
  {
    path: '/swiper',
    name: 'swiper',
    component: () => import('../views/Swiper.vue')
  },
  {
    path: '/rate',
    name: 'rate',
    component: () => import('../views/Rate.vue')
  },
  {
    path: '/switch',
    name: 'switch',
    component: () => import('../views/Switch.vue')
  },
  {
    path: '/dialog',
    name: 'dialog',
    component: () => import('../views/Dialog.vue')
  },
  {
    path: '/input',
    name: 'input',
    component: () => import('../views/Input.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
