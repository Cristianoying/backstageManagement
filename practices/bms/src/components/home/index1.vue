<template>
  <div id="home">
    <el-container>
      <el-header height="100px">Header</el-header>
      <el-container>
        <el-aside width="400px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
    <!--<Topbar></Topbar>-->
    <!--<Main_left></Main_left>-->
    <!--<Main_right></Main_right>-->
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
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 100px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    height: 100%;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
    height: 1100px;
  }

</style>
