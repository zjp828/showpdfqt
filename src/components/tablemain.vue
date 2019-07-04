<template>
  <div>
    <el-input v-model="inputData"></el-input>
    <el-table
      :data="tableData"
      stripe
      border
      style="width: 100%">
      <el-table-column
        prop="userName"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话"
        width="180">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱">
      </el-table-column>
      <el-table-column
        prop="createTime"
        label="创建时间">
      </el-table-column>
      <el-table-column
        prop="zone"
        label="zone">
      </el-table-column>
    </el-table>
    <el-button @click="submit">tijiao</el-button>
  </div>

</template>

<script>
  import qs from "qs"
  export default {
    data() {
      return {
        tableData: [],
        inputData:""
      }
    },
    methods:{
      submit(){
        this.$ajax.post('http://localhost:8888/queryByUserName',{userName:this.inputData}).then(res => {
          this.tableData = res.data
        }).catch(function (error) {
          console.log(error);
        });
      }
    },
    mounted() {
      this.$ajax('http://localhost:8888/findAll').then(res => {
        this.tableData = res.data
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
</script>
