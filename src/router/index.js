import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/layout/Home'
import Contact from '@/layout/Contact'
import About from '@/layout/About'
import Login from '@/layout/Login'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/',
            name: 'login',
            component: Login
        },
        
        
    ],
    mode: 'history'
})