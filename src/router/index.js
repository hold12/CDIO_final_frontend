import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Users from '@/components/Users'
import EditUser from '@/components/EditUser'
import Recipes from '@/components/Recipes'
import NewRecipe from '@/components/NewRecipe'
import RecipeComponents from '@/components/RecipeComponents'
import NewRecipeComponent from '@/components/NewRecipeComponent'
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
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Users',
      name: 'Users',
      component: Users
    },
    {
      path: '/Users/edit',
      name: 'EditUser',
      component: EditUser
    },
    {
      path: '/Recipes',
      name: 'Recipes',
      component: Recipes
    },
    {
      path: '/Recipes/new',
      name: 'NewRecipe',
      component: NewRecipe
    },
    {
      path: '/RecipeComponents',
      name: 'RecipeComponents',
      component: RecipeComponents
    },
    {
      path: '/RecipeComponents/new',
      name: 'NewRecipeComponent',
      component: NewRecipeComponent
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
