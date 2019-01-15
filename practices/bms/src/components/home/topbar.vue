<template>
  <div id="topbar">
    <img class='logo' src='./../../assets/logo.png' alt="">
    <div class="topright">
      <el-dropdown>
  <span class="el-dropdown-link">
    {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
        <el-dropdown-menu size slot="dropdown">
          <router-link to="/home" ><el-dropdown-item>详细信息</el-dropdown-item></router-link>
          <router-link to="/home"><el-dropdown-item>退出登录</el-dropdown-item></router-link>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  import Vuex from "vuex"
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    computed:{
      ...Vuex.mapState({
        username:state=>{
           var username ='';
          if(state.username){
            username = state.username;
          }else{
            username = '请登录'
          }
          return  username;
        }
      })
    }
  }
</script>

<style scoped>
    #topbar{
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: skyblue;
      padding: 0 30px;
    }
    .logo{
      width: 50px;
      height: 50px;
    }

</style>
