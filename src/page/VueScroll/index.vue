<template>
  <!-- bind your configurations -->
  <div class="parent">
    <vue-scroll :ops="ops" @handle-scroll-complete="handleComplete" @handle-scroll="handleScroll">
      <div
        id="box"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque sequi accusamus consequuntur quam quia tenetur itaque labore voluptatem cupiditate repudiandae cumque illo placeat molestiae impedit blanditiis consequatur omnis facilis beatae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium fugiat est enim odit ipsam reprehenderit dolor dolores quod aperiam similique voluptatem sit quibusdam excepturi quidem nobis aspernatur omnis modi praesentium.</div>
      <div
        id="box"
        v-show="show"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque sequi accusamus consequuntur quam quia tenetur itaque labore voluptatem cupiditate repudiandae cumque illo placeat molestiae impedit blanditiis consequatur omnis facilis beatae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium fugiat est enim odit ipsam reprehenderit dolor dolores quod aperiam similique voluptatem sit quibusdam excepturi quidem nobis aspernatur omnis modi praesentium.</div>
      <div
        id="box"
        v-show="show"
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque sequi accusamus consequuntur quam quia tenetur itaque labore voluptatem cupiditate repudiandae cumque illo placeat molestiae impedit blanditiis consequatur omnis facilis beatae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium fugiat est enim odit ipsam reprehenderit dolor dolores quod aperiam similique voluptatem sit quibusdam excepturi quidem nobis aspernatur omnis modi praesentium.</div>
    </vue-scroll>
    <el-button type="primary" @click="add" class="mt20">点我</el-button>
    <div id="store_row" class="mt20 mb20">
      <el-button type="primary" plain @click="increment">加</el-button>
      <el-button type="primary" plain @click="decrement">减</el-button>
    </div>
    <p>{{count}}</p>
  </div>
</template>

<script>
import store from '../../store/index'
export default {
  data () {
    return {
      show: false,
      ops: {
        vuescroll: {
          mode: "native",
        },
        rail: {
          gutterOfSide: '2px',

        }
      },
      width: "",
      itemAmount: 3,
      refresh: 1,
      noData: false,

    };
  },
  computed: {
    amount () {
      function getRandom () {
        let str = "#";
        for (let i = 0; i < 6; i++) {
          str += Math.floor(Math.random() * 16).toString(16);
        }
        return str;
      }
      return (
        this.refresh &&
        Array.apply(null, {
          length: this.itemAmount
        }).map(item => {
          return getRandom();
        })
      );
    },
    count () {
      return store.state.count
    }
  },
  created () {
    this.$EventBus.$on('get', this.myhandle)
  },
  methods: {
    myhandle (val) {
      console.log(val, '这是从上个页面传递过来的参数')
    },
    handleRS (vsInstance, refreshDom, done) {
      const vm = this;
      console.log("handleRS");
      setTimeout(() => {
        this.refresh++;
        done();
      }, 1500);
    },
    handleLoadStart (vm, dom, done) {
      setTimeout(() => {
        const random = Math.floor(Math.random() * 2) + 1;
        if (this.refresh >= 5) {
          this.noData = true;
        } else {
          this.noData = false;
        }
        done();
      }, 600);
    },
    add () {
      this.show = true;
    },
    handleLBD (vm, loadDom, done) {
      setTimeout(() => {
        if (!this.noData) {
          this.itemAmount += 2;
          this.refresh++;
        }
        done();
      }, 500);
    },
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    },
    handleComplete () {
      console.log('scroll complete！')
    },
    handleScroll (vertical, horizontal, nativeEvent) {
      console.log(vertical, nativeEvent)
    }
  }
};
</script>
<style lang="scss" scoped>
.parent {
  height: 250px;
  width: 300px;
  border: 1px solid #f00;
}

.item {
  border: 1px solid yellowgreen;
  height: 90px;
}

#box {
  padding: 0 20px 0 0;
}
</style>
