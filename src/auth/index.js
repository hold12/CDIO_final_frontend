import Vue from 'vue'
import router from '../router'

const API_URL = 'http://localhost:8000/'
const LOGIN_URL = API_URL + 'auth/authentication/'

export default {
    user: {
        authenticated: false,
        authenticatedUser: null
    },

    login(context, creds, redirect) {
        console.log("sending request")
        context.$http.post(LOGIN_URL, creds
        ).catch((err) => {
            context.error = err.response.data
        }).then((response) => {
            if(response.body.length == 830)
                localStorage.setItem('token', response.body)
                Vue.http.headers.common['Authorization'] = this.getAuthHeader()
                this.user.authenticated = true
                this.getAuthenticatedUser(context)

                if(redirect)
                    router.push(redirect)
        })
    },

    logout() {
        localStorage.removeItem('token')
        this.user.authenticated = false
        this.user.authenticatedUser = null
        delete Vue.http.headers.common['Authorization']
    },

    checkAuth() {
        let jwt = localStorage.getItem('token')

        if(jwt) {
            this.user.authenticated = true
        }

        else {
            this.user.authenticated = false
        }

        return this.user.authenticated
    },

    getAuthenticatedUser(context) {
        context.$http.post('http://localhost:8000/module/home/getLoggedUser', {
            'Accept': 'application/json'
        }, {
          headers: {
            'Authorization': this.getAuthHeader()
            }
        }).then((response) => {
            this.user.authenticatedUser = response.data
        })
    },
    
    getAuthHeader() {
        return 'Bearer ' + localStorage.getItem('token')
    },
}