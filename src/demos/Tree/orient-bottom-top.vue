<template>
    <div id='Tree-basic'>
        <h2>
            From Bottom to Top Tree
            <a href="https://github.com/yelloxing/Image-Demo/blob/master/src/demos/Tree/orient-bottom-top.vue">查看代码</a>
        </h2>
    </div>
</template>
<style scoped>
div {
  text-align: center;
  overflow: auto;
  height: calc(100vh - 50px);
}
div > h2 {
  line-height: 2em;
  padding-bottom: 30px;
}
div>h2>a{
  color:rgb(255, 255, 255);
  background-color: rgb(13, 230, 238);
  padding:5px;
  font-size: 16px;
}
</style>

<script>
import program from "../../datas/simple.program.json.js";
import $$ from "image2d";
export default {
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
      .appendTo("#Tree-basic")
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
        type: "BT",
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
                pitem.left,
                pitem.top - 50,

                // 第二个控制点
                item.left,
                item.top + 50,

                // 终点
                item.left,
                item.top + 3
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
            .fillText(item.id, item.left, item.top - 5, -Math.PI / 2);
        }
      });

    // 启动布局
    layout(program.data);
  }
};
</script>
