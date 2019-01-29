// 引入vue
import Vue from 'vue'
// 引入路由模块
import Router from 'vue-router'
// 注册路由
Vue.use(Router)

// 导出路由实例对象
export default new Router({
  routes: [
    {
      path: '/login', // 路径
      name: 'login', // 组件的名字
      component: () => import('./views/Login/login.vue') // 对应的组件
    },

  ]
})
