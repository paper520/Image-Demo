<template>
  <ui-demos url="Bar/simple">Bar Simple</ui-demos>
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

    let weeks = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let data = [120, 200, 150, 80, 70, 110, 130];
    let ruler = [200, 150, 100, 50, 0];
    let maxValue = 200;

    painter
      // 绘制X轴
      .beginPath()
      .moveTo(50, height - 50)
      .lineTo(width, height - 50)
      .stroke()
      // 绘制Y轴
      .beginPath()
      .moveTo(50, 10)
      .lineTo(50, height - 50)
      .stroke();

    // 绘制X刻度
    for (let i = 0; i < weeks.length; i++) {
      painter
        // 文字
        .fillText(weeks[i], (width - 50) / 14 * (2 * i + 1) + 50, height - 30)
        // 刻度
        .fillRect((width - 50) / 7 * (i + 1) + 50, height - 50, 2, 10);
    }

    // 绘制Y刻度
    painter.config("textAlign", "right");
    for (let i = 0; i < ruler.length; i++) {
      painter
        // 文字
        .fillText(ruler[i], 30, 10 + (height - 60) / 4 * i)
        // 刻度
        .fillRect(40, 9 + (height - 60) / 4 * i, 10, 2);
    }

    // 绘制值
    painter.config("fillStyle", "#b34038");
    for (let i = 0; i < data.length; i++) {
      painter.fillRect(
        (width - 50) / 7 * i + 50 + 10,
        height - 50,
        (width - 50) / 7 - 20,
        -data[i] / maxValue * (height - 60)
      );
    }
  }
};
</script>
