import Vue from 'vue'
import router from '../router'
import * as API_URL from '../config'

export default {
    user: {
        authenticated: false,
        authenticatedUser: null
    },

    login(context, creds, redirect) {
        context.$http.post(API_URL.AUTH + '/authentication/', creds
        ).then((response) => {
            localStorage.setItem('token', response.body)
            this.getAuthenticatedUser(context)
            this.checkAuth()
            if(redirect)
                router.push(redirect)
        }).catch((err) => {
            context.error = err.response
        })
    },

    logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('authenticatedUser')
        this.user.authenticated = false
        this.user.authenticatedUser = null
    },

    checkAuth() {
        let jwt = localStorage.getItem('token')

        if(jwt) {
            this.user.authenticatedUser = JSON.parse(localStorage.getItem('authenticatedUser'))
            this.user.authenticated = true
        }

        else {
            localStorage.removeItem('authenticatedUser')
            this.user.authenticated = false
        }

        return this.user.authenticated
    },

    getAuthenticatedUser(context) {
        context.$http.post(API_URL.MODULE + '/home/getLoggedUser', {
            'Accept': 'application/json'
        }, {
          headers: {
            'Authorization': this.getAuthHeader(context)
            }
        }).then((response) => {
            localStorage.setItem('authenticatedUser', JSON.stringify(response.data))
            this.user.authenticatedUser = JSON.parse(localStorage.getItem('authenticatedUser'))
        })
    },
    
    getAuthHeader(context) {
        let token = localStorage.getItem('token')
        let authHeader = 'Bearer ' + token
        context.$http.post(API_URL.AUTH + '/authentication/validate', token
        ).then((response) => {
            if (response.status === 200) {
            } 
        }).catch((err) => {
            if (err.status === 401) {
                this.logout()
                router.push('/Login')  
            }
        })

        return authHeader

    }
}