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
const router =  new Router({
  routes: [
		{
			path:'/',
			redirect:'/home',
		},
    {
      path: '/home',
      component: home,
			children:[
				// 子路由不加‘/’
				{
					path:'news',
					component:homeNews
				},
				{
					path:'message',
					component:homeMessage
				}
			],
			meta:{
				title:'首页'
			},
			beforeEnter:(to,from,next)=>{
				next()
			}
    },
		{
		  path: '/about',
		  component: about,
			meta:{
				title:'关于'
			}
		},
		{
		  path: '/user/:userId',
		  component: user,
			meta:{
				title:'用户'
			}
		},
		{
		  path: '/profile',
		  component: profile,
			meta:{
				title:'档案'
			}
		}
  ],
	mode:'history',
	linkActiveClass:'active'
})
//前置钩子————跳转之前的回调
router.beforeEach((to,from,next)=>{
	//组件嵌套时meta的title实际存放在matched数组中，打印to进行查看
	document.title=to.matched[0].meta.title
	next()
})
router.afterEach((to,from)=>{
})
export default router
