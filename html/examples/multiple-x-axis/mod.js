ctrlapp.register.controller('multipleXAxisController', ['$remote', '$scope', function ($remote, $scope) {

    $scope.initMethod = function () {
        $remote.get('./data/moisture.json', $scope.doDraw);
    };

    $scope.doDraw = function (data) {

        // 设置画布大小并获取画笔
        var painter = $$('#palette').attr({
            "width": "865",
            "height": "660"
        }).painter();

        painter.fillText('温馨提示：开发中！',0,30);

    };

}]);