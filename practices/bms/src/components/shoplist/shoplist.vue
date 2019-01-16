<template>
  <div id="shoplist">
    <template>
      <!--:data="10"-->
      <el-table
        :data="datalist"
        height="470"
        border
        style="width: 100%">
        <el-table-column
          prop="shopName"
          label="店铺名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="shopLogo"
          label="店铺logo"
          width="140">
          <template slot-scope="scope">
            <img :src="scope.row.shopLogo">
          </template>
        </el-table-column>
        <el-table-column
          prop="shopAddress"
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
              @click="handleDelete(scope.$index, scope.row)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>

    <!--设置分页-->
    <div class="block">
      <!--<span class="demonstration">显示总数</span>-->
      <el-pagination
        @current-change="changepage(currentPage)"
        :current-page.sync="currentPage"
        layout="total, prev, pager, next"
        :total="total">
      </el-pagination>
    </div>
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
        this.getdatalist(data);
      })
    },
    methods:{
      ...Vuex.mapActions({
        changepage:'changepage'
      }),
      ...Vuex.mapMutations({
        getdatalist:'getdatalist'
      }),
      changepage(page){
        var limit = 10;
        console.log(page);
          // this.changepage(limit)
      }
    },
    computed: {
      ...Vuex.mapState({
        datalist:state=>state.datalist,
        total:state=>state.total

      })
    },
    data() {
      return {
        currentpage:1
      };
    }
  }
</script>

<style scoped>
  #shoplist img{
    width: 100px;
    height: 70px;
  }
  .block{
      margin: 0 auto;
    text-align: center;
  }
</style>
