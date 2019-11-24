ctrlapp.register.controller('menuController', ['$scope', '$state', function ($scope, $state) {

  $scope.initMethod = function () {

    // 格式化代码
    prettyPrint();

  };

  $scope.openDoc = function () {
    window.location.href = "https://yelloxing.github.io/image2D/#/guide"
  };

}]);
