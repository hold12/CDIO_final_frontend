<template>
  <div class="RecipeComponents container">
    <h1 class="page-header">Manage Recipe Components</h1>
    <router-link :to="'/RecipeComponents/new?id='+currentRecipeId" class="btn btn-success">Create new</router-link>
    <div class="RecipeComponents-table">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Recipe ID</th>
            <th>Ingredient ID</th>
            <th>Ingredient Name</th>
            <th>Supplier</th>
            <th>Nominated Net Weight</th>
            <th>Tolerance</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="recipeComponent in recipeComponents">
            <td>{{ recipeComponent.recipeId }}</td>
            <td>{{ recipeComponent.ingredientId }}</td>
            <td>{{ recipeComponent.ingredientName }}</td>
            <td>{{ recipeComponent.supplier }}</td>
            <td>{{ recipeComponent.nominatedNetWeight }}</td>
            <td>{{ recipeComponent.tolerance }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import auth from '../auth'
import * as API_URL from '../config'

export default {
    name: 'recipeComponents',
    data () {
        return {
            recipeComponents: {},
            currentRecipeId: 0
        }
    },
    methods: {
        fetchRecipeComponents: function(recipeId) {
            this.$http.post(API_URL.MODULE + '/recipecomponent/get/all/'+recipeId, {
                'Accept': 'application/json'
            }, {
                headers: {
                'Authorization': auth.getAuthHeader(this)
                }
            }).then((response) => {
                this.recipeComponents = response.data
            })
        }
    },
    created() {
        this.currentRecipeId = this.$route.query.id
        this.fetchRecipeComponents(this.currentRecipeId)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-danger {
    text-decoration: line-through;
}
</style>
