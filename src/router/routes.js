import Vue from "vue"
import Router from "vue-router"

//products
import Home from '../pages/Product/AllProducts'
import AddProduct from '../pages/Product/AddProduct'
import EditProduct from '../pages/Product/EditProduct'

//auth
import Signup from '../pages/Auth/Signup'
import Login from '../pages/Auth/Login'

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
			path:'/add-product',
			component:AddProduct,
			name:'AddProduct',
			meta: {title: 'Add Product'},
			beforeEnter: ifAuthenticated
		},
		{
			path:'/edit-product/:product_id',
			component:EditProduct,
			name:'EditProduct',
			meta: {title: 'Edit Product'},
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