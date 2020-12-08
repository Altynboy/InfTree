import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'TreeApp',
    component: () => import(/* webpackChunkName: "TreeApp" */ '../views/TreeApp.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
