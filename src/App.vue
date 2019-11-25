<template>
<div id="app">
       <Side/>
       <div class="seb-content-main">
         <router-view></router-view>
       </div>
</div>
</template>

<script>
import Side from "./components/Side";
import axios from "axios";
import Mock from "mockjs";
const Random = Mock.Random;
export default {
  components: {
    Side
  },
  data() {
    return {};
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
@import "./styles/index.scss";
.seb-content-main {
  margin-left: 220px;
  min-height: 500px;
  box-sizing: border-box;
  padding: 20px;
}
</style>
