<template>
  <div id="main-left">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>店铺管理</span>
        </template>
        <el-menu-item-group>
          <router-link :to="{name:'shoplist'}">
            <el-menu-item index="1-1">店铺列表</el-menu-item>
          </router-link>

        </el-menu-item-group>
        <el-menu-item-group>
          <router-link :to="{name:'addshop'}">
            <el-menu-item index="1-3">新增店铺</el-menu-item>
          </router-link>

        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">用户列表</span>
        </template>
        <el-menu-item-group>
          <router-link :to="{name:'addshop'}">
            <el-menu-item index="2-1">用户列表</el-menu-item>
          </router-link>
        </el-menu-item-group>
        <el-menu-item-group>
          <router-link :to="{name:'manageusers'}">
            <el-menu-item index="2-3">用户管理</el-menu-item>
          </router-link>

        </el-menu-item-group>

      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "main-left"
  }
</script>

<style scoped>
  #main-left {
    height: 100%;
  }

  .el-container {
    height: 100%;
  }

  .el-menu-vertical-demo {
    height: 100%;
  }
</style>
