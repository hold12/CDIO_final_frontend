<template>
  <div class="users container">
    <h1 class="page-header">Manage Users</h1>
    <!--<button class="btn btn-success" @click="getUserId1">Click Me</button>-->
    <div class="users-table" v-if="users">
      <ul>
        <li v-for="user in users">{{ user.firstname }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import auth from '../auth'
export default {
  name: 'users',
  data () {
    return {
      users: [],
      credentials: {
        username: '1',
        password: 'root'
      }
    }
  },
  methods: {
    fetchUsers() {
      console.log("Clicked")
      this.$http.post('http://localhost:8000/module/user/get/all', {
          'Accept': 'application/json'
      }, {
        headers: {
          'Authorization': auth.getAuthHeader()
        }
      }).then((response) => {
        users = JSON.parse(response.data)
      });
    },
    created: function() {
      this.fetchUsers();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
