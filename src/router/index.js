import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/components/Users'
import Login from '@/components/Login'
import EditUser from '@/components/EditUser'
import IngredientBatch from '@/components/IngredientBatch'
import IngredientBatchNNew from '@/components/IngredientBatchNNew'
import Ingredient from '@/components/Ingredient'
import IngredientNew from '@/components/IngredientNew'

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
    },
    {
      path: '/IngredientBatch',
      name: 'Ingredient Batch',
      component: IngredientBatch
    },
    {
      path: '/IngredientBatch/New',
      name: 'Ingredient Batch New',
      component: IngredientBatchNNew
    },
    {
      path: '/Ingredient',
      name: 'Ingredient',
      component: Ingredient
    },
    {
      path: '/Ingredient/create',
      name: 'Create Ingredient',
      component: IngredientNew
    }
  ]
})
