<template>
  <div class="newRecipeComponent container">
    <h1>New recipe component for recipe ID: {{ currentRecipeId }}</h1>
    <div class="col-md-12 form-group">
        <br><br><br><br>
    </div>
        <div class="col-md-8" id="newRecipeComponent">
            <form class="form-horizontal">
                
                <!-- ==== IngredientId ==== -->
                <div class="form-group">
                    <label for="ingredientId" class="control-label col-sm-4">Ingredient ID:</label>
                    <div class="col-sm-8">
                        <select class="form-control" v-model="newRecipeComponent.ingredientId">
                            <option v-for="i in ingredients" :value="i.ingredientId">{{ i.ingredientId }} &mdash; {{ i.ingredientName }} &mdash; {{ i.supplier }}</option>
                        </select>
                    </div>
                </div>

                <!-- ==== NominatedNetWeight ==== -->
                <div class="form-group">
                    <label for="nominatedNetWeight" class="control-label col-sm-4">NominatedNetWeight:</label>
                    <div class="col-sm-8">
                        <input type="number" v-model="newRecipeComponent.nominatedNetWeight" class="form-control" id="nominatedNetWeight" >
                    </div>
                </div>

                <!-- ==== Tolerance ==== -->
                <div class="form-group">
                    <label for="tolerance" class="control-label col-sm-4">Tolerance:</label>
                    <div class="col-sm-8">
                        <input type="number" v-model="newRecipeComponent.tolerance" class="form-control" id="tolerance" >
                    </div>
                </div>
                <button class="btn btn-success pull-right" @click="putRecipeComponent" >Submit</button>
            </form>
        </div>
        <!--<div class="col-md-12">
            {{ newRecipeComponent}}
        </div>-->
  </div>
</template>

<script>
import auth from '../auth'
import router from '../router'
import * as API_URL from '../config'

export default {
    name: 'recipesComponent',
    data () {
        return {
            newRecipeComponent: {recipeId: this.$route.query.id},
            currentRecipeId: 0,
            ingredients: {}
        }
    },
    methods: {
        putRecipeComponent: function(e) {
            e.preventDefault()
            this.$http.post(API_URL.MODULE + '/recipecomponent/create', this.newRecipeComponent, {
                'Accept': 'application/json'
            }, {
                headers: {
                'Authorization': auth.getAuthHeader(this)
                }
            }).then((response) => {
                if (response.data.recipeId == this.newRecipeComponent.recipeId)
                    router.push('/Recipes')
            })
        },
        isInArray: function(array, value) {
            return array.indexOf(value) > -1 ? true : false;
        },
        fetchIngredients: function() {
                this.$http.post(API_URL.MODULE + '/ingredient/get/all', {
            'Accept': 'application/json'
            }, {
                headers: {
                'Authorization': auth.getAuthHeader(this)
                }
            }).then((response) => {
                this.ingredients = response.data
            });
        }
    },
    created() {
        this.currentRecipeId = this.$route.query.id
        this.fetchIngredients()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-danger {
    text-decoration: line-through;
}
</style>