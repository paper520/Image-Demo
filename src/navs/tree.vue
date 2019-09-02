<template>
  <ui-navs>
    <template v-slot:header>
      树图
      <em>Tree</em>
    </template>
    <template v-slot:content>
      <ul>
        <li>
          <h4>From Left to Right Tree</h4>
          <a href="" style='background-image:url("./src/navs/tree/tree-basic.png")'></a>
        </li>
        <li>
          <h4>From Bottom to Top Tree</h4>
          <a href="" style='background-image:url("./src/navs/tree/tree-orient-bottom-top.png")'></a>
        </li>
        <li>
          <h4>Radial Tree</h4>
          <a href="" style='background-image:url("./src/navs/tree/tree-radial.png")'></a>
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