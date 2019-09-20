<template>
  <ui-demos url='Map/china'>
    China Map
  </ui-demos>
</template>
<script>
import uiDemos from "../../components/ui-demos.vue";
import getColors from "../../services/getColors";
import chinaMapData from "../../datas/china.geoJSON";
import mapCalc from "./map1";
import $$ from "image2d";
export default {
  components: {
    uiDemos
  },
  mounted() {
    let width = 700,
      height = 500;

    let painter = $$("<canvas>非常抱歉，您的浏览器不支持canvas!</canvas>")
      // 设置画布大小
      .attr({
        width,
        height
      })
      // 画布添加到页面
      .appendTo("#demo")
      // 获取画笔
      .painter()
      .config({
        strokeStyle: "#fff"
      });

    // 创建经纬度映射计算方法
    let map = mapCalc().scale(7),
      i,
      j,
      k,
      p;

    // 绘制地图
    var colors = getColors(chinaMapData.features.length);
    for (i = 0; i < chinaMapData.features.length; i++) {
      painter.config("fillStyle", colors[i]);
      if (chinaMapData.features[i].geometry.type == "Polygon") {
        drawer(chinaMapData.features[i].geometry.coordinates[0]);
      } else {
        for (
          j = 0;
          j < chinaMapData.features[i].geometry.coordinates.length;
          j++
        ) {
          drawer(chinaMapData.features[i].geometry.coordinates[j][0]);
        }
      }
    }

    // 绘制区域图形方法
    function drawer(points) {
      painter.beginPath();
      p = map(points[0][0], points[0][1]);
      painter.moveTo(p[0] + 400, p[1] + 260);
      for (k = 1; k < points.length; k++) {
        p = map(points[k][0], points[k][1]);
        painter.lineTo(p[0] + 400, p[1] + 260);
      }
      painter.fill();
      painter.stroke();
    }
  }
};
</script>
