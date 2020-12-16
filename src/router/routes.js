import Vue from "vue"
import Router from "vue-router"

import Home from '../pages/Products'
import Signup from '../pages/Signup'
import Login from '../pages/Login'

Vue.use(Router)

const ifNotAuthenticated = (to, from, next) => {
	if (!window.localStorage.getItem('user')) {
		next()
		return
	}
	next("/")
}

const ifAuthenticated = (to, from, next) => {
	if (window.localStorage.getItem('user')) {
		next()
		return
	}
	next("/login")
}

export default new Router({

	mode: "history", 
	routes: [
		{
			path:'/',
			component:Home,
			name:'Home',
			meta: {title: 'Home'},
			beforeEnter: ifAuthenticated

		},
		{
			path:'/signup',
			component:Signup,
			name:'Signup',
			meta: {title: 'Signup'},
			beforeEnter: ifNotAuthenticated
		},
		{
			path:'/login',
			component:Login,
			name:'Login',
			meta: {title: 'Login'},
			beforeEnter: ifNotAuthenticated
		},
	]

})