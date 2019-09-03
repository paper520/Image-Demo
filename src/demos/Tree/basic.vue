<template>
  <ui-demos url='Tree/basic'>
    From Left to Right Tree
  </ui-demos>
</template>
<script>
import uiDemos from "../../components/ui-demos.vue";
import program from "../../datas/simple.program.json.js";
import $$ from "image2d";
export default {
  components: {
    uiDemos
  },
  mounted() {
    let width = 700,
      height = 500;

    let painter = $$(
      "<svg>" + '<g class="node"></g>' + '<g class="text"></g>' + "</svg>"
    )
      // 设置画布大小
      .attr({
        width,
        height
      })
      // 画布添加到页面
      .appendTo("#demo")
      // 获取画笔
      .painter();

    // 树图使用布局计算结点坐标
    let layout = $$.treeLayout({
      // 数据格式配置（必须的，基本配置）
      root: function(initTree) {
        return initTree;
      },
      id: function(treedata) {
        return treedata.name;
      },
      child: function(parentTree, initTree) {
        return parentTree.children;
      }
    })
      .config({
        // 配置具体的类型（可以不配置）
        type: "LR",
        width,
        height
      })

      // 设置绘图方法
      .drawer(function(tree) {
        let key, item, pitem;
        for (key in tree.node) {
          item = tree.node[key];

          // 画结点
          painter
            .config({
              fillStyle: "#fff",
              strokeStyle: "red"
            })

            // 轮廓圆球
            .bind("<circle>")
            .appendTo("g.node")
            .strokeCircle(item.left, item.top, 3);

          if (
            !item.data.value &&
            (!item.children || item.children.length <= 0)
          ) {
            painter.config("fillStyle", "gray");
          }

          // 实心圆球
          painter
            .bind("<circle>")
            .appendTo("g.node")
            .fillCircle(item.left, item.top, 3);

          // 如果不是根结点
          if (item.id !== tree.root) {
            pitem = tree.node[item.pid];

            // 画连线
            painter
              .config("strokeStyle", "#aaa")
              .beginPath()
              .moveTo(pitem.left + 3, pitem.top);

            painter
              .bind("<path>")
              .appendTo("g.node")
              .bezierCurveTo(
                // 第一个控制点
                pitem.left + 50,
                pitem.top,

                // 第二个控制点
                item.left - 50,
                item.top,

                // 终点
                item.left - 3,
                item.top
              );

            painter.stroke();
          }

          // 结点描述文字
          painter
            .config({
              fillStyle: "#555",
              "font-size": "9"
            })
            .bind("<text>")
            .appendTo("g.text")
            .fillText(item.id, item.left + 5, item.top);
        }
      });

    // 启动布局
    layout(program.data);
  }
};
</script>
