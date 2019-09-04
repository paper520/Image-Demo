<template>
  <ui-navs>
    <template v-slot:header>
      K线图
      <em>Candlestick</em>
    </template>
    <template v-slot:content>
      <ul>
        <li>
          <h4>Candlestick Simple</h4>
          <a
            href="#/candlestick-simple"
            target="_blank"
            style="background-image:url('./src/navs/candlestick/candlestick-simple.png')"
          ></a>
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