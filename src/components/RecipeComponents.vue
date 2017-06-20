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
            this.$http.post('http://h12-prod.wiberg.tech:8000/module/recipecomponent/get/all/'+recipeId, {
                'Accept': 'application/json'
            }, {
                headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                }
            }).then((response) => {
                this.recipeComponents = response.data
            })
        },
        isInArray: function(array, value) {
            return array.indexOf(value) > -1 ? true : false;
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
