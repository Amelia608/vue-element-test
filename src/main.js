import Vue from 'vue'
import vuescroll from 'vuescroll'
import 'vuescroll/dist/vuescroll.css';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
// import vuex from 'vuex'
Vue.use(vuescroll);
Vue.prototype.$EventBus=new Vue()

Vue.use(ElementUI)


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
