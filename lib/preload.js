/**
 * 公共资源路径加载配置
 */
(function () {
  var cssFiles = [
    'style/normalize-0.1.0.css',//基本样式
  ];
  var jsFiles = [

    /* 基本文件 */
    'lib/min/jquery-3.1.1.js', // jquery
    'lib/min/angular-1.2.28.js', // angular.js
    'lib/min/image2d-1.4.8.js', // image2D
    'lib/min/angular-ui-router-0.2.15.js', // 路由

    /* 配置文件 */
    'lib/config.js', // 项目配置文件

  ];

  for (var i = 0; i < cssFiles.length; i++) {
    loadCss(cssFiles[i]);
  }
  for (var i = 0; i < jsFiles.length; i++) {
    loadJs(jsFiles[i]);
  }

  function loadJs(path) {
    var scriptTag = document.createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.src = path;
    document.write(outerHTML(scriptTag));
  }

  function outerHTML(node) {
    return (
      node.outerHTML ||
      (function (n) {
        var div = document.createElement('div'),
          h;
        div.appendChild(n);
        h = div.innerHTML;
        div = null;
        return h;
      })(node)
    );
  }

  function loadCss(path) {
    var cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.type = 'text/css';
    cssLink.href = path;
    document.getElementsByTagName('head')[0].appendChild(cssLink);
  }
})();