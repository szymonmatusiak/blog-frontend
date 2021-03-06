import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Login from '@/components/Login'
import Posts from '@/components/Posts'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/test',
      name: 'Test',
      component: Test
    },{
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/posts',
      name: 'Posts',
      component: Posts
    }
  ]
})
