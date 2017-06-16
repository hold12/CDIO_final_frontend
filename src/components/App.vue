<template>
  <div id="app">
     <nav class="navbar navbar-default navbar-static-top">
      <div class="container">
        <a href="/"><p class="navbar-brand">Hold 12</p></a><!-- TODO: make this a route link instead -->
        <ul class="nav navbar-nav">
          <li v-if="!user.authenticated"><router-link to="/Login">Login</router-link></li>
          <li v-if="user.authenticated" @click="logout()"><router-link to="/">Logout</router-link></li>
          <li v-for="link in getPermittedLinks">
            <router-link :to="link.url">{{ link.text }}</router-link>
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
  },
  computed: {
    getPermittedLinks: function () {
      let links = []
      if (this.user.authenticatedUser != null) {
        for (var i = 0; i < this.user.authenticatedUser.roles.length; i++) {
          for (var j = 0; j < this.user.authenticatedUser.roles[i].permissions.length; j++) {
            if (this.user.authenticatedUser.roles[i].permissions[j] == 'user.read'){
              links.push({'url': '/Users','text': 'Users'})
              }
            else if (this.user.authenticatedUser.roles[i].permissions[j] == 'recipe.read') {
              links.push({'url': '/Recipes','text': 'Recipes'})
              }
            else if (this.user.authenticatedUser.roles[i].permissions[j] == 'ingredient.read') {
              links.push({'url': '/Ingredient','text': 'Ingredient'})
              }
            else if (this.user.authenticatedUser.roles[i].permissions[j] == 'ingredientbatch.read') {
              links.push({'url': '/IngredientBatch','text': 'Ingredient Batch'})
              }
            else if (this.user.authenticatedUser.roles[i].permissions[j] == 'productbatch.read') {
              links.push({'url': '/ProductBatch','text': 'Product Batch'})
              }
            else {
            }
          }
        }
      }
      return links
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
