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

    let colors = ["#b34038", "#334553", "#6f9fa7", "#c9856b", "#9cc5b0"];

    $$.pieLayout({
      value: data => data.value
    }).drawer(datas => {
      $$.animation(
        deep => {
          for (let i = 0; i < datas.length; i++) {
            painter
              .config("fillStyle", colors[i])
              // 绘制饼
              .fillArc(
                width / 2,
                height / 2,
                height / 8 * (2.5 - deep / 2),
                height / 8 * (2.5 + deep / 2),
                datas[i].beginDeg,
                datas[i].deg*deep
              );
          }
        },
        700,
        () => {
          for (let i = 0; i < datas.length; i++) {
            painter
              // 绘制提示文字
              .config("fillStyle", colors[i])
              .fillRect(20, i * 30 + 20, 30, 16)
              .config("fillStyle", "#000")
              .fillText(datas[i].data.name, 60, i * 30 + 28);
          }
        }
      );
    })(data);
  }
};
</script>
