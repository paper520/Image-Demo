<template>
  <ui-navs>
    <template v-slot:header>
      折线图
      <em>Line</em>
    </template>
    <template v-slot:content>
      <ul>
        <li>
          <h4>Basic Line Chart</h4>
          <a href="#/line-simple" target="_blank" style='background-image:url("./src/navs/line/line-simple.png")'></a>
        </li>
        <li>
          <h4>Smoothed Line Chart</h4>
          <a href="#/line-smooth" target="_blank" style='background-image:url("./src/navs/line/line-smooth.png")'></a>
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