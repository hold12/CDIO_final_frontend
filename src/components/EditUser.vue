<template>
  <div class="users container">
    <h1>Edit User &ndash; {{ currentUserId}}</h1>
    <div class="col-md-12 form-group">
        <div class="col-md-4 col-md-offset-4">
            <label for="userId">User ID</label>
            <input type="number" v-model="currentUserId" class="form-control" id="userId">
        </div>
        <br><br><br><br>
    </div>
    <div v-if="user">
        <div class="col-md-6" id="editUser">
            <form class="form-horizontal">
                
                <div class="form-group">
                    <label for="firstname" class="control-label col-sm-2">Firstname:</label>
                    <div class="col-sm-10">
                        <input type="text" v-model="editUser.firstname" class="form-control" id="firstname" >
                    </div>
                </div>

                <div class="form-group">
                    <label for="lastname" class="control-label col-sm-2">Lastname:</label>
                    <div class="col-sm-10">
                        <input type="text" v-model="editUser.lastname" class="form-control" id="lastname" >
                    </div>
                </div>

                <div class="form-group">
                    <label for="initials" class="control-label col-sm-2">Initials:</label>
                    <div class="col-sm-10">
                        <input type="text" v-model="editUser.initials" class="form-control" id="initials" >
                    </div>
                </div>

                <div class="form-group">
                    <label for="password" class="control-label col-sm-2">Password:</label>
                    <div class="col-sm-10">
                        <input type="text" v-model="editUser.password" class="form-control" id="password" >
                    </div>
                </div>
            </form>
        </div>
        <div class="col-md-6" id="displayUser">
            <div class="form-group">
                <label for="firstname">Firstname</label>
                <span id="firstname" :class="{'bg-danger' : user.firstname!=editUser.firstname}" >{{ user.firstname }}</span> <span class="bg-success" v-if="user.firstname!=editUser.firstname">{{ editUser.firstname }}</span><br/>
            </div>
            <div class="form-group">
                <label for="lastname">lastname: </label>
                <span id="lastname" :class="{'bg-danger' : user.lastname!=editUser.lastname}" >{{ user.lastname }}</span> <span class="bg-success" v-if="user.lastname!=editUser.lastname">{{ editUser.lastname }}</span><br/>
            </div>
            <div class="form-group">
                <label for="initials">Initials:</label>
                <span id="initials" :class="{'bg-danger' : user.initials!=editUser.initials}" >{{ user.initials }}</span> <span class="bg-success" v-if="user.initials!=editUser.initials">{{ editUser.initials }}</span><br/>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <span id="password" :class="{'bg-danger' : user.password!=editUser.password}" >{{ user.password }}</span> <span class="bg-success" v-if="user.password!=editUser.password">{{ editUser.password }}</span><br/>
            </div>
            <div class="form-group">
                <label for="roles">Roles:</label>
                <span id="roles" :class="{'bg-danger' : user.roles!=editUser.roles}" >{{ user.roles }}</span> <span class="bg-success" v-if="user.roles!=editUser.roles">{{ editUser.roles }}</span><br/>
            </div>
        </div>        
            

        <!-- edit form -->
        
    </div>
                

  </div>
</template>

<script>
export default {
    name: 'users',
    data () {
        return {
            user: '',
            // editedUser: {userId:'',firstname:'',lastname:'',initials:'',password:''},
            editUser: '',
            currentUserId: 0
        }
    },
    methods: {
        fetchUser: function(userId) {
            console.log('http://localhost:8000/module/user/get/'+userId);
            this.$http.post('http://localhost:8000/module/user/get/'+userId, {
                'Accept': 'application/json'
            }, {
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJob2xkMTIiLCJ1c2VyIjp7InVzZXJJZCI6MSwiZmlyc3RuYW1lIjoiYWRtaW4iLCJsYXN0bmFtZSI6bnVsbCwiaW5pdGlhbHMiOiJhZG0iLCJwYXNzd29yZCI6IltoaWRkZW5dIiwiYWN0aXZlIjp0cnVlLCJyb2xlcyI6W3sicm9sZV9pZCI6MCwicm9sZV9uYW1lIjoiYWRtaW5pc3RyYXRvciIsInBlcm1pc3Npb25zIjpbInVzZXIuY3JlYXRlIiwidXNlci51cGRhdGUiLCJ1c2VyLmRlbGV0ZSIsInVzZXIucmVhZCJdfSx7InJvbGVfaWQiOjAsInJvbGVfbmFtZSI6ImZvcmVtYW4iLCJwZXJtaXNzaW9ucyI6WyJpbmdyZWRpZW50YmF0Y2guY3JlYXRlIiwiaW5ncmVkaWVudGJhdGNoLnJlYWQiLCJwcm9kdWN0YmF0Y2guY3JlYXRlIiwicHJvZHVjdGJhdGNoLnJlYWQiXX0seyJyb2xlX2lkIjowLCJyb2xlX25hbWUiOiJwaGFybWFjaXN0IiwicGVybWlzc2lvbnMiOlsiaW5ncmVkaWVudC5jcmVhdGUiLCJpbmdyZWRpZW50LnJlYWQiLCJyZWNpcGUuY3JlYXRlIiwicmVjaXBlLnJlYWQiXX1dfSwiZXhwIjoxNDk3NDc0NzcyfQ.p-l9ruFZZGDufO2-TqEJF4eogf5d1OZSww0FMNiJ55cpgigSaV0_AeH-8_HH38X6F5WKWovF_SrCG3Dehsb10A',
                }
            }).then((response) => {
                this.user = response.data
                this.editUser = Object.assign({}, this.user)
            });
        }
    },
    watch: {
        currentUserId: function(val) {
            this.fetchUser(val);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-danger {
    text-decoration: line-through;
}
</style>
