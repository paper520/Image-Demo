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
      }]
    }, {
      path: '/RadialTree',
      component: resolve => require(['./demos/RadialTree/index.vue'], resolve)
    }, {
      path: '/*',
      redirect: 'menus'
    }]
});

export default router;
