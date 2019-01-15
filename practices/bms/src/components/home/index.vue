<template>
  <div id="home">
    <el-container>
      <el-header>
        <Topbar></Topbar>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Main_left></Main_left>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Topbar from './topbar'
  import Main_left from './main-left'
  import Main_right from './main-right'

  export default {
    components: {
      Topbar,
      Main_left,
      Main_right
    }
  }
</script>

<style scoped>
  #home {
    width: 100%;
    height: 100%;
  }

  .el-header {
    padding: 0;
    overflow: hidden;
  }

  .el-container {
    height: 100%;
  }
</style>
