<template>
  <ui-navs>
    <template v-slot:header>
      仪表盘
      <em>Gauge</em>
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