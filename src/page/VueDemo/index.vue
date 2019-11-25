<template>
  <div>
    <div :gutter="20">
      <el-col :span="6" v-for="(item,index) in list" :key="index">
       <el-card>
         <span slot="header">{{item.title}}</span>
         <ul>
           <li v-for="(v,i) in item.subList" :key="i">
             <el-button type="text" @click="$router.push(v.path)">{{v.name}}</el-button>
           </li>
         </ul>
       </el-card>
      </el-col>
    </div>
  </div>
</template>
<script>
export default {
  name:'element-ui-demo',
  data(){
    return {
      list:[
        {
          title:'TABLE',
          subList:[
            {
              name:'单选',
              path:'/single-table'
            }
          ]
        }
      ]
    }
  }
}
</script>
