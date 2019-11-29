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

}]);