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
      component: menus
    }, {
      path: '/RadialTree',
      component: resolve => require(['./demos/RadialTree/index.vue'], resolve)
    }, {
      path: '/*',
      redirect: 'menus'
    }]
});

export default router;
