<template>
  <ui-navs>
    <template v-slot:header>
      柱状图
      <em>Bar</em>
    </template>
    <template v-slot:content>
      <ul>
        <li>
          <h4>极坐标系下的堆叠柱状图</h4>
          <a href="#/bar-polar-real-estate" target="_blank" style='background-image:url("./src/navs/bar/bar-polar-real-estate.png")'></a>
        </li>
        <li>
          <h4>渐变色</h4>
          <a href="#/bar-gradient" target="_blank" style='background-image:url("./src/navs/bar/bar-gradient.png")'></a>
        </li>
        <li>
          <h4>柱状图动画延迟</h4>
          <a href="#/bar-animation-delay" target="_blank" style='background-image:url("./src/navs/bar/bar-animation-delay.png")'></a>
        </li>
      </ul>
    </template>
  </ui-navs>
</template>
<script>
import uiNavs from "../components/ui-navs.vue";
export default {
  components: {
    uiNavs
  }
};
</script>