<template>
  <ui-demos url='Sunburst/monochrome'>
    Monochrome Sunburst
  </ui-demos>
</template>
<script>
import uiDemos from "../../components/ui-demos.vue";
import $$ from "image2d";
import data from "../../datas/sunburst.json.js";
export default {
  components: {
    uiDemos
  },
  mounted() {
    /**
     * 温馨提示：这个例子是用例测试是否有必要提供旭日图布局
     * --------------------------------------------------
     * 本例子子占比的计算没有考虑父亲，只是考虑了孩子之间本身
     */

    // 数据预处理，添加index
    let addIndex = (index, _data) => {
      for (let i = 0; i < _data.length; i++) {
        _data[i].index = index + 1;
        if (_data[i].children && _data[i].children.length > 0) {
          addIndex(index + 1, _data[i].children);
        }
      }
    };
    addIndex(0, data);

    let painter = $$("<canvas>非常抱歉，您的浏览器不支持canvas!</canvas>")
      // 设置画布大小
      .attr({
        width: 600,
        height: 600
      })
      // 画布添加到页面
      .appendTo("#demo")
      // 获取画笔
      .painter()
      .config({
        strokeStyle: "white",
        lineWidth: "5"
      });

    let getValue = temp => {
      if (temp.value) return temp.value;
      let value = 0;
      for (let i = 0; i < temp.children.length; i++) {
        value += getValue(temp.children[i]);
      }
      return value;
    };

    let deep = 0;

    let pieLayout = $$.pieLayout({
      value: getValue
    }).drawer(data => {
      for (let i = 0; i < data.length; i++) {
        painter
          .config("fillStyle", data[i].data.itemStyle)
          .fillArc(
            300,
            300,
            data[i].data.index * 50,
            data[i].data.index * 50 + 50 * deep,
            data[i].beginDeg,
            data[i].deg
          )
          .strokeArc(
            300,
            300,
            data[i].data.index * 50,
            data[i].data.index * 50 + 50 * deep,
            data[i].beginDeg,
            data[i].deg
          );
      }

      // 绘制孩子
      for (let i = 0; i < data.length; i++) {
        if (data[i].data.children && data[i].data.children.length > 0) {
          drawer(data[i].data.children, data[i].beginDeg, data[i].deg);
        }
      }
    });

    let drawer = (datas, begDeg, deg) => {
      pieLayout.config({
        "begin-deg": begDeg,
        deg
      })(datas);
    };

    $$.animation(_deep => {
      painter.clearRect();
      deep = _deep;
      drawer(data, -Math.PI / 2, Math.PI * 2);
    }, 700);
  }
};
</script>
