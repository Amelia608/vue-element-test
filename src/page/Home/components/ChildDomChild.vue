<template>
  <div>
    <p>coo:{{coo}} child:{{child}}</p>
    <el-button type="primary" class="mt20 mb20" @click="sendData">组件c发送数据到a</el-button>
  </div>
</template>
<script>
export default {
  name:'childDomChild',
  props:["coo","child"],
  inheritAttrs:false,
  data(){
    return{
      msg:'fdfdf'
    }
  },
  methods:{
    sendData(){
      this.$emit('upDate',this.msg)
      console.log('change')
    }
  }
}
</script>

