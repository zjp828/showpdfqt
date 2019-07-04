import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TableMain from '../components/tablemain'

Vue.use(Router)

import Main from '../pages/Main'
import Dashboard from '../pages/Dashboard'
import oneee from '../pages/one'

let routes = [{
  path: '/',
  component: Main,
  hidden: true,
  children: [{
    path: '/',
    component: Dashboard,
    name: '系统首页'
  },
    {
      path: '/one',
      component: oneee,
      name: '第一个子菜单'
    }
  ]
}]

const router = new Router({
  routes: routes
})

export default router
