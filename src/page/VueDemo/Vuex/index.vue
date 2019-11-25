<template>
  <section class="vuex_page">
    <div class="el-row mb20 tc">
      <el-button type="primary" @click="increment">增加</el-button>
      <el-button type="success" @click="decrement">减少</el-button>
    </div>
    <p class="tc">{{count}}</p>
    <h1 class="f18 mb20">elemntUI多个组件表单验证demo</h1>
    <div>
      <form1 ref="formvalidate1"/>
      <form2 ref="formvalidate2"/>
    </div>
    <el-button type="primary" @click="submitForm('')">立即创建</el-button>
  </section>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import Form1 from './components/Form1'
import Form2 from './components/Form2'
export default {
  components: {
    Form1, Form2
  },
  data () {
    return {

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
			Promise.all([
				this.validateForm('formvalidate1'),
				this.validateForm('formvalidate2')
			]).then(()=>{
				console.log('pass')
			})
    },
    validateForm(refname){
    	return new Promise((resolve,reject)=>{
    		this.$refs[refname].$refs['ruleForm1'].validate(valid => {
          if (valid) {
            resolve()
          }
        })
    	})
    }
  }
	
}
</script>

