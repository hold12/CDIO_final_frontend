<template>
<form>
    <div class="col-sm-4 col-sm-offset-4">
        <h2>Log In</h2>
        <p>Log in to access the website</p>
        <div class="alert alert-danger" v-if="error">
            <p>{{ error }}</p>
        </div>
        <div class="form-group">
            <input 
                type="text" 
                class="form-control" 
                placeholder="User ID" 
                v-model="credentials.userId"
            >
        </div>
        <div class="form-group">
            <input
                type="password"
                class="form-control"
                placeholder="Password"
                v-model="credentials.password"
            >
        </div>
        <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate" v-if="loggingIn" id="loading"></span>
        <div class="btn btn-primary" @click="submit()" v-else id="submit-btn">Login</div>
    </div>
</form>    
</template>

<script>
import auth from '../auth'
export default {
  data() {
        return {
            loggingIn: false,
            credentials: {
                userId: '',
                password: ''
            },
            error: ''
        }
    },
    methods: {
        submit() {
            this.loggingIn = true
            var credentials = {
                userId: this.credentials.userId,
                password: this.credentials.password
            }
            
            let success = auth.login(this, credentials, '/')

            console.log(success)

            if (!success)
                this.loggingIn = false
        }
    }
}
</script>
