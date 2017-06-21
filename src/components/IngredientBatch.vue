<template>
  <div class="container">
    <h1 class="page-header">Ingredient Batches</h1>
    <router-link to="/IngredientBatch/New" class="btn btn-success">Create new</router-link>
    <div class="ib-table">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Ingredient Batch ID</th>
            <th>Ingredient ID</th>
            <th>Ingredient name</th>
            <th>Supplier</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ib in ingredientBatches">
            <td>{{ ib.ingredientBatchId }}</td>
            <td>{{ ib.ingredientId }}</td>
            <td>{{ ib.ingredientName }}</td>
            <td>{{ ib.supplier }}</td>
            <td>{{ ib.amount }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import auth from '../auth'
import router from '../router'
import * as API_URL from '../config'

export default {
  name: 'ingredientbatch',
  data () {
    return {
      ingredientBatches: ''
    }
  },
  methods: {
    fetchBatches: function() {
      this.$http.post(API_URL.MODULE + '/ingredientbatch/get/all', {
          'Accept': 'application/json'
      }, {
        headers: {
          'Authorization': auth.getAuthHeader(this)
        }
      }).then((response) => {
        this.ingredientBatches = response.data
      });
    }
  },
  created() {
    this.fetchBatches();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
