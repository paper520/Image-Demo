import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 引入菜单
import menus from './App.vue';

// 配置路由
const router = new VueRouter({
  routes: [
    {
      path: '/menus',
      component: menus,
      children: [{
        path: 'line',
        component: resolve => require(['./navs/line.vue'], resolve)
      }, {
        path: 'bar',
        component: resolve => require(['./navs/bar.vue'], resolve)
      }, {
        path: 'pie',
        component: resolve => require(['./navs/pie.vue'], resolve)
      }, {
        path: 'scatter',
        component: resolve => require(['./navs/scatter.vue'], resolve)
      }, {
        path: 'map',
        component: resolve => require(['./navs/map.vue'], resolve)
      }, {
        path: 'candlestick',
        component: resolve => require(['./navs/candlestick.vue'], resolve)
      }, {
        path: 'radar',
        component: resolve => require(['./navs/radar.vue'], resolve)
      }, {
        path: 'tree',
        component: resolve => require(['./navs/tree.vue'], resolve)
      }, {
        path: 'sunburst',
        component: resolve => require(['./navs/sunburst.vue'], resolve)
      }, {
        path: 'gauge',
        component: resolve => require(['./navs/gauge.vue'], resolve)
      }, {
        path: 'GL',
        component: resolve => require(['./navs/GL.vue'], resolve)
      }]
    }, {
      path: '/tree-basic',
      component: resolve => require(['./demos/Tree/basic.vue'], resolve)
    }, {
      path: '/tree-orient-bottom-top',
      component: resolve => require(['./demos/Tree/orient-bottom-top.vue'], resolve)
    }, {
      path: '/tree-radial',
      component: resolve => require(['./demos/Tree/radial.vue'], resolve)
    }, {
      path: '/line-simple',
      component: resolve => require(['./demos/Line/simple.vue'], resolve)
    }, {
      path: '/line-smooth',
      component: resolve => require(['./demos/Line/smooth.vue'], resolve)
    }, {
      path: '/bar-simple',
      component: resolve => require(['./demos/Bar/simple.vue'], resolve)
    }, {
      path: '/bar-gradient',
      component: resolve => require(['./demos/Bar/gradient.vue'], resolve)
    }, {
      path: '/bar-polar-real-estate',
      component: resolve => require(['./demos/Bar/polar-real-estate.vue'], resolve)
    }, {
      path: '/pie-doughnut',
      component: resolve => require(['./demos/Pie/doughnut.vue'], resolve)
    }, {
      path: '/candlestick-simple',
      component: resolve => require(['./demos/candlestick/simple.vue'], resolve)
    }, {
      path: '/radar-basic',
      component: resolve => require(['./demos/radar/basic.vue'], resolve)
    }, {
      path: '/sunburst-monochrome',
      component: resolve => require(['./demos/sunburst/monochrome.vue'], resolve)
    }, {
      path: '/gauge-simple',
      component: resolve => require(['./demos/gauge/simple.vue'], resolve)
    }, {
      path: '/*',
      redirect: 'menus'
    }]
});

export default router;
