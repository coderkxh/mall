import { createRouter, createWebHistory } from 'vue-router'
const HomeView = () => import('views/home/HomeView.vue')
const FenLeiView = () => import('views/fenlei/FenLeiView.vue')
const ShopCardView = () => import('views/shopcard/ShopCardView.vue')
const ProfileView = () => import('views/profile/ProfileView.vue')
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/fenlei',
      name: 'fenlei',
      component:FenLeiView
    },
    {
      path: '/shopcard',
      name: 'shopcard',
      component:ShopCardView
    },
    {
      path: '/profile',
      name: 'profile',
      component:ProfileView
    }
  ]
})

export default router
