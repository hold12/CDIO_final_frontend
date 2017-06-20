<template>
	<div class="container">
		<h1 class="page-header">Product Batches</h1>
		<router-link to="/ProductBatch/create" class="btn btn-info">Create new</router-link>
		<div class="ib-table">
			<table class="table table-striped">
				<thead>
					<tr>
						<th>Product batch ID</th>
						<th>Recipe ID</th>
						<th>Recipe name</th>
						<th>Created time</th>
						<th>Finished time</th>
						<th>Status</th>
						<th>User ID</th>
						<th>Initials</th>
						<th>Product Batch Components</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="pb in productbatches">
						<td>{{ pb.productbatchId }}</td>
						<td>{{ pb.recipeId }}</td>
						<td>{{ pb.recipeName }}</td>
						<td>{{ new Date(pb.createdTime).toLocaleString('en-GB') }}</td>
						<td>
							<div v-if="pb.finishedTime != null">
								{{ new Date(pb.finishedTime).toLocaleString('en-GB') }}
							</div>
						</td>
						<td>{{ pb.status }}</td>
						<td>{{ pb.userId }}</td>
						<td>{{ pb.initials }}</td>
            <td><router-link :to="'/ProductBatchComponent?id='+pb.productbatchId" class="btn btn-info">Product Batch Components</router-link></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>

import auth from '../auth'
export default {
	name: 'ProductBatch',
	data() {
		return {
			productbatches: ''
		}
	},
  methods: {
    fetchProductBatches: function() {
			this.$http.post('http://h12-prod.wiberg.tech:8000/module/productbatch/get/all', {
          'Accept': 'application/json'
      }, {
        headers: {
          'Authorization': auth.getAuthHeader()
        }
      }).then((response) => {
        this.productbatches = response.data
      })
    }
  },
  created() {
		this.fetchProductBatches()
		
		//setInterval(function() {
 	  //	this.fetchProductBatches()
		//}.bind(this), 3000)
  }
}

</script>
