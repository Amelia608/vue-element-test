<template>
  <div class="page-home">
    <div style="display:none;">
      {{reversedText}}
      <p>{{prices}}</p>
      <el-button type="primary" @click="changeValue">change Value</el-button>
      <ul class="sort_by mb20">
        <li v-for="(item,index) in package2" :key="index">
          <p>名称：{{item.name}}</p>
          <p>价格：{{item.price}}</p>
          <p>数量：{{item.count}}</p>
        </li>
      </ul>
      <hr class="mt20" />
      <h2 class="f20 fb mt20">vue $attr $listeners inheritAttrs 跨组件传值</h2>
      <child-dom :foo="foo" :coo="coo" :child="child" @upDate="reciveData"></child-dom>
      <hr class="mb20" />
      <p class="sp">
        <span class="sp1">￥</span>
        <span class="sp2">282.00</span>
      </p>
      <hr class="mt20 mb20" />
      <h2 class="f20 fb mt20">vue 自定义组件的v-modle input checked</h2>
      <vmodel-input v-model="lovingVue" />
      <hr class="mt20 mb20" />
      <h2 class="f20 fb mt20 mb20">vue 修饰符sync父-子组件的双向数据绑定</h2>

      <text-document :show.sync="textDocument">
        <template slot="sub">用于测试</template>
        <template slot="test" slot-scope="user">{{user.a}}</template>
      </text-document>
      <h3 class="mt10 fb">show:{{textDocument}}</h3>
      <hr class="mt20 mb20" />
      <!-- <h2 class="f20 fb mt20">vue 自定义组件的v-modle input checked</h2> -->
      <!-- <div class="box_wrapper">
      <div class="box"></div>
    </div>
      <div class="v-modal"></div>-->
      <el-button type="primary" @click="toBus">buss 跳转测试</el-button>
    </div>
    <div>
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        highlight-current-row
        :row-key="row=>row.id"
        @selection-change="handleSelectionChange"
      >
        <!-- <el-table-column type="selection" width="55"></el-table-column> -->
        <el-table-column label="日期" width="120">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
      </el-table>
      <div style="margin-top: 20px">
        <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
        <el-button @click="toggleSelection()">取消选择</el-button>
        <el-button @click="handleRadio">单选id等于2的</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import childDom from './components/ChildDom'
import vmodelInput from './components/vmodelInput'
import textDocument from './components/textDocument'
export default {
  components: { childDom, vmodelInput, textDocument },
  data () {
    return {
      info: {
        id: 1,
        name: 'chenying',
        age: 30,
        tall: 145,
        money: 140000,
        hooby: 'play'
      },
      textDocument: false,
      value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      text: '123,356',
      person: {
        name: 'june',
        age: 29
      },
      student: {
        name: '',
        sex: ''
      },
      package1: [{
        name: 'iphone 7',
        price: 7199,
        count: 2
      }, {
        name: 'ipad',
        price: 2888,
        count: 1
      }],
      package2: [{
        name: 'applce',
        price: 3,
        count: 5
      }, {
        name: 'banana',
        price: 82,
        count: 10,
      }],
      foo: "Hello, world",
      coo: "Hello,rui",
      child: "hello,child",
      lovingVue: '',
      tableData: [{
        id: '1',
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: '2',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: '3',
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        id: '4',
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      multipleSelection: []
    }
  },
  computed: {

    reversedText: function () {
      return this.text.split(',').reverse().join(',')
    },
    prices: function () {
      let prices = 0
      this.package1.forEach(v => {
        prices += v.price * v.count
      })
      this.package2.forEach(v => {
        prices += v.price * v.count
      })
      return prices
    },
    packageSort: function () {
      return this.package2.sort((a, b) => {
        return a.price < b.price
      })
    }
  },
  beforeDestroy () {
    console.log(this.info, '这是今年的数据', this, '看看组件销毁之前会发生什么')
    this.$EventBus.$emit('get', this.info)
  },
  methods: {
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val;
    },
    handleRadio(){
      this.tableData.map(el=>{
        if(+el.id===2){
          this.$refs.multipleTable.setCurrentRow(el)
        }

      })
    },
    changeValue () {
      this.$set(this.package2, 0, {
        name: 'banana',
        price: 832,
        count: 10,
      })
    },
    toBus () {
      // bus.$emit('get', this.info)
      this.$router.push({ path: '/vuescroll' })
    },
    enter () {
      alert('enter事件')
    },
    keyupenter () {
      alert('input confirm')
    },
    reciveData (val) {
      console.log('recive', val)
    }
  }
}
</script>
<style lang="scss">
.sort_by {
  li {
    border-bottom: 1px solid #eee;
    padding: 5px 10px;
  }
  p {
    padding: 5px 0;
  }
}

.outerbox {
  float: left;
  position: relative;
  left: 50%;
}

.innerbox {
  float: left;
  position: relative;
  right: 50%;
}

.parent {
  position: relative;
  width: 80%;
  height: 300px;
  background: red;
  margin: 0 auto;
  .child {
    position: absolute;
    width: 300px;
    height: 200px;
    background: yellow;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
}
.sp1 {
  color: red;
  font-size: 14px;
  float: left;
  margin-top: 3px;
  // vertical-align: bottom;
}
.sp2 {
  color: #000;
  font-size: 20px;
  font-weight: bold;
  // vertical-align: bottom;
}
.box_wrapper {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  // background: #fdf;
  text-align: center;
  z-index: 500;
  &:after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 2px;
    vertical-align: middle;
    background: red;
  }
  .box {
    display: inline-block;
    width: 430px;
    min-height: 200px;
    background: #fff;
    vertical-align: middle;
  }
}
.v-modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #000;
  z-index: 100;
}
</style>
