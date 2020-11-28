//脚手架创建路由
import Vue from 'vue'
//router实际上是一个插件
import Router from 'vue-router'
// import home from '../components/Home.vue'
// import about from '../components/About.vue'
// import user from '../components/User.vue'
//懒加载方式导入
const home = () => import('../components/Home.vue')
const about = () => import('../components/About.vue')
const user = () => import('../components/User.vue')
const homeMessage = () => import('../components/Home_Message.vue')
const homeNews = () => import('../components/Home_News.vue')
const profile = () => import('../components/Profile.vue')
//1、通过Vue.use安装插件（vue的任何插件都需要被安装）
Vue.use(Router)

//脚手架默认做了这三件事，以下代码做了两件事情：
//(1)、创建VueRouter对象
//(2)、将router对象传入Vue实例
export default new Router({
  routes: [
		{
			path:'/',
			redirect:'/home'
		},
    {
      path: '/home',
      component: home,
			children:[
				{
					//默认路径——默认显示新闻
					path:'',
					component:homeNews
				},
				// 子路由不加‘/’
				{
					path:'news',
					component:homeNews
				},
				{
					path:'message',
					component:homeMessage
				}
			]
    },
		{
		  path: '/about',
		  component: about
		},
		{
		  path: '/user/:userId',
		  component: user
		},
		{
		  path: '/profile',
		  component: profile
		}
  ],
	mode:'history',
	linkActiveClass:'active'
})
