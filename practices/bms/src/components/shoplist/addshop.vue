<template>
  <div>
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="店铺名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="店铺地址">
        <el-input v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item label="店铺手机号">
        <el-input v-model="form.tel"></el-input>
      </el-form-item>
      <el-form-item label="店铺联系人">
        <el-input v-model="form.manager"></el-input>
      </el-form-item>
      <el-form-item label="店铺添加日期">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker
            type="fixed-time"
            placeholder="选择时间"
            v-model="form.date2"
            style="width: 100%;"
          ></el-time-picker>
        </el-col>
      </el-form-item>
      <!-- 上传店铺logo -->
      <el-form-item>
        <el-upload
          class="el-upload"
          ref="upload"
          action=""
          :on-remove="handleRemove"
          :on-change="handlePreview"
          :file-list="fileList"
          :auto-upload="false"
        >
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      fileList: [],
      form: {
        name: "",
        address:"",
        tel:"",
        manager:"",
        date1:"",
        dat2:""
      }
    };
  },
  methods: {
    onSubmit() {
      var fd = new FormData();
      fd.set("name", this.form.name);
      fd.set("ordernum", this.form.region);
      fd.set("file", this.fileList[0].raw);
      // axios.post("/api/api/addgtype",this.form).then((result)=>{
      //                 console.log(result);
      // })

      axios({
        method: "post",
        url: "/api/api/addgtype",
        headers: {
          "content-type": "application/x-www-form-urlencoded"
        },
        data: fd
      });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
      this.fileList.splice(0,1);
    },
    handlePreview(file) {
      console.log(file);
      this.fileList.push(file);
    }
  }
};
</script>


<style lang="">
</style>
