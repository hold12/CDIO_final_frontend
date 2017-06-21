<template>
  <div class="newRecipe container">
    <h1>New recipe</h1>
    <div class="col-md-12 form-group">
        <br><br><br><br>
    </div>
        <div class="col-md-6" id="newRecipe">
            <form class="form-horizontal">
                
                <!-- ==== Recipename ==== -->
                <div class="form-group">
                    <label for="recipename" class="control-label col-sm-2">Recipename:</label>
                    <div class="col-sm-10">
                        <input type="text" v-model="newRecipe.recipeName" class="form-control" id="recipename" >
                    </div>
                </div>
                <button class="btn btn-success form-control" @click="putRecipe" >Submit</button>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
import auth from "../auth"
import router from '../router'
import * as API_URL from '../config'

export default {
    name: 'newRecipe',
    data () {
        return {
            newRecipe: {}
        }
    },
    methods: {
        putRecipe: function(e) {
            e.preventDefault()
            this.$http.post(API_URL.MODULE + '/recipe/create', this.newRecipe, {
                headers: {
                'Authorization': auth.getAuthHeader(this)
                }
            }).then((response) => {
                if (response.data.recipeName == this.newRecipe.recipeName)
                    router.push('/Recipes')
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-danger {
    text-decoration: line-through;
}
</style>
