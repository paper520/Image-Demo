<template>
  <ui-navs>
    <template v-slot:header>
      雷达图
      <em>Radar</em>
    </template>
    <template v-slot:content>
      <ul>
        <li>
          <h4>Basic Radar Chart</h4>
          <a href="#/radar-basic" target="_blank" style='background-image:url("./src/navs/radar/radar-basic.jpg")'></a>
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