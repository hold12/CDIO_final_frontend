<template>
<div class="container">
    <h1>Hello, World</h1>
    You requested ingredient batch {{ this.$route.query.id }}.

    <hr>

    {{ batch }}
</div>  
</template>

<script>
import auth from '../auth'
export default {
    name: 'ingredientbatchedit',
    data() {
        return {
            batch: {}
        }
    },
    methods: {
        fetchBatch: function() {
            this.$http.post('http://localhost:8000/module/ingredientbatch/get/'+this.$route.query.id, {
                'Accept': 'application/json'
            }, {
                headers: {
                'Authorization': auth.getAuthHeader()
                }
            }).then((response) => {
                this.batch = response.data
            });
        }
    },
    created() {
        this.fetchBatch()
    }
}
</script>
