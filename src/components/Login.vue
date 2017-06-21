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
        <div class="spinner" v-if="loggingIn">
            <div class="cube1"></div>
            <div class="cube2"></div>
        </div>
        <!--<span class="glyphicon glyphicon-refresh glyphicon-refresh-animate" v-if="loggingIn" id="loading"></span>-->
        <!--<p v-if="loggingIn">Logging In</p>-->
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
                userId: '1',
                password: 'root'
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
            auth.login(this, credentials, '/')
            
            // this.loggingIn = false
        }
    }
}
</script>

<style scoped>
.spinner {
  margin: 0px auto;
  width: 25px;
  height: 25px;
  position: relative;
}

.cube1, .cube2 {
  background-color: #296294;
  width: 15px;
  height: 15px;
  position: absolute;
  top: 0;
  left: 0;
  
  -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;
  animation: sk-cubemove 1.8s infinite ease-in-out;
}

.cube2 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

@-webkit-keyframes sk-cubemove {
  25% { -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5) }
  50% { -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg) }
  75% { -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5) }
  100% { -webkit-transform: rotate(-360deg) }
}

@keyframes sk-cubemove {
  25% { 
    transform: translateX(42px) rotate(-90deg) scale(0.5);
    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
  } 50% { 
    transform: translateX(42px) translateY(42px) rotate(-179deg);
    -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);
  } 50.1% { 
    transform: translateX(42px) translateY(42px) rotate(-180deg);
    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
  } 75% { 
    transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
  } 100% { 
    transform: rotate(-360deg);
    -webkit-transform: rotate(-360deg);
  }
}
</style>
