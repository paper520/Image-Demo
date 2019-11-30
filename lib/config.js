/**
 * --------------------------------------
 * 模块定义
 * --------------------------------------
 */

// 自定义扩展模块
var libapp = angular.module("ui.libraries", []);

// 控制器模块
var ctrlapp = angular.module("ui.ctrl", []);

//主模块定义（同时引入需要的模块）
var startapp = angular.module("startApp", ['ui.router', 'ui.libraries', 'ui.ctrl']);

/**
 * --------------------------------------
 * 模块启动
 * --------------------------------------
 */
//主模块
startapp.config(['$stateProvider', '$urlRouterProvider', '$controllerProvider', "$compileProvider", "$filterProvider", "$provide", function ($stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
  "use strict";

  //定义需要使用的方法
  ctrlapp.register = {
    controller: $controllerProvider.register,
    directive: $compileProvider.directive,
    filter: $filterProvider.register,
    factory: $provide.factory,
    service: $provide.service
  };

  //异步加载控制器文件
  startapp.asyncjs = function (js) {
    return ['$q', function ($q) {

      var delay = $q.defer(),
        load = function () {
          window.$.getScript(js, function () {
            delay.resolve();
          });
        };
      load();
      return delay.promise;
    }];
  };

  /**
   * --------------------------------------
   * 定义路由
   * --------------------------------------
   */

  var addToken = function (url) {
    return url + "?_=" + new Date().valueOf();
  };

  $stateProvider

    /*
    ===================
    例子页面
    ===================
    */

    // 1
    .state("money-schedule", {
      url: "/money-schedule",
      templateUrl: addToken("html/examples/money-schedule/mod.html"),
      resolve: {
        delay: startapp.asyncjs('html/examples/money-schedule/mod.js')
      },
      controller: "moneyScheduleController"
    })
    // 2
    .state("tree-radial", {
      url: "/tree-radial",
      templateUrl: addToken("html/examples/tree-radial/mod.html"),
      resolve: {
        delay: startapp.asyncjs('html/examples/tree-radial/mod.js')
      },
      controller: "treeRadialController"
    })
    // 3
    .state("multiple-x-axis", {
      url: "/multiple-x-axis",
      templateUrl: addToken("html/examples/multiple-x-axis/mod.html"),
      resolve: {
        delay: startapp.asyncjs('html/examples/multiple-x-axis/mod.js')
      },
      controller: "multipleXAxisController"
    })

    /*
    ===================
    登录页面
    ===================
    */

    .state("menu", {
      url: "/menu",
      templateUrl: addToken("html/menu/mod.html"),
      resolve: {
        delay: startapp.asyncjs('html/menu/mod.js')
      },
      controller: "menuController"
    });

  $urlRouterProvider.otherwise("/menu");

}]).run(['$rootScope', '$state', function ($rootScope, $state) {
  "use strict";

  // 路由跳转
  $rootScope.goto = function (state) {
    $state.go(state);
  };

  // 打开例子在线页面
  $rootScope.loadExample = function (demo) {
    window.location.href = "https://github.com/yelloxing/Image-Demo/blob/master/html/examples/" + demo + "/mod.js";
  };

}]);