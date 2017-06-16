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

                <!-- ==== Firstname ==== -->
                <div class="form-group">
                    <label for="firstname" class="control-label col-sm-2">Firstname:</label>
                    <div class="col-sm-10">
                        <input type="text" v-model="editUser.firstname" class="form-control" id="firstname" >
                    </div>
                </div>

                <!--==== Lastname ==== -->
                <div class="form-group">
                    <label for="lastname" class="control-label col-sm-2">Lastname:</label>
                    <div class="col-sm-10">
                        <input type="text" v-model="editUser.lastname" class="form-control" id="lastname" >
                    </div>
                </div>

                <!-- ==== Initials ==== -->
                <div class="form-group">
                    <label for="initials" class="control-label col-sm-2">Initials:</label>
                    <div class="col-sm-10">
                        <input type="text" v-model="editUser.initials" class="form-control" id="initials" >
                    </div>
                </div>

                <!-- ==== Password ====-->
                <div class="form-group">
                    <label for="password" class="control-label col-sm-2">Password:</label>
                    <div class="col-sm-10">
                        <button class="btn btn-success form-control" @click="generatePassword">Generate new password</button>
                    </div>
                </div>

                <!-- DEACTIVATED since the SQL procedure does not support updating user roles -->
                <!-- ==== Roles ==== -->
                <!--<div class="form-group">
                    <label for="roles" class="control-label col-sm-2">Roles:</label>
                    <div class="col-sm-9 col-sm-offset-1">-->

                    <!-- ==== Roles Select ====-->
                        <!--<select multiple class="form-control" v-model="editUser.roles">
                            <option v-for="role in roles">{{ role }}</option>
                        </select>
                    </div>
                </div>-->
                <!-- DEACTIVATED since the SQL procedure does not support updating user roles -->

                <div class="form-group">
                    <label for="isActive" class="control-label col-sm-2">Is Active:</label>
                    <div class="col-sm-9 col-sm-offset-1">
                        <input type="checkbox" v-model="editUser.active">
                    </div>
                </div>

                <button class="btn btn-success form-control" @click="updateUser">Update User</button>
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
            <!-- DEACTIVATED since the SQL procedure does not support updating user roles -->
            <!--<div class="form-group">
                <label for="roles">Roles:</label>
                <span id="roles" :class="{'bg-danger' : user.roles!=editUser.roles}">|
                    <span v-for="role in user.roles">
                        {{ role }} |
                    </span>
                </span>
                <span class="bg-success" v-if="user.roles!=editUser.roles">|
                    <span v-for="role in editUser.roles">
                        {{ role }} |
                    </span>
                </span><br/>
            </div>-->
            <!-- DEACTIVATED since the SQL procedure does not support updating user roles -->
            <div class="form-group">
                <label for="isActive">Active:</label>
                <span id="active" :class="{'bg-danger' : user.active!=editUser.active}" >{{ user.active }}</span> <span class="bg-success" v-if="user.active!=editUser.active">{{ editUser.active }}</span><br/>
                <!--<span id="isActive" :class="{'bg-danger' : user.isActive!=editUser.isActive}">{{ user.isActive }}</span>-->
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import router from '../router'
import auth from '../auth'
export default {
    name: 'users',
    data () {
        return {
            user: [],
            editUser: [],
            roles: [],
            currentUserId: this.$route.query.id
        }
    },
    methods: {
        fetchUser: function(userId) {
            this.$http.post('http://localhost:8000/module/user/getNoPerms/'+userId, {
                'Accept': 'application/json'
            }, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                }
            }).then((response) => {
                this.user = response.data
                this.editUser = Object.assign({}, this.user)
            })
        },
        fetchRoles: function() {
            this.$http.post('http://localhost:8000/module/role/get/all-noperms', { 'Accept' : 'application/json' }, {
                headers: {
                    'Authorization' : 'Bearer ' + localStorage.getItem('token')
                }
            }).then((response) => {
                this.roles = response.data
            })
        },
        isInArray: function(array, value) {
            return array.indexOf(value) > -1 ? true : false;
        },
        updateUser: function(e) {
            e.preventDefault()
            this.$http.post('http://localhost:8000/module/user/update', this.editUser, {
                headers: {
                'Authorization': auth.getAuthHeader()
                }
            }).then((response) => {
                router.push('/Users')
            });
        },
        generatePassword: function(e) {
        console.log("Function start")
            e.preventDefault()
            this.$http.post('http://localhost:8000/module/user/update/password', this.editUser, {
                headers: {
                'Authorization': auth.getAuthHeader()
                }
            }).then((response) => {
                editUser.password=response.data
            });
            console.log("Function finish")
        }
    },
    watch: {
        currentUserId: function(val) {
            router.push({ path: '/Users/Edit', query: {id: val} })
            this.fetchUser(val)
        }
    },
    created() {
            this.fetchRoles()
            this.fetchUser(this.currentUserId)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-danger {
    text-decoration: line-through;
}
</style>
