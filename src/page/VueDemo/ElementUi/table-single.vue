<template>
  <!-- element ui 单选测试 -->
  <div class="demo-elementui">
    <el-table
      :data="tableData"
      ref="single"
      v-loading="loading"
      style="width:100%"
      highlight-current-row
    >
      <el-table-column label="日期" prop="date"></el-table-column>
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="地址" prop="address"></el-table-column>
    </el-table>
    <el-button class="mt10" @click="selectRow(2)">点击选中第二行</el-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loading: false,
      tableData: [{
        id:'1',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id:'2',
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        id:'3',
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        id:'4',
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    selectRow(id){
      this.tableData.map(el=>{
        if(+id===+el.id){
          this.$refs.single.setCurrentRow(el)
        }
      })
    }

  }
}
</script>>
