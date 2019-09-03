<template>
  <ui-demos url="Line/smooth">Smoothed Line Chart</ui-demos>
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

    let data = {
      date: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      line: [820, 932, 901, 934, 1290, 1330, 1320],
      ruler: [0, 300, 600, 900, 1200, 1500]
    };

    // 画坐标轴
    painter
      // X轴
      .moveTo(50, height - 50)
      .lineTo(width - 10, height - 50)
      .bind("<path>")
      .appendTo()
      .stroke()
      // Y轴
      .beginPath()
      .moveTo(50, 10)
      .lineTo(50, height - 50)
      .bind("<path>")
      .appendTo()
      .stroke();

    // X轴承刻度
    painter.config({
      "font-size": 14,
      fillStyle: "gray",
      textAlign: "center",
      textBaseline: "top"
    });
    for (let i = 0; i < 7; i++) {
      painter
        .bind("<text>")
        .appendTo()
        // 文字
        .fillText(
          data.date[i],
          50 + ((2 * i + 1) * (width - 60)) / 14,
          height - 40
        )
        // 刻度
        .beginPath()
        .moveTo(50 + ((2 * i + 2) * (width - 60)) / 14, height - 50)
        .lineTo(50 + ((2 * i + 2) * (width - 60)) / 14, height - 40)
        .bind("<path>")
        .appendTo()
        .stroke();
    }
    // Y轴承刻度
    let dis = (height - 60) / (data.ruler.length - 1);
    painter.config({
      textAlign: "right",
      textBaseline: "middle"
    });
    for (let i = 0; i < data.ruler.length; i++) {
      painter
        .bind("<text>")
        .appendTo()
        // 文字
        .fillText(data.ruler[i], 30, height - 50 - i * dis)
        // 刻度
        .beginPath()
        .moveTo(40, height - 50 - i * dis)
        .lineTo(50, height - 50 - i * dis)
        .bind("<path>")
        .appendTo()
        .stroke();
    }

    // 横着的几条直线
    painter.config("strokeStyle", "#aaa");
    for (let i = 1; i < data.ruler.length; i++) {
      painter
        .beginPath()
        .moveTo(50, height - 50 - i * dis)
        .lineTo(width - 10, height - 50 - i * dis)
        .bind("<path>")
        .appendTo()
        .stroke();
    }

    // 折线
    painter.config("strokeStyle", "red").beginPath();
    dis = (height - 60) / data.ruler.pop(); // 计算value=1对应的距离

    // 计算点
    let tempP = [];
    for (let i = 0; i < data.line.length; i++) {
      tempP[i] = [
        50 + ((2 * i + 1) * (width - 60)) / 14,
        height - 50 - data.line[i] * dis
      ];
    }

    // 插值
    let fx = $$.cardinal().setP(tempP);

    // 启动动画
    painter.beginPath().lineTo(tempP[0][0], tempP[0][1]);
    $$.animation(
      deep => {
        let x = tempP[0][0] + (tempP[6][0] - tempP[0][0]) * deep;
        painter.lineTo(x, fx(x > tempP[6][0] ? tempP[6][0] : x)).stroke();
      },
      700,
      () => {
        // 圆球
        painter.config("fillStyle", "white");
        for (let i = 0; i < data.line.length; i++) {
          painter
            .bind("<circle>")
            .appendTo()
            //   实心
            .fillCircle(tempP[i][0], tempP[i][1], 2)
            .bind("<circle>")
            .appendTo()
            //   空心
            .strokeCircle(tempP[i][0], tempP[i][1], 2);
        }
      }
    );
  }
};
</script>
