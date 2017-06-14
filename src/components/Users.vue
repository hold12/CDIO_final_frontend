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
          'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJob2xkMTIiLCJ1c2VyIjp7InVzZXJJZCI6MSwiZmlyc3RuYW1lIjoiYWRtaW4iLCJsYXN0bmFtZSI6bnVsbCwiaW5pdGlhbHMiOiJhZG0iLCJwYXNzd29yZCI6IltoaWRkZW5dIiwiYWN0aXZlIjp0cnVlLCJyb2xlcyI6W3sicm9sZV9pZCI6MCwicm9sZV9uYW1lIjoiYWRtaW5pc3RyYXRvciIsInBlcm1pc3Npb25zIjpbInVzZXIuY3JlYXRlIiwidXNlci51cGRhdGUiLCJ1c2VyLmRlbGV0ZSIsInVzZXIucmVhZCJdfSx7InJvbGVfaWQiOjAsInJvbGVfbmFtZSI6ImZvcmVtYW4iLCJwZXJtaXNzaW9ucyI6WyJpbmdyZWRpZW50YmF0Y2guY3JlYXRlIiwiaW5ncmVkaWVudGJhdGNoLnJlYWQiLCJwcm9kdWN0YmF0Y2guY3JlYXRlIiwicHJvZHVjdGJhdGNoLnJlYWQiXX0seyJyb2xlX2lkIjowLCJyb2xlX25hbWUiOiJwaGFybWFjaXN0IiwicGVybWlzc2lvbnMiOlsiaW5ncmVkaWVudC5jcmVhdGUiLCJpbmdyZWRpZW50LnJlYWQiLCJyZWNpcGUuY3JlYXRlIiwicmVjaXBlLnJlYWQiXX1dfSwiZXhwIjoxNDk3NDU1NjQ1fQ.9zfRoFvNTAIUP3kZRRiyG_2ORxeQEo7qkfgl16lSKrv3ml5PB9k1dSXAmvuLwnAe_CX-FRCMDnB0-E6ZzHOIXA',
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
