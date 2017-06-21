import Vue from 'vue'
import router from '../router'

const API_URL = 'http://h12-prod.wiberg.tech:8000/'
const LOGIN_URL = API_URL + 'auth/authentication/'

export default {
    user: {
        authenticated: false,
        authenticatedUser: null
    },

    login(context, creds, redirect) {
        console.log("sending request")
        context.$http.post(LOGIN_URL, creds
        ).then((response) => {
            localStorage.setItem('token', response.body)
            // Vue.http.headers.common['Authorization'] = this.getAuthHeader(context)
            this.getAuthenticatedUser(context)
            console.log("authenticated")
            this.checkAuth()
            if(redirect)
                router.push(redirect)
        }).catch((err) => {
            context.error = err.response
        })
    },

    logout() {
        console.log("Logged out...")
        localStorage.removeItem('token')
        localStorage.removeItem('authenticatedUser')
        this.user.authenticated = false
        this.user.authenticatedUser = null
        // delete Vue.http.headers.common['Authorization']
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
        context.$http.post('http://h12-prod.wiberg.tech:8000/module/home/getLoggedUser', {
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
        context.$http.post(LOGIN_URL + 'validate', token
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

    },
    validateToken(context) {
        
    }
}