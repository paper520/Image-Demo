<template>
  <ui-demos url='Radar/basic'>
    各国人均寿命与GDP关系演变
  </ui-demos>
</template>
<script>
import uiDemos from "../../components/ui-demos.vue";
import $$ from "image2d";
import data from "../../datas/life-expectancy.json.js";
export default {
  components: {
    uiDemos
  },
  mounted() {
    let layer = $$("<canvas>非常抱歉，您的浏览器不支持canvas!</canvas>")
      // 设置画布大小
      .attr({
        width: 600,
        height: 600
      })
      .css("background-color", "rgb(64, 74, 89)")
      // 画布添加到页面
      .appendTo("#demo")
      // 获取图层
      .layer();

    let painter = layer
      .painter("bg")
      .config("strokeStyle", "white")
      .config("fillStyle", "white")

      // 绘制刻度尺
      .beginPath()
      .moveTo(50, 50)
      .lineTo(50, 550)
      .lineTo(550, 550)
      .stroke()

      // 寿命文字
      .config("textAlign", "center")
      .fillText("平均寿命", 50, 25)
      .config({
        textAlign: "right",
        "font-size": 10
      });
    [100, 80, 60, 40, 20, 0].forEach((value, index) => {
      painter
        .fillText(value + " 岁", 40, 50 + 100 * index)
        .fillRect(45, 49 + 100 * index, 5, 1);
    });

    let getX = $$.cardinal()
      .setT(-5)
      .setP([[300, 50], [1000, 120], [100000, 550]]);

    let getY = year => 550 - 5 * year;

    let sizeFunction = x => {
      let y = Math.sqrt(x / 5e8) + 0.1;
      return y * 80;
    };

    // 人均收入
    painter
      .config({
        textAlign: "center",
        "font-size": 16
      })
      .fillText("人均收入", 300, 575)
      .config("font-size", 10);
    [300, 1000, 10000, 100000].forEach(value => {
      painter
        .fillText(value + " $", getX(value), 565)
        .fillRect(getX(value) - 1, 550, 1, 5);
    });

    let colors = [
      "rgba(199, 207, 179, 0.85)",
      "rgba(158, 178, 161, 0.8)",
      "rgba(198, 163, 143, 0.7)",
      "rgba(208, 132, 108, 0.78)",
      "rgb(134, 167, 171,0.7)",
      "rgba(190, 200, 199, 0.86)",
      "rgba(60, 235, 219, 0.86)",
      "rgba(92, 225, 98, 0.85)",
      "rgba(96, 125, 139, 0.78)",
      "rgba(241, 239, 237, 0.7)",
      "rgba(150, 100, 101, 0.7)",
      "rgba(121, 85, 72, 0.76)",
      "rgba(162, 235, 77, 0.76)",
      "rgba(71, 220, 239, 0.76)",
      "rgba(63, 81, 181, 0.75)",
      "rgba(214, 102, 233, 0.74)",
      "rgba(60, 221, 229, 0.73)",
      "rgba(221, 111, 74, 0.85)"
    ];

    painter = layer.painter("animation").config({
      "font-size": 100,
      strokeStyle: "white"
    });
    let doIt = function(index, toIndex) {
      $$.animation(
        deep => {
          painter
            .clearRect()

            // 绘制年份
            .strokeText(data.timeline[toIndex], 300, 450);

          let indedSeries = data.series[index],
            toIndexSeries = data.series[toIndex];
          for (let i = 0; i < indedSeries.length; i++) {
            painter
              .config("fillStyle", colors[i])
              .fillCircle(
                getX(indedSeries[i][0]) +
                  (getX(toIndexSeries[i][0]) - getX(indedSeries[i][0])) * deep,
                getY(indedSeries[i][1]) +
                  (getY(toIndexSeries[i][1]) - getY(indedSeries[i][1])) * deep,
                sizeFunction(indedSeries[i][2]) +
                  (sizeFunction(toIndexSeries[i][2]) -
                    sizeFunction(indedSeries[i][2])) *
                    deep *
                    0.25
              );
          }

          layer.update();
        },
        700,
        () => {
          setTimeout(() => {
            if (toIndex == 80) {
              doIt(80, 0);
            } else {
              doIt(toIndex, toIndex + 1);
            }
          }, 100);
        }
      );
    };
    doIt(0, 1);

    layer.update();
  }
};
</script>
