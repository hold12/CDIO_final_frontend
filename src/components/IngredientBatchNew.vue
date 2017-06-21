<template>
    <div class="container">
        <h1>Create a new Ingredient Batch</h1>
        <form class="form-horizontal">
            <div class="col-md-6 col-md-offset-2">
                <div class="form-group">
                    <label for="ingredient" class="control-label">Ingredient:</label>
                    <!--<input type="text" id="ingredient" class="form-control" v-model="IngredientBatch.ingredientId">-->
                    <select class="form-control" v-model="IngredientBatch.ingredientId">
                        <option v-for="i in ingredients" :value="i.ingredientId">{{ i.ingredientId }} &mdash; {{ i.ingredientName }} &mdash; {{ i.supplier }}</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="amount" class="control-label">Amount:</label>
                    <input type="text" id="amount" class="form-control" v-model="IngredientBatch.amount">
                </div>

                <button class="btn btn-success form-control" @click="putIngredientBatch">Create Ingredient Batch</button>
            </div>
        </form>
    </div>
</template>

<script>
import auth from '../auth'
import router from '../router'
import config from '../config'

export default {
    name: 'ingredientbatchnew',
    data() {
        return {
            IngredientBatch: {
                "ingredientBatchId": 0, "ingredientId": 0, "amount": 0
            },
            ingredients: {}
        }
    },
    methods: {
        putIngredientBatch: function(e) {
            e.preventDefault()
            this.$http.post(config.API_URL + '/ingredientbatch/create', this.IngredientBatch, {
                headers: {
                'Authorization': auth.getAuthHeader(this)
                }
            }).then((response) => {
                this.ingredientBatches = response.data
                router.push('/IngredientBatch')
            });
        },
        fetchIngredients: function() {
                this.$http.post(config.API_URL + '/ingredient/get/all', {
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
        this.fetchIngredients()
    }
}
</script>
