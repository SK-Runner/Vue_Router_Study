import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

//点击相同跳转按钮 地址相同报错问题---->
//vue-router.esm.js?fe87:2008 Uncaught (in promise) NavigationDuplicated: 
//Avoided redundant navigation to current location: "/home".
import Router from 'vue-router'
 
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}