<template>
  <div class="newRecipeComponent container">
    <h1>New recipe component for recipe ID: {{ currentRecipeId }}</h1>
    <div class="col-md-12 form-group">
        <br><br><br><br>
    </div>
        <div class="col-md-6" id="newRecipeComponent">
            <form class="form-horizontal">
                
                <!-- ==== IngredientId ==== -->
                <div class="form-group">
                    <label for="ingredientId" class="control-label col-sm-2">Ingredient ID:</label>
                    <div class="col-sm-10">
                        <input type="number" v-model="newRecipeComponent.ingredientId" class="form-control" id="ingredientId" >
                    </div>
                </div>

                <!-- ==== NominatedNetWeight ==== -->
                <div class="form-group">
                    <label for="nominatedNetWeight" class="control-label col-sm-2">NominatedNetWeight:</label>
                    <div class="col-sm-10">
                        <input type="number" v-model="newRecipeComponent.nominatedNetWeight" class="form-control" id="nominatedNetWeight" >
                    </div>
                </div>

                <!-- ==== Tolerance ==== -->
                <div class="form-group">
                    <label for="tolerance" class="control-label col-sm-2">Tolerance:</label>
                    <div class="col-sm-10">
                        <input type="number" v-model="newRecipeComponent.tolerance" class="form-control" id="tolerance" >
                    </div>
                </div>
                <button class="btn btn-success form-control" @click="putRecipeComponent" >Submit</button>
            </form>
        </div>
        <div class="col-md-12">
            {{ newRecipeComponent}}
        </div>
  </div>
</template>

<script>
import auth from '../auth'
import router from '../router'
export default {
    name: 'recipesComponent',
    data () {
        return {
            newRecipeComponent: {recipeId: this.$route.query.id},
            currentRecipeId: 0
        }
    },
    methods: {
        putRecipeComponent: function(e) {
            e.preventDefault()
            this.$http.post('http://localhost:8000/module/recipecomponent/create', this.newRecipeComponent, {
                'Accept': 'application/json'
            }, {
                headers: {
                'Authorization': auth.getAuthHeader()
                }
            }).then((response) => {
                console.log(response.data)
                if (response.data.recipeId == this.newRecipeComponent.recipeId)
                    router.push('/Recipes')
            })
        },
        isInArray: function(array, value) {
            return array.indexOf(value) > -1 ? true : false;
        }
    },
    created() {
        this.currentRecipeId = this.$route.query.id
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-danger {
    text-decoration: line-through;
}
</style>