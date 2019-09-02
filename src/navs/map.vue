<template>
  <ui-navs>
    <template v-slot:header>
      地理坐标/地图
      <em>Map</em>
    </template>
    <template v-slot:content>
      <ul>
        
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