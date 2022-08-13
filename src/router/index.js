import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '@/views/Home/Home'
import toLogin from '@/views/toLogin/ToLogin'
// import { apiGetPV } from '@/apis/common'
// import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: toLogin
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About/About')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login/Login')
  },
  {
    path: '/userLogin',
    name: 'UserLogin',
    component: () => import('../views/userLogin/userLogin')
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

// router.beforeEach(async (to, from, next) => {
//   try {
//     const { data } = await apiGetPV()
//     console.log('访问量', data.values)
//     await store.dispatch('setPvAsync', data.values)
//     next()
//   } catch (e) {
//     console.log('e', e)
//     next()
//   }
// })

export default router
