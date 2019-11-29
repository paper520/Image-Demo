ctrlapp.register.controller('multipleXAxisController', ['$remote', '$scope', function ($remote, $scope) {

    $scope.initMethod = function () {
        $remote.get('./data/moisture.json', $scope.doDraw);
    };

    $scope.doDraw = function (data) {

        // 设置画布大小并获取图层
        var layer = $$('#palette').attr({
            "width": "865",
            "height": "660"
        }).layer();

        // 获取绘制背景的画笔
        var bgPainter = layer.painter('background-image');

        // 绘制二条水平刻度尺
        $scope.rulerX(bgPainter, data[0].color, data[0].date, 80, -1);
        $scope.rulerX(bgPainter, data[1].color, data[1].date, 630, 1);

        // 绘制垂直刻度尺
        $scope.rulerY(bgPainter);

        // 绘制标题
        $scope.drawerTitle(bgPainter, 320, data[0].color, data[0].name);
        $scope.drawerTitle(bgPainter, 470, data[1].color, data[1].name);

        // 绘制背景灰线条
        var i, y;
        bgPainter.config('strokeStyle', 'gray');
        for (i = 0; i < 4; i++) {
            y = 520 - i * 110;
            bgPainter.beginPath().moveTo(30, y).lineTo(835, y).stroke();
        }

        // 绘制曲线
        $scope.lineData(layer, layer.painter('data'), data);

        // 背景绘制完毕，更新内容到画布
        layer.update();

    };

    $scope.rulerX = function (painter, color, texts, y, help) {

        painter

            // 设置刻度尺色调
            .config({
                'strokeStyle': color,
                'fillStyle': color,
                'textAlign': 'center',
                'font-size': 12
            })

            // 绘制刻度尺底线
            .beginPath().moveTo(30, y).lineTo(835, y).stroke();

        var i, x;
        for (i = 0; i < texts.length; i++) {

            x = (i + 0.25) * 70 + 30;

            painter

                // 绘制小刻度
                .beginPath().moveTo(x, y).lineTo(x, y + help * 10).stroke()

                // 绘制文字
                .fillText(texts[i], x, y + help * 20);

        }

    };

    $scope.rulerY = function (painter) {

        painter

            // 设置刻度尺色调
            .config({
                'strokeStyle': '#000',
                'fillStyle': '#000',
                'textAlign': 'right',
                'font-size': 12
            })

            // 绘制刻度尺底线
            .beginPath().moveTo(30, 80).lineTo(30, 630).stroke();

        var i, y;
        for (i = 0; i < 6; i++) {

            y = 630 - i * 110;

            painter

                // 绘制小刻度
                .beginPath().moveTo(25, y).lineTo(30, y).stroke()

                // 绘制文字
                .fillText(i * 50, 20, y);

        }

    };

    $scope.drawerTitle = function (painter, x, color, title) {

        painter.config({
                'strokeStyle': color,
                'fillStyle': '#fff',
                'textAlign': 'left',
                'font-size': 14
            })

            // 绘制文字前的小图标
            .beginPath().moveTo(x, 25).lineTo(x + 30, 25).stroke()
            .strokeCircle(x + 15, 25, 5).fillCircle(x + 15, 25, 5)

            // 绘制文字
            .config('fillStyle', '#000')
            .fillText(title, x + 35, 25);

    };

    $scope.lineData = function (layer, painter, data) {

        // 把数据变成页面上对应的坐标
        var toPoints = function (orgData) {
            var i, points = [];
            for (i = 0; i < orgData.length; i++) {
                points.push([
                    30 + (0.25 + i) * 70,
                    630 - orgData[i] * 2.2
                ]);
            }
            return points;
        };

        var points2015 = toPoints(data[0].data);
        var points2016 = toPoints(data[1].data);

        // 根据点获取二条回归直线
        var line2015 = $$.cardinal().setP(points2015);
        var line2016 = $$.cardinal().setP(points2016);

        $$.animation(function (deep) {

            // 擦干净数据图层
            painter.clearRect();

            var begX = 47.5,
                endX = (11 * deep + 0.25) * 70 + 30;

            // 绘制2015和2016
            $scope.lineImage(painter.config('strokeStyle', data[0].color), begX, endX, line2015);
            $scope.lineImage(painter.config('strokeStyle', data[1].color), begX, endX, line2016);

            // 更新到画布
            layer.update();

        }, 2000, function () {

            // 绘制白点

            // 启动悬浮交互
            $scope.hoverInfo(layer, layer.painter('hover'));

        });

    };

    $scope.lineImage = function (painter, begX, endX, lineFun) {

        var i;
        painter.beginPath()
        for (i = begX; i < endX; i += 1) {
            painter.lineTo(i, lineFun(i));
        }
        painter.stroke();

    };

    $scope.hoverInfo = function (layer, painter) {

    };

}]);