<template>
  <div id="app">
     <nav class="navbar navbar-default navbar-static-top">
      <div class="container">
        <a href="/"><p class="navbar-brand">Hold 12</p></a><!-- TODO: make this a route link instead -->
        <ul class="nav navbar-nav">
          <li v-if="!user.authenticated"><router-link to="/Login">Login</router-link></li>
          <li v-if="user.authenticated" @click="logout()"><router-link to="/">Logout</router-link></li>
          <li v-if="user.authenticated">
              <span v-for="role in user.authenticatedUser.roles">
                <span v-if="role.permissions!=null">
                  <span v-for="permission in role.permissions">
                    <span v-if="permission == 'user.read'"><router-link to="/Users" class="navbar-text">Users</router-link></span>
                  </span>
                </span>
              </span>
          </li>
        </ul>
        <p class="navbar-text navbar-right" v-if="user.authenticatedUser">Logged in as <a href="#">{{ user.authenticatedUser.firstname }}</a></p>
        <p class="navbar-text navbar-right" v-else>Not logged in</p>
      </div>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import auth from '../auth'
export default {
  name: 'app',
  
  data() {
    return {
      user: auth.user,
      role: null
    }
  },
  methods: {
    logout() {
      auth.logout()
    }
  }
}
</script>

<style>
#app {
  padding-top: 0;
  margin-top: 0;
}
</style>
