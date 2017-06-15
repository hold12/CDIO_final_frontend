<template>
  <div id="app">
     <nav class="navbar navbar-default navbar-static-top">
      <div class="container">
        <a href="/"><p class="navbar-brand">Hold 12</p></a><!-- TODO: make this a route link instead -->
        <ul class="nav navbar-nav">
          <li v-if="!user.authenticated"><router-link to="/Login">Login</router-link></li>
          <li v-if="user.authenticated" @click="logout()"><router-link to="/">Logout</router-link></li>
          <li v-for="link in getPermittedLinks" v-html="link"></li>
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
        console.log("did a thing!")
        console.log(this.user.authenticatedUser)
        for (this.role in this.user.authenticatedUser.roles) {
          console.log("did another thing!")
          console.log(this.role)
          console.log(this.role.permissions)
          for (this.permission in this.role.permissions) {
            console.log("did yet another thing!")
            if (this.permission == 'user.read')
              links.push('<li><router-link to="/Users">Users</router-link></li>')
            else if (this.permission == 'recipe.read')
              links.push('<li><router-link to="/Recipes">Recipes</router-link></li>')
            else if (this.permission == 'ingredient.read')
              links.push('<li><router-link to="/ProductBatches">Product Batches</router-link></li>')
            else if (this.permission == 'ingredientbatch.read')
              links.push('<li><router-link to="/IngredientBatches">Ingredient Batches</router-link></li>')
            else if (this.permission == 'productbatch.read')
              links.push('<li><router-link to="/ProductBatches">Product Batches</router-link></li>')
            else
              break
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
