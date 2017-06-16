import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/components/Users'
import Login from '@/components/Login'
import EditUser from '@/components/EditUser'
import IngredientBatch from '@/components/IngredientBatch'
import IngredientBatchNNew from '@/components/IngredientBatchNNew'
import IngredientBatchEdit from '@/components/IngredientBatchEdit'
import Ingredient from '@/components/Ingredient'
import IngredientNew from '@/components/IngredientNew'
import ProductBatch from '@/components/ProductBatch'
import ProductBatchNew from '@/components/ProductBatchNew'

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
      path: '/IngredientBatch/Edit',
      name: 'Ingredient Batch Edit',
      component: IngredientBatchEdit
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
    },
    {
      path: '/ProductBatch',
      name: 'ProductBatch',
      component: ProductBatch
    },
    {
      path: '/ProductBatch/create',
      name: 'Create ProductBatch',
      component: ProductBatchNew
    }
  ]
})
