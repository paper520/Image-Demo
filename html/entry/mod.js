ctrlapp.register.controller('entryController', ['$scope', function ($scope) {

  $scope.initMethod = function () {

    // 格式化代码
    prettyPrint();

    sessionStorage.setItem('back-router','entry');

  };

  $scope.openDoc = function () {
    window.location.href = "https://yelloxing.github.io/image2D/#/guide"
  };

}]);
