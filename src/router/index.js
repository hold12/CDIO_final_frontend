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
import IngredientBatchNew from '@/components/IngredientBatchNew'
import Ingredient from '@/components/Ingredient'
import IngredientNew from '@/components/IngredientNew'
import Profile from '@/components/Profile'

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
      component: IngredientBatchNew
    },
    {
      path: '/Ingredients',
      name: 'Ingredients',
      component: Ingredient
    },
    {
      path: '/Ingredients/create',
      name: 'Create Ingredient',
      component: IngredientNew
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
