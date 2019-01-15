<template>
  <div id="shoplist">
    <template>
      <!--:data="10"-->
      <el-table

        height="450"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          label="店铺名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="店铺logo"
          width="140">
        </el-table-column>
        <el-table-column
          prop="address"
          label="店铺地址">
        </el-table-column>
        <el-table-column
          prop="shopstar"
          label="星级评价">
        </el-table-column>
        <el-table-column
          prop="shopcomments"
          label="店铺评价">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>

    <!--设置分页-->

    <!--<div class="block">-->
      <!--<span class="demonstration">显示总数</span>-->
      <!--<el-pagination-->
        <!--@size-change="handleSizeChange"-->
        <!--@current-change="handleCurrentChange"-->
        <!--:current-page.sync="currentPage1"-->
        <!--:page-size="100"-->
        <!--layout="total, prev, pager, next"-->
        <!--:total="1000">-->
      <!--</el-pagination>-->
    <!--</div>-->
  </div>
</template>

<script>
  import axios from 'axios'
  import Vuex from 'vuex'
  export default {
    created(){
      axios({
        method:'get',
        url:'/getdatalist'
      }).then((data)=>{
        console.log(data);
        this.getdatalist(data);
      })
    },
    methods:{
      ...Vuex.mapActions({

      }),
      ...Vuex.mapMutations({
        getdatalist:'getdatalist'
      })
    },
    computed: {
      ...Vuex.mapState({
        datalist:state=>{
          console.log( state.datalist );
         return state.datalist
        }

      })
    }
  }
</script>

<style scoped>

</style>
