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
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ib in ingredientBatches">
            <td>{{ ib.ingredientBatchId }}</td>
            <td>{{ ib.ingredientId }}</td>
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
export default {
  name: 'ingredientbatch',
  data () {
    return {
      ingredientBatches: ''
    }
  },
  methods: {
    fetchBatches: function() {
      this.$http.post('http://localhost:8000/module/ingredientbatch/get/all', {
          'Accept': 'application/json'
      }, {
        headers: {
          'Authorization': auth.getAuthHeader()
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
