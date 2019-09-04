<template>
  <ui-demos url='Pie/doughnut'>
    流量来源
  </ui-demos>
</template>
<script>
import uiDemos from "../../components/ui-demos.vue";
import getColors from "../../services/getColors";
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
      .painter();

    let data = [
      { value: 335, name: "直接访问" },
      { value: 310, name: "邮件营销" },
      { value: 234, name: "联盟广告" },
      { value: 135, name: "视频广告" },
      { value: 1548, name: "搜索引擎" }
    ];

    let allValue = 0;
    for (let i = 0; i < data.length; i++) {
      allValue += data[i].value;
    }

    let colors = getColors(data.length);
    let preDeg = -Math.PI / 2;
    // 绘制饼图
    for (let i = 0; i < data.length; i++) {
      painter
        // 绘制饼
        .config("fillStyle", colors[i])
        .fillArc(
          width / 2,
          height / 2,
          height / 4,
          height / 8 * 3,
          preDeg,
          data[i].value / allValue * Math.PI * 2
        )
        // 绘制提示文字
        .fillRect(20, i * 30 + 20, 30, 16)
        .config("fillStyle", "#000")
        .fillText(data[i].name, 60, i * 30 + 28);

      preDeg += data[i].value / allValue * Math.PI * 2;
    }
  }
};
</script>
