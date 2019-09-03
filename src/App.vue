<template>
  <div>
    <ul>
      <li :class="{'active':flag=='line'}" @click='goto("line")'>
        <i style='background-position-y: 0px;'></i>折线图
      </li>
      <li :class="{'active':flag=='bar'}" @click='goto("bar")'>
        <i style='background-position-y: -30px;'></i>柱状图
      </li>
      <li :class="{'active':flag=='pie'}" @click='goto("pie")'>
        <i style='background-position-y: -120px;'></i>饼图
      </li>
      <li :class="{'active':flag=='scatter'}" @click='goto("scatter")'>
        <i style='background-position-y: -60px;'></i>散点图
      </li>
      <li :class="{'active':flag=='map'}" @click='goto("map")'>
        <i style='background-position-y: -240px;'></i>地理坐标/地图
      </li>
      <li :class="{'active':flag=='candlestick'}" @click='goto("candlestick")'>
        <i style='background-position-y: -90px;'></i>K线图
      </li>
      <li :class="{'active':flag=='radar'}" @click='goto("radar")'>
        <i style='background-position-y: -150px;'></i>雷达图
      </li>
      <li :class="{'active':flag=='tree'}" @click='goto("tree")'>
        <i style='background-position-y: -420px;'></i>树图
      </li>
      <li :class="{'active':flag=='sunburst'}" @click='goto("sunburst")'>
        <i style='background-position-y: -840px;'></i>旭日图
      </li>
      <li :class="{'active':flag=='gauge'}" @click='goto("gauge")'>
        <i style='background-position-y: -270px;'></i>仪表盘
      </li>
    </ul>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: ""
    };
  },
  mounted() {
    let routers = (window.location.href + "").replace(/^.*#\//, "").split("/");
    if (routers && routers.length >= 2) {
      this.flag = routers[1];
    }else{
      this.goto('tree');
    }
  },
  methods: {
    goto(target) {
      this.flag = target;
      window.location.href = "#/menus/" + target;
    }
  }
};
</script>

<style scoped>
.active {
  background-color: #e43c59;
  color: white;
}
.active > i {
  border-color: white;
}
div {
  font-size: 0;
  white-space: nowrap;
}
div > * {
  display: inline-block;
  font-size: 16px;
  vertical-align: top;
  height: calc(100vh - 50px);
  white-space: normal;
  overflow-y: auto;
}
div > ul {
  width: 180px;
  background-color: #293c55;
}
div > ul > li {
  line-height: 54px;
  height: 54px;
  padding-left: 20px;
  color: #ccc;
  vertical-align: middle;
  cursor: pointer;
  transition: 0.5s;
}
div > ul > li > i {
  background-image: url("./assets/icon.png");
  background-size: 30px;
  background-repeat: no-repeat;
  background-position-x: -1px;
  width: 32px;
  height: 32px;
  vertical-align: middle;
  border-radius: 50%;
  border: 1px solid #999;
  display: inline-block;
  margin-right: 10px;
}
div > div {
  background-color: #f3f3f3;
  width: calc(100vw - 180px);
}
</style>
