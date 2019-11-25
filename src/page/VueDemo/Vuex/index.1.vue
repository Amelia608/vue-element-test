<template>
  <section class="vuex_page">
    <div class="el-row mb20 tc">
      <el-button type="primary" @click="increment">增加</el-button>
      <el-button type="success" @click="decrement">减少</el-button>
    </div>
    <p class="tc">{{count}}</p>
    <el-form
      :model="ruleForm1"
      :rules="rules1"
      ref="ruleForm1"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm1.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">立即创建</el-button>
        <el-button @click="resetForm('ruleForm1')">重置</el-button>
      </el-form-item>
    </el-form>
    <el-form
      :model="ruleForm2"
      :rules="rules2"
      ref="ruleForm2"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm2.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      ruleForm1: {
        name: '',
      },
      rules1: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
      },
      ruleForm2: {
        name: '',
      },
      rules2: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
      }
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  mounted () {
  },
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    },
    submitForm () {
      var p1=new Promise((resolve,reject)=>{
        this.$refs['ruleForm1'].validate(valid=>{
          if(valid){
            resolve()
          }
        })
      })
      var p2=new Promise((resolve,reject)=>{
        this.$refs['ruleForm2'].validate(valid=>{
          if(valid){
            resolve()
          }
        })
      })
      Promise.all([p2,p1]).then(()=>{
        alert('pass')
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    }
  }

}
</script>

