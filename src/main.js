import Vue from 'vue';
import App from './App.vue';

// 引入基础样式
import "@yelloxing/normalize.css";

// 引入路由文件
import router from './router';

window.vm = new Vue({

  // 挂载结点
  el: document.getElementById('root'),

  // 挂载路由配置
  router,

  // 启动组件
  render: createElement => createElement('router-view')
});