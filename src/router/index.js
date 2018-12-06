import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home' // 从外部引入组件
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/detail/:id', // 动态路由参数存在哪里？存在id这个变量中
      name: 'Detail',
      component: Detail
    }
  ],
  // 含义: 每次进行路由切换时，x轴和y轴初始化都为0(始终回到最顶部)
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
