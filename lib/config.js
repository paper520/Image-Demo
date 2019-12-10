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
    // 4
    .state("From-Left-to-Right-Tree", {
      url: "/From-Left-to-Right-Tree",
      templateUrl: addToken("html/examples/From-Left-to-Right-Tree/mod.html"),
      resolve: {
        delay: startapp.asyncjs('html/examples/From-Left-to-Right-Tree/mod.js')
      },
      controller: "fromLeftToRightTreeController"
    })
    // 5
    .state("bar-gradient", {
      url: "/bar-gradient",
      templateUrl: addToken("html/examples/bar-gradient/mod.html"),
      resolve: {
        delay: startapp.asyncjs('html/examples/bar-gradient/mod.js')
      },
      controller: "barGradientController"
    })

    /*
    ===================
    入口页面
    ===================
    */

    .state("entry", {
      url: "/entry",
      templateUrl: addToken("html/entry/mod.html"),
      resolve: {
        delay: startapp.asyncjs('html/entry/mod.js')
      },
      controller: "entryController"
    })

    /*
    ===================
    菜单页面
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

  $urlRouterProvider.otherwise("/entry");

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

  // 提示
  $rootScope.alert = function (msg) {
    alert(msg);
  };

  // 返回
  $rootScope.goback = function () {
    var routerName = sessionStorage.getItem('back-router') || "entry";
    $state.go(routerName);
  };

}]);