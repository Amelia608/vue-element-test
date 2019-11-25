<template>
    <el-form
      :model="ruleForm1"
      :rules="rules1"
      ref="ruleForm1"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="活动名称2" prop="name">
        <el-input v-model="ruleForm1.name"></el-input>
      </el-form-item>
      <el-form-item label="年龄2" prop="age">
        <el-input v-model="ruleForm1.age"></el-input>
      </el-form-item>
    </el-form>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      ruleForm1: {
        name: '',
        age:''
      },
      rules1: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
         age: [
          { required: true, message: '年龄必填', trigger: 'blur' },

        ]
      }
    }
  },
  mounted () {
  },
  methods: {
     write(){
      console.log(2)
    }
  }

}
</script>

