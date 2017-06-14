import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/components/Users'
import Login from '@/components/Login'
import EditUser from '@/components/EditUser'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/users/edit',
      name: 'Edit',
      component: EditUser
    }
  ]
})