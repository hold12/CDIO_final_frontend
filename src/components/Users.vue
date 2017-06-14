<template>
  <div class="users container">
    <h1 class="page-header">Manage Users</h1>
    <button class="btn btn-success" @click="fetchUsers">Click Me</button>
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
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'users',
  data () {
    return {
      users: '',
      credentials: {
        username: '1',
        password: 'root'
      }
    }
  },
  methods: {
    fetchUsers: function() {
      console.log("Clicked")
      this.$http.post('http://localhost:8000/module/user/get/all', {
          'Accept': 'application/json'
      }, {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJob2xkMTIiLCJ1c2VyIjp7InVzZXJJZCI6MSwiZmlyc3RuYW1lIjoiYWRtaW4iLCJsYXN0bmFtZSI6bnVsbCwiaW5pdGlhbHMiOiJhZG0iLCJwYXNzd29yZCI6IltoaWRkZW5dIiwiYWN0aXZlIjp0cnVlLCJyb2xlcyI6W3sicm9sZV9pZCI6MCwicm9sZV9uYW1lIjoiYWRtaW5pc3RyYXRvciIsInBlcm1pc3Npb25zIjpbInVzZXIuY3JlYXRlIiwidXNlci51cGRhdGUiLCJ1c2VyLmRlbGV0ZSIsInVzZXIucmVhZCJdfSx7InJvbGVfaWQiOjAsInJvbGVfbmFtZSI6ImZvcmVtYW4iLCJwZXJtaXNzaW9ucyI6WyJpbmdyZWRpZW50YmF0Y2guY3JlYXRlIiwiaW5ncmVkaWVudGJhdGNoLnJlYWQiLCJwcm9kdWN0YmF0Y2guY3JlYXRlIiwicHJvZHVjdGJhdGNoLnJlYWQiXX0seyJyb2xlX2lkIjowLCJyb2xlX25hbWUiOiJwaGFybWFjaXN0IiwicGVybWlzc2lvbnMiOlsiaW5ncmVkaWVudC5jcmVhdGUiLCJpbmdyZWRpZW50LnJlYWQiLCJyZWNpcGUuY3JlYXRlIiwicmVjaXBlLnJlYWQiXX1dfSwiZXhwIjoxNDk3NDc0NzcyfQ.p-l9ruFZZGDufO2-TqEJF4eogf5d1OZSww0FMNiJ55cpgigSaV0_AeH-8_HH38X6F5WKWovF_SrCG3Dehsb10A',
        }
      }).then((response) => {
        this.users = response.data
      });
    }
  },
  created() {
    console.log("Created!");
    this.fetchUsers();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
