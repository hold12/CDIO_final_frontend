<template>
    <div class="users container">
        <h1>Create new User</h1>
        <div class="col-md-12 form-group">
            <br><br><br><br>
        </div>
            <div class="col-md-6" id="editUser">
                <form class="form-horizontal">
                    
                    <!-- ==== Firstname ==== -->
                    <div class="form-group">
                        <label for="firstname" class="control-label col-sm-2">Firstname:</label>
                        <div class="col-sm-10">
                            <input type="text" v-model="user.firstname" class="form-control" id="firstname" >
                        </div>
                    </div>

                    <!--==== Lastname ==== -->
                    <div class="form-group">
                        <label for="lastname" class="control-label col-sm-2">Lastname:</label>
                        <div class="col-sm-10">
                            <input type="text" v-model="user.lastname" class="form-control" id="lastname" >
                        </div>
                    </div>

                    <!-- ==== Initials ==== -->
                    <div class="form-group">
                        <label for="initials" class="control-label col-sm-2">Initials:</label>
                        <div class="col-sm-10">
                            <input type="text" v-model="user.initials" class="form-control" id="initials" >
                        </div>
                    </div>

                    <!-- ==== Roles ==== -->
                    <div class="form-group">
                        <label for="roles" class="control-label col-sm-2">Roles:</label>
                        <div class="col-sm-9 col-sm-offset-1">
                            
                        <!-- ==== Roles Select ====-->
                            <select multiple class="form-control" v-model="user.roles">
                                <option v-for="role in roles" :value="role_id">{{ role.role_name }}</option>
                            </select>
                        </div>
                    </div>

                <button class="btn btn-success form-control" @click="putUser">Create User</button>
            </form>
        </div>  
  </div>
</template>

<script>
import router from '../router'
import auth from '../auth'
import config from '../config'

export default {
    name: 'users',
    data () {
        return {
            user: {firstname: '', lastname: '', initials: '', roles: []},
            roles: {}
        }
    },
    methods: {
        fetchRoles: function() {
            this.$http.post(config.API_URL + '/role/get/all', { 'Accept' : 'application/json' }, {
                headers: {
                    'Authorization' : auth.getAuthHeader(this)
                }
            }).then((response) => {
                this.roles = response.data
            })
        },
        putUser: function(e) {
            e.preventDefault() 
            this.$http.post(config.API_URL + '/user/create', this.user, {
                headers: {
                'Authorization': auth.getAuthHeader(this)
                }
            }).then((response) => {
                router.push('/Users')
            });
        }
    },
    created() {
        this.fetchRoles()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-danger {
    text-decoration: line-through;
}
</style>
