<template>
  <ui-navs>
    <template v-slot:header>
      散点图
      <em>Scatter</em>
    </template>
    <template v-slot:content>
      <ul>
        <li>
          <h4>各国人均寿命与GDP关系演变</h4>
          <a href="#/scatter-life-expectancy-timeline" target="_blank" style='background-image:url("./src/navs/scatter/scatter-life-expectancy-timeline.jpg")'></a>
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