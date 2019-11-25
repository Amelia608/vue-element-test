<template>
<el-menu default-active="2" class="el-menu-demo" @open="handleOpen" @close="handleClose">
    <div v-for="(item,idx) in menus" :key="idx">
        <el-submenu :index="idx+''" v-if="item.submenus.length>0">
            <template slot="title">
                <i :class="item.icon"></i>
                <span>{{item.name}}</span>
            </template>
            <el-menu-item-group v-for="(menu,i) in item.submenus"  :key="i">
                <el-menu-item :index='idx+"-"+i'><router-link :to="menu.path">{{menu.name}}</router-link></el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-menu-item :index="idx+''" v-else>
            <i :class="item.icon"></i>
            <span slot="title"><router-link :to="item.path">{{item.name}}</router-link></span>
        </el-menu-item>
    </div>
</el-menu>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          name: "HOME",
          icon: "iconfont  icon-shouye-fuben",
          path: "/home",
          submenus: []
        },
        {
          name: "DEMO",
          icon: "el-icon-document",
          path: "",
          submenus: [
             {
              name:'饿了么',
              path:'/element-demo'
            },
            {
              name: "vuescroll",
              path: "/vuescroll"
            },
            {
              name: "Form表单修饰符",
              path: "/modifier"
            },
            {
              name:'vuex',
              path:'/vuex'
            },
            {
              name:'购物车',
              path:'/ShoppingCar'
            },
            {
            	name:'ES6',
            	path:'/es6test'
            }
          ]
        },
        {
          name: "导航二",
          icon: "el-icon-menu",
          path: "/",
          submenus: []
        },
        {
          name: "导航三",
          icon: "el-icon-document",
          path: "/",
          submenus: []
        },
        {
          name: "设置",
          icon: "el-icon-setting",
          path: "/",
          submenus: []
        }
      ]
    };
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

<style lang="scss" scoped>
@import "index.scss";
</style>
