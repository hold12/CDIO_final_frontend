<template>
  <div class="users container">
    <h1 class="page-header">Manage Users</h1>
    <router-link to="/Users/new" class="btn btn-success">Create new</router-link>
    <div class="users-table">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>initials</th>
            <th>Password</th>
            <th>Roles</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users">
            <td>{{ user.userId }}</td>
            <td>{{ user.firstname }}</td>
            <td>{{ user.lastname }}</td>
            <td>{{ user.initials }}</td>
            <td>{{ user.password }}</td>
            <td>| <span v-for="role in user.roles">{{ role.role_name }} | </span></td>
            <td>{{ user.active }}</td>
            <td><router-link :to="'/Users/Edit?id='+user.userId" class="btn btn-info">Edit</router-link></td>  
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import auth from '../auth'
export default {
  name: 'users',
  data () {
    return {
      users: ''
    }
  },
  methods: {
    fetchUsers: function() {
      this.$http.post('http://h12-prod.wiberg.tech:8000/module/user/get/all', {
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
    this.fetchUsers();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
