<template>
  <ui-navs>
    <template v-slot:header>
      仪表盘
      <em>Gauge</em>
    </template>
    <template v-slot:content>
      <ul>
        <li>
          <h4>Gauge Simple</h4>
          <a href="#/gauge-simple" target="_blank" style="background-image:url('./src/navs/gauge/gauge-simple.jpg')"></a>
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