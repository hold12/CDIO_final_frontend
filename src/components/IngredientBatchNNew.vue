<template>
    <!-- This is NNew because fucking vue.js.... -->
    <div class="container">
        <h1>Create a new Ingredient Batch</h1>
        <form class="form-horizontal">
            <div class="col-md-6 col-md-offset-2">
                <div class="form-group">
                    <label for="batch" class="control-label">Batch ID:</label>
                    <input type="text" class="form-control" id="batch" v-model="IngredientBatch.ingredientBatchId">
                </div>
                <div class="form-group">
                    <label for="ingredient" class="control-label">Ingredient:</label>
                    <input type="text" id="ingredient" class="form-control" v-model="IngredientBatch.ingredientId">
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
export default {
    name: 'ingredientbatchnnew',
    data() {
        return {
            IngredientBatch: {
                "ingredientBatchId": 0, "ingredientId": 0, "amount": 0
            }
        }
    },
    methods: {
        putIngredientBatch: function(e) {
            e.preventDefault()
            this.$http.post('http://localhost:8000/module/ingredientbatch/create', this.IngredientBatch, {
                headers: {
                'Authorization': auth.getAuthHeader()
                }
            }).then((response) => {
                this.ingredientBatches = response.data
                router.push('/IngredientBatch')
            });
        }
    }
}
</script>
