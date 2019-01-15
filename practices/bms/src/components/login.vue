<template>
	<div id="login">
		<el-form ref="form" :model="form" label-width="80px">
		  <el-form-item label="用户名">
		    <el-input v-model="form.username"></el-input>
		  </el-form-item>
		  <el-form-item label="密码">
		    <el-input v-model="form.password"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="handleLogin({username:form.username,password:form.password})">登录</el-button>
		  </el-form-item>
		</el-form>
	</div>
</template>

<script type="text/javascript">
	import Vuex from 'vuex'
	export default {
		data(){
			return {
        form: {
          username: '',
          password: ''
        }
			}
		},
		methods:{
			...Vuex.mapActions({
				handleLogin:'handleLogin'
			})
		},
    computed:{
      ...Vuex.mapState({
        token:state=>state.token
      })
    }
    ,
    watch:{
		  token(){
          this.$router.push('/home');
      }
    }
	}
</script>

<style>
	#login{
		width:100%;
		height:100%;
		background:url('../../static/img/bg.png') no-repeat;
	}
</style>
