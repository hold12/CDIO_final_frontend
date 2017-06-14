<template>
  <div class="col-sm-4 col-sm-offset-4">
      <h2>Log In</h2>
      <p>Log in to access the website</p>
      <div class="alert alert-danger" v-if="error">
        <p>{{ error }}</p>
      </div>
      <div class="form-group">
          <input type="text" class="form-control" placeholder="User ID" v-model="credentials.username">
      </div>
      <div class="form-group">
          <input type="password" class="form-control" placeholder="Password" v-model="credentials.password">
      </div>
      <div class="btn btn-primary" @click="submit()">Login</div>
  </div>
</template>

<script>
//import auth from '../auth'

export default {
  data() {
      return {
          credentials: {
              username: '',
              password: ''
          },
          error: ''
      }
  },
  methods: {
      submit() {
          let credentials = {
              username: this.credentials.username,
              password: this.credentials.pasasword
          }

          auth.login(this, credentials, 'wut?')
      }
  }
}
</script>
