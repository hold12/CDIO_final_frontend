import Vue from 'vue'
import router from '../router'

const API_URL = 'http://localhost:8000/'
const LOGIN_URL = API_URL + 'auth/authentication/'

export default {
    user: {
        authenticated: false
    },
    returnUser: [],

    login(context, creds, redirect) {
        console.log("sending request")
        context.$http.post(LOGIN_URL, creds
        ).catch((err) => {
            context.error = err.response.data
            return false
        }).then((response) => {
                console.log(response.body)
                localStorage.setItem('token', response.body)
                Vue.http.headers.common['Authorization'] = this.getAuthHeader()
                this.user.authenticated = true

                if(redirect)
                    router.push(redirect)
            
        })
    },

    logout() {
        localStorage.removeItem('token')
        this.user.authenticated = false
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
    
    getAuthHeader() {
        return 'Bearer ' + localStorage.getItem('token')
    },
}