<template>
    <div class="page-modifier">
       <el-input v-model.lazy="input" placeholder="请输入内容"></el-input>
       <p>{{input}}</p>
    </div>
</template>
<script>
export default {
  data() {
    return {
      input: ""
    };
  },
  methods: {
    change() {
      console.log(this.input);
    }
  }
};
</script>
<style lang='scss' scoped>
</style>