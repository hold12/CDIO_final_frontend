<template>
  <div class="Recipes container">
    <h1 class="page-header">Manage Recipes</h1>
    <router-link to="/Recipes/new" class="btn btn-success">Create new</router-link>
    <div class="Recipes-table">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Recipe ID</th>
            <th>Recipe name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="recipe in recipes">
            <td>{{ recipe.recipeId }}</td>
            <td>{{ recipe.recipeName }}</td>
            <td><router-link :to="'/RecipeComponents?id='+recipe.recipeId" class="btn btn-info">Recipe Components</router-link></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import auth from '../auth'
export default {
  name: 'Recipes',
  data () {
    return {
      recipes: {}
    }
  },
  methods: {
    fetchRecipes: function() {
      this.$http.post('https://h12-prod.wiberg.tech/module/recipe/get/all', {
        'Accept': 'application/json'
      }, {
        headers: {
          'Authorization': auth.getAuthHeader()
        }
      }).then((response) => {
        this.recipes = response.data
      })
    }
  },
  created() {
    this.fetchRecipes()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
