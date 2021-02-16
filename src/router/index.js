import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';

Vue.use(VueRouter);

const
	routes = [
		{
			path: '/',
			name: 'Home',
			component: Home
		},
		// {
		// 	path: '/about',
		// 	name: 'About',
		// 	component: () => import(/* webpackChunkName: "about" */ '../views/About')
		// },
		{
			path: '/name/:name',
			name: 'Child',
			component: Home,
			props: true
		}
	],
	router = new VueRouter({
		routes
	})
;

export default router;
