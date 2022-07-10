import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '@/views/Home/Home'
import { apiGetPV } from '@/apis/common'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About/About')
  },
  {
    path: '/person',
    name: 'Person',
    component: () => import('../views/Person/Person')
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

router.beforeEach(async (to, from, next) => {
  const { data } = await apiGetPV()
  console.log('访问量', data.values)
  await store.dispatch('setPvAsync', data.values)
  next()
})

export default router
