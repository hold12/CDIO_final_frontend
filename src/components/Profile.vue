<template>
  <div class="container">
        <h1>Profile for {{ user.firstname }}</h1>
            
            <strong>Full Name:</strong> {{ user.firstname }} {{ user.lastname }} <br/><br/>
            <strong>Initials:</strong> {{ user.initials }}<br/><br/>
            <strong>Roles:</strong>
            <ul>
                <li v-for="role in user.roles">{{ role.role_name }}</li>
            </ul>

            <!--<form>
                <strong>Change Password</strong>
                <input type="password" class="form-control" v-model="user.password"><br/>
                <button class="btn btn-danger" @click="updatePassword">Change Password</button>
            </form>-->
  </div>
</template>

<script>
import auth from '../auth'
import * as API_URL from '../config'

export default {
    name: 'profile',
    data() {
        return {
            user: auth.user.authenticatedUser
        }
    },
    methods: {
        updatePassword: function(e) {
            e.preventDefault() 
            this.$http.post(API_URL.MODULE + '/user/update', this.user, {
                headers: {
                'Authorization': auth.getAuthHeader(this)
                }
            }).then((response) => {
                router.push('/Users')
            });
        }
    }
}
</script>
