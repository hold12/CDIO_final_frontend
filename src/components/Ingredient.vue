<template>
	<div class="container">
		<h1 class="page-header">Ingredients</h1>
		<router-link to="/Ingredient/create" class="btn btn-info">Create new</router-link>
		<div class="ib-table">
			<table class="table table-striped">
				<thead>
					<tr>
						<th>Ingredient ID</th>
						<th>Ingredient name</th>
						<th>Supplier</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="i in ingredients">
						<td>{{ i.ingredientId }}</td>
						<td>{{ i.ingredientName }}</td>
						<td>{{ i.supplier }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>

import auth from '../auth'
export default {
	name: 'Ingredient',
	data() {
		return {
			ingredients: ''
		}
	},
  methods: {
    fetchIngredients: function() {
			this.$http.post('http://localhost:8000/module/ingredient/get/all', {
          'Accept': 'application/json'
      }, {
        headers: {
          'Authorization': auth.getAuthHeader()
        }
      }).then((response) => {
        this.ingredients = response.data
      });
    }
  },
  created() {
    this.fetchIngredients();

    setInterval(function() {
        this.fetchIngredients();
    }.bind(this), 5000)
  }
}

</script>
