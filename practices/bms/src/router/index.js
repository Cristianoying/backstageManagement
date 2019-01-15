import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Home from  '@/components/home/index'
import Shoplist from '@/components/shoplist/shoplist'
import Addshop from '@/components/shoplist/addshop'
import Userlist from '@/components/userlist/userlist'
import Manageusers from '@/components/userlist/manageusers'
Vue.use(Router)

 var routers = new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
    	path:'/home',
    	component:Home,
    	name:"home",
    	meta:{
    		NeedAuth:true
    	},
      children:[
        {
          path:'shoplist',
          name:'shoplist',
          component: Shoplist,
        },
        {
          path:'addshop',
          name:'addshop',
          component:Addshop
        },
        {
          path:'userlist',
          name:'userlist',
          component:Userlist
        },
        {
          path:'manageusers',
          name:'manageusers',
          component:Manageusers
        }
      ]

    }
  ]
})
 routers.beforeEach((to,from,next)=>{
 	if (to.meta.NeedAuth) {
 		// if () {}
    next()
 	}
 	next()
 })


export default routers;
