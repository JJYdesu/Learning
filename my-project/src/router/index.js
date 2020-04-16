import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import File from '../views/FileUpload.vue'
import Test from '../views/Test.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path:'/file',
    name:'File',
    component:File
  },
  {
    path:'/test',
    name:'Test',
    component:Test
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
