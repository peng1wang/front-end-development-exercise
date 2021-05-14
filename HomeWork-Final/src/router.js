import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue';
import List from './views/List';
import Detail from './views/Detail';

Vue.use(Router)

// 定义路由规则
let routes = [
	{ path: '/list/:id', component: List },
	{ path: '/detail/:id', component: Detail },
	{ path: '*', component: Home }
]

// 定义路由
let router = new Router({ routes });

// 监听路由变化
// router.afterEach((...arg) => console.log(arg))
// 改变之前
// router.beforeEach((route, oldRoute, next) => {
// 	console.log(route, oldRoute)
// 	// 必须要执行
// 	next();
// })

export default router;
// export default new Router({ routes })

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home
//     },
//     {
//       path: '/about',
//       name: 'about',
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
//     }
//   ]
// })
