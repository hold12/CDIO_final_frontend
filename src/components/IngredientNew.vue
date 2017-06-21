<template>
    <div class="container">
        <h1>Create a new Ingredient</h1>
        <form class="form-horizontal">
            <div class="col-md-6 col-md-offset-2">
                <div class="form-group">
                    <label for="ingredientName" class="control-label">Ingredient name:</label>
                    <input type="text" id="ingredientName" class="form-control" v-model="Ingredient.ingredientName">
                </div>
                <div class="form-group">
                    <label for="supplier" class="control-label">Supplier:</label>
                    <input type="text" id="supplier" class="form-control" v-model="Ingredient.supplier">
                </div>

                <button class="btn btn-success form-control" @click="putIngredient">Create Ingredient</button>
            </div>
        </form>
    </div>
</template>

<script>
import auth from '../auth'
import router from '../router'
import * as API_URL from '../config'

export default {
    name: 'ingredientNew',
    data() {
        return {
            Ingredient: {
                "ingredientId": 0, "ingredientName": "", "supplier": ""
            }
        }
    },
    methods: {
        putIngredient: function(e) {
            e.preventDefault()
            this.$http.post(API_URL.MODULE + '/ingredient/create', this.Ingredient, {
                headers: {
                'Authorization': auth.getAuthHeader(this)
                }
            }).then((response) => {
                this.ingredients = response.data
                router.push('/Ingredient')
            });
        }
    }
}
</script>
