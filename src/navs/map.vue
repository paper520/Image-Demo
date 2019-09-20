<template>
  <ui-navs>
    <template v-slot:header>
      地理坐标/地图
      <em>Map</em>
    </template>
    <template v-slot:content>
      <ul>
         <li>
          <h4>China Map</h4>
          <a href="#/map-china" target="_blank" style='background-image:url("./src/navs/map/map-china.png")'></a>
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