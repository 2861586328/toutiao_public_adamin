import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/index.vue'
// @始终指向的是src @后面不能别忘写分隔符号/
Vue.use(VueRouter)
console.log('测试一下')
console.log('测试一下', Vue.use(VueRouter))

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
