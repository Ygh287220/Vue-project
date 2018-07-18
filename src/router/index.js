import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import Form from '@/views/nav1/Form.vue'
import Test from '@/views/nav2/Test.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },   
    {
        path: '/',
        component: Home,
        name: '导航一',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/Form', component: Form, name: 'Form' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '导航二',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/Test', component: Test, name: '测试页面' },
 
        ]
    },
  ]
})
