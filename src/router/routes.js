import Home from '../pages/Product';
import Signup from '../pages/Signup';
import Login from '../pages/Login';

export const routes = [
	{
		path:'/',
		component:Home,
		meta: {title: 'Home'},
    },
    {
		path:'/signup',
		component:Signup,
		meta: {title: 'Signup'},
    },
    {
		path:'/login',
		component:Login,
		meta: {title: 'Login'},
	},
];