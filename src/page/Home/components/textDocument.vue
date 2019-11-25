<template>
  <div>
    <el-button type="primary" @click="clickHandle">
      <slot name="sub">Submit</slot>
    </el-button>
    <slot  name="test" :a="peple"></slot>
  </div>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      dialogVisible: false,
      msg: 'hello world',
      peple:['zhangsan','lisi','wanwu','zhaoliu','tianqi','xiaoba']
    }
  },
  methods: {
    clickHandle () {
      this.dialogVisible = !this.dialogVisible
      this.$emit('update:show', this.dialogVisible)
    }
  }
}
</script>

