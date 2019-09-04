<template>
  <ui-navs>
    <template v-slot:header>
      饼图
      <em>Pie</em>
    </template>
    <template v-slot:content>
      <ul>
        <li>
          <h4>流量来源</h4>
          <a href="#/pie-doughnut" target="_blank" style='background-image:url("./src/navs/pie/pie-doughnut.png")'></a>
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