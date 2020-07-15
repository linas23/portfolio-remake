import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import main from '@/components/main'
import contact from '@/components/contact'
import github from '@/components/github'
import aboutme from '@/components/about_me'

const routes = [
  {path:'',name:'home',component:main},
  {path:'/about_me',name:'aboutme',component:aboutme},
  {path:'/github',name:'github',component:github},
  {path:'/contact',name:'contact',component:contact},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
