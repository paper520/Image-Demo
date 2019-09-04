<template>
  <ui-demos url="candlestick/simple">Candlestick Simple</ui-demos>
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

    let dates = ["2017-10-24", "2017-10-25", "2017-10-26", "2017-10-27"];
    let data = [
      [20, 30, 10, 35],
      [40, 35, 30, 55],
      [33, 38, 33, 40],
      [40, 42, 32, 42]
    ];
    let ruler = [60, 50, 40, 30, 20, 10, 0];
    let maxValue = 60;

    painter
      // 绘制X轴
      .beginPath()
      .moveTo(50, height - 50)
      .lineTo(width, height - 50)
      .stroke()
      // 绘制Y轴
      .beginPath()
      .moveTo(50, 10)
      .lineTo(50, height - 40)
      .stroke();

    // 绘制X轴刻度
    painter.config({
      textAlign: "center",
      textBaseline: "top",
      "font-size": 12
    });
    for (let i = 0; i < dates.length; i++) {
      painter
        // 刻度
        .fillRect(
          50 + ((width - 50) / dates.length) * (i + 1) - 2,
          height - 50,
          2,
          10
        )
        // 文字
        .fillText(
          dates[i],
          50 + ((width - 50) / (dates.length * 2)) * (2 * i + 1),
          height - 40
        );
    }

    // 绘制Y轴刻度
    painter.config({
      textAlign: "right",
      textBaseline: "middle"
    });
    for (let i = 0; i < ruler.length; i++) {
      painter
        .config("fillStyle", "#000")
        // 刻度
        .fillRect(40, 9 + ((height - 60) / (ruler.length - 1)) * i, 10, 2)
        // 文字
        .fillText(ruler[i], 30, 9 + ((height - 60) / (ruler.length - 1)) * i);

      if (i < ruler.length - 1) {
        // 绘制灰色线条
        painter
          .config("fillStyle", "gray")
          .beginPath()
          .moveTo(50, 10 + ((height - 60) / (ruler.length - 1)) * i)
          .lineTo(width, 10 + ((height - 60) / (ruler.length - 1)) * i)
          .stroke();
      }
    }

    // 绘制K图
    for(let i=0;i<data.length;i++){
      painter
      // 设置颜色
      .config('strokeStyle',data[i][0]>data[i][1]?"rgb(49, 70, 86)":"rgb(194, 53, 49)")
      // 开票和收盘
      .config('lineWidth',(width-50)/data.length*0.5)
      .beginPath()
      .moveTo(50 + ((width - 50) / (dates.length * 2)) * (2 * i + 1),height-50-(height-60)/maxValue*data[i][0])
      .lineTo(50 + ((width - 50) / (dates.length * 2)) * (2 * i + 1),height-50-(height-60)/maxValue*data[i][1])
      .stroke()
      // 最低和最高
      .config('lineWidth',2)
      .beginPath()
      .moveTo(50 + ((width - 50) / (dates.length * 2)) * (2 * i + 1),height-50-(height-60)/maxValue*data[i][2])
      .lineTo(50 + ((width - 50) / (dates.length * 2)) * (2 * i + 1),height-50-(height-60)/maxValue*data[i][3])
      .stroke();
    }

  }
};
</script>