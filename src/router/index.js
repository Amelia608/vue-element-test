import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
import Home from "../page/Home";
import VueScroll from "../page/VueScroll";
import Modifier from "../page/Form/Modifier.vue";
import Vuex from "../page/VueDemo/Vuex";
import ShoppingCar from "../page/VueDemo/ShoppingCar";
import Es6Test from "../page/VueDemo/Es6Test";
import vuedemo from "./vuedemo";
const routes = [
  {
    path: "/home",
    component: Home
  },

  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/vuescroll",
    component: VueScroll
  },
  {
    path: "/modifier",
    component: Modifier
  },
  {
    path: "/vuex",
    component: Vuex
  },
  {
    path: "/ShoppingCar",
    component: ShoppingCar
  },
  {
    path: "/es6test",
    component: Es6Test
  },
  ...vuedemo
];
export default new Router({routes});
