<template>
    <div class="container">
        <h1>Create a new Product Batch</h1>
        <form class="form-horizontal">
            <div class="col-md-6 col-md-offset-2">
              <label for="recipeId" class="control-label">Recipe:</label>
              <select class="form-control" v-model="ProductBatch.recipeId">
                  <option v-for="r in recipes" :value="r.recipeId">{{ r.recipeId }} &mdash; {{ r.recipeName }}</option>
              </select>

                <label for="userId" class="control-label">User:</label>
                <select class="form-control" v-model="ProductBatch.userId">
                    <option v-for="u in users" :value="u.userId">{{ u.userId }} &mdash; {{ u.initials }}</option>
                </select>

                <button class="btn btn-success form-control" @click="putProductBatch">Create Product Batch</button>
            </div>
        </form>
    </div>
</template>

<script>
import auth from '../auth'
import router from '../router'
import * as API_URL from '../config'

export default {
    name: 'productbatchNew',
    data() {
        return {
            ProductBatch: {
                "recipeId": 0, "userId": 0
            },
            users: {},
            recipes: {}
        }
    },
    methods: {
        putProductBatch: function(e) {
            e.preventDefault()
            this.$http.post(API_URL.MODULE + '/productbatch/create', this.ProductBatch, {
                headers: {
                'Authorization': auth.getAuthHeader(this)
                }
            }).then((response) => {
                this.ProductBatch = response.data
                router.push('/ProductBatch')
            });
        },
        fetchRecipes: function() {
                this.$http.post(API_URL.MODULE + '/recipe/get/all', {
            'Accept': 'application/json'
            }, {
                headers: {
                'Authorization': auth.getAuthHeader(this)
                }
            }).then((response) => {
                this.recipes = response.data
            });
        },
        fetchUsers: function() {
                this.$http.post(API_URL.MODULE + '/user/get/labtech', {
            'Accept': 'application/json'
            }, {
                headers: {
                'Authorization': auth.getAuthHeader(this)
                }
            }).then((response) => {
                this.users = response.data
            });
        }
    },
    created() {
        this.fetchRecipes()
        this.fetchUsers()
    }
}
</script>
