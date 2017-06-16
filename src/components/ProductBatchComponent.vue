<template>
  <div class="Product Batch Components container">
    <h1 class="page-header">View Product Batch Components</h1>
    <div class="ProductBatchComponents-table">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Ingredient Batch ID</th>
            <th>Ingredient ID</th>
            <th>Ingredient name</th>
            <th>Supplier</th>
            <th>Tare</th>
            <th>Net weight</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pbc in productBatchComponents">
            <td>{{ pbc.ingredientbatchId }}</td>
            <td>{{ pbc.ingredientId }}</td>
            <td>{{ pbc.ingredientName }}</td>
            <td>{{ pbc.supplier }}</td>
            <td>{{ pbc.tare }}</td>
            <td>{{ pbc.netWeight }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
    name: 'productBatchComponents',
    data () {
        return {
            productBatchComponents: {},
            currentProductBatch: 0
        }
    },
    methods: {
        fetchProductBatchComponents: function(product) {
            this.$http.post('http://localhost:8000/module/productbatchcomponent/get/all/'+product, {
                'Accept': 'application/json'
            }, {
                headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
                }
            }).then((response) => {
                this.productBatchComponents = response.data
            })
        }
    },
    created() {
        this.currentProductBatch = this.$route.query.id
        this.fetchProductBatchComponents(this.currentProductBatch)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-danger {
    text-decoration: line-through;
}
</style>
