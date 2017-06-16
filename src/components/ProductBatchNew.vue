<template>
    <div class="container">
        <h1>Create a new Product Batch</h1>
        <form class="form-horizontal">
            <div class="col-md-6 col-md-offset-2">
                <div class="form-group">
                    <label for="recipeId" class="control-label">Recipe ID:</label>
                    <input type="text" id="recipeId" class="form-control" v-model="ProductBatch.recipeId">
                </div>
                <div class="form-group">
                    <label for="userId" class="control-label">User ID:</label>
                    <input type="text" id="userId" class="form-control" v-model="ProductBatch.userId">
                </div>

                <button class="btn btn-success form-control" @click="putProductBatch">Create Product Batch</button>
            </div>
        </form>
    </div>
</template>

<script>
import auth from '../auth'
import router from '../router'
export default {
    name: 'productbatchNew',
    data() {
        return {
            ProductBatch: {
                "recipeId": 0, "userId": 0
            }
        }
    },
    methods: {
        putProductBatch: function(e) {
            e.preventDefault()
            this.$http.post('http://localhost:8000/module/productbatch/create', this.ProductBatch, {
                headers: {
                'Authorization': auth.getAuthHeader()
                }
            }).then((response) => {
                this.ProductBatch = response.data
                router.push('/ProductBatch')
            })
        }
    }
}
</script>
