import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use( Vuex )


let store = new Vuex.Store({
	state:{
		token:'',
		username:'',
    datalist:[],
    total:0,
    currentpage:1
	},
	mutations:{
    handleLogin(state,params){
		    state.token =params.token;
		    state.username=params.user;
    },
    getdatalist(state,params){
		    state.datalist = params.data;
		    state.total = params.data.length;
    },
    changepage(state,params){
        state.datalist = params.data.filter(()=>{
            console.log(params);
        })
    }

	},
	actions:{
		handleLogin({commit},userInfo){
				axios({
				method:'post',
				url:'/api/api/login',
				data:{
					username:userInfo.username,
					password:userInfo.password
				}
			}).then((data)=>{
         commit("handleLogin",data.data)
			})
		},
    changepage({commit},params){
        axios({
          method:'post',
          url:'/getdatalist'
        }).then((data)=>{
          var obj ={
            data:data,
            currentpage:params.currentpage,
            limit:params.limit
          }
            commit('changepage',obj);
        })
    }
	}


})
export default store;
