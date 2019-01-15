import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use( Vuex )


let store = new Vuex.Store({
	state:{
		token:'',
		username:'',
    datalist:[]
	},
	mutations:{
		handleGettoken(state,params){

		},
    handleLogin(state,params){
		    state.token =params.token;
		    state.username=params.user;
    },
    getdatalist(state,params){
		  console.log(params.data+'111111112222222222');
		    state.datalist = params.data;
		    console.log(state.datalist+'1111111');
    }

	},
	actions:{
		handleLogin({commit},userInfo){
				axios({
				method:'post',
				url:'/api/api/login',
				data:{
					username:'admin',
					password:'admin'
				}
			}).then((data)=>{
			  console.log(data)
         commit("handleLogin",data.data)
			})
		}
	}


})
export default store;
