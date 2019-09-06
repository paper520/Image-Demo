<template>
  <ui-navs>
    <template v-slot:header>
      旭日图
      <em>Sunburst</em>
    </template>
    <template v-slot:content>
      <ul>
        <li>
          <h4>Monochrome Sunburst</h4>
          <a href="#/sunburst-monochrome" target="_blank" style='background-image:url("./src/navs/sunburst/sunburst-monochrome.jpg")'></a>
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