<template>
  <ui-demos url="Bar/gradient">渐变色</ui-demos>
</template>
<script>
import uiDemos from "../../components/ui-demos.vue";
import $$ from "image2d";
export default {
  components: {
    uiDemos
  },
  mounted() {
    let width = 700,
      height = 500;

    let painter = $$("<svg></svg>")
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
      220,
      182,
      191,
      234,
      290,
      330,
      310,
      123,
      442,
      321,
      90,
      149,
      210,
      122,
      133,
      334,
      198,
      123,
      125,
      220
    ];
    let maxVal = 500;

    painter.config({
      textAlign: "right",
      fillStyle: "gray",
      "font-size": 12
    });
    // 绘制刻度
    for (let i = 0; i <= 5; i++) {
      painter
        // 文字
        .bind("<text>")
        .appendTo()
        .fillText(i * 100, 30, height - 10 - (height - 20) / 5 * i)
        // 线条
        .bind("<path>")
        .appendTo()
        .beginPath()
        .moveTo(40, height - 10 - (height - 20) / 5 * i)
        .lineTo(width, height - 10 - (height - 20) / 5 * i)
        .stroke();
    }

    // 准备渐变色
    let gradientColor = painter
      .createLinearGradient(50, 0, 50, 100)
      .addColorStop(0, "#8bf")
      .addColorStop(0.3, "#83bff6")
      .addColorStop(0.7, "#188df0")
      .addColorStop(1, "#188df0")
      .value();

    // 绘制条形图(使用数据绑定快速绘制)
    let dis = (width - 60) / data.length;
    $$("g")
      .data(data)
      .enter("<g>")
      .appendTo("svg")
      .loop((data, index, target) => {
        painter

          // 先绘制背景灰色条纹
          .config("fillStyle", "rgba(231, 231, 231,90)")
          .bind("<rect>")
          .appendTo(target)
          .fillRect(50 + index * dis, 10, dis * 0.7, height - 20);
        // 值的条纹(初始化)
        let valDis = data / maxVal * (height - 20);
        painter
          .config("fillStyle", gradientColor)
          .bind("<rect>")
          .appendTo(target)
          .fillRect(50 + index * dis, height - 10, dis * 0.7, 0);

        $$.animation(deep => {
          // 值的条纹(动画修改)
          painter
            .bind($$("rect", target[0])[1])
            .fillRect(
              50 + index * dis,
              height - 10 - valDis * deep,
              dis * 0.7,
              valDis * deep
            );
        }, 1000);
      });
  }
};
</script>
