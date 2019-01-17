 <template>
  <div id="shoplist">
    <template>
      <!--:data="10"-->
      <el-table :data="datalist" height="470" border style="width: 100%">
        <el-table-column prop="shopName" label="店铺名称" width="180"></el-table-column>
        <el-table-column prop="shopLogo" label="店铺logo" width="140">
          <template slot-scope="scope">
            <img :src="scope.row.shopLogo">
          </template>
        </el-table-column>
        <el-table-column prop="shopAddress" label="店铺地址"></el-table-column>
        <el-table-column prop="shopstar" label="星级评价"></el-table-column>
        <el-table-column prop="shopcomments" label="店铺评价"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleEdit(scope.$index, scope.row)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>

    <!--设置分页-->
    <div class="block">
      <!--<span class="demonstration">显示总数</span>-->
      <el-pagination
        @current-change="changepage(currentpage)"
        :current-page.sync="currentpage"
        layout="total, prev, pager, next"
        :total="total"
      ></el-pagination>
    </div>

    <div class="edit">
      <el-dialog title="收货地址" :visible.sync="dialogFormVisible" >
        <el-form :model="form">
          <el-form-item label="店铺名称">
            <el-input v-model="form.shopName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="店铺地址">
            <el-input v-model="form.shopAddress" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="店铺评价">
            <el-input v-model="form.shopcomments" autocomplete="off"></el-input>
          </el-form-item>
           <el-form-item label="店铺电话">
            <el-input v-model="form.shopTel" autocomplete="off"></el-input>
          </el-form-item>
          <!-- <el-form-item label="活动区域" >
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item> -->
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="sendedit()">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

                                        <script>
import axios from "axios";
import Vuex from "vuex";
export default {
  created() {
    axios({
      method: "get",
      url: "/getdatalist"
    }).then(data => {
      this.getdatalist(data);
    });
  },
  methods: {
    ...Vuex.mapActions({
      changepage: "changepage"
    }),
    ...Vuex.mapMutations({
      getdatalist: "getdatalist"
    }),
    changepage(page) {
      var limit = 10;
      console.log(page);
      // this.changepage(limit)
    },
    handleEdit(row, msg) {
      console.log(row, msg);
      this.dialogFormVisible=true;
      this.form.shopName=msg.shopName;
      this.form.shopAddress=msg.shopAddress;
      this.form.shopcomments=msg.shopcomments;
      this.form.shopId=msg.shopId;
      this.form.shopTel=msg.shopTel;

    },
    sendedit(){
        axios({
            method:'post',
            url:'/editmsg',
            data:{
                form:this.form
            }
        }).then((data)=>{
            console.log(data);
            this.getdatalist(data);
            this.dialogFormVisible=false;
        })
    }
  },
  computed: {
    ...Vuex.mapState({
      datalist: state => state.datalist,
      total: state => state.total
    })
  },
  data() {
    return {
      currentpage: 1,
      dialogFormVisible:false,
      form:{
          shopcomments:'',
          shopName:'',
          shopAddress:'',
          shopId:'',
          shopTel:''
      }
    };
  }
};
</script>

<style scoped>
#shoplist img {
  width: 100px;
  height: 70px;
}
.block {
  margin: 0 auto;
  text-align: center;
}
</style>
