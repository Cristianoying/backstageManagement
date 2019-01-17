import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Home from  '@/components/home/index'
import Shoplist from '@/components/shoplist/shoplist'
import Addshop from '@/components/shoplist/addshop'
import Userlist from '@/components/userlist/userlist'
import Manageusers from '@/components/userlist/manageusers'
import chart1 from '@/components/shoplist/shoplistchart1.vue'
import chart2 from '@/components/shoplist/shoplistchart2.vue'
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
        },
        {
          path:'chart1',
          name:'chart1',
          component:chart1
        },
        {
          path:'chart2',
          name:'chart2',
          component:chart2
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
