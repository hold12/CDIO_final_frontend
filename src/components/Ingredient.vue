<template>
	<div class="container">
		<h1 class="page-header">Ingredients</h1>
		<router-link to="/Ingredients/create" class="btn btn-success">Create new</router-link>
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
import * as API_URL from '../config'

export default {
	name: 'Ingredient',
	data() {
		return {
			ingredients: ''
		}
	},
  methods: {
    fetchIngredients: function() {
			this.$http.post(API_URL.MODULE + '/ingredient/get/all', {
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
    this.fetchIngredients();
  }
}

</script>
