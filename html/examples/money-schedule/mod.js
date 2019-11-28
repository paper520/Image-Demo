ctrlapp.register.controller('moneyScheduleController', ['$remote', '$scope', function ($remote, $scope) {

    $scope.initMethod = function () {

        // 进度条
        var rate = 0.7;

        // 设置画布大小并获取画笔
        var painter = $$('#palette').attr({
            "width": 500,
            "height": 500
        }).painter()

            // 绘制三个背景圆
            .config('fillStyle', '#fff7e9').bind("<circle>").appendTo().fillCircle(250, 250, 250)
            .config('fillStyle', '#ffe1b1').bind("<circle>").appendTo().fillCircle(250, 250, 220)
            .config('fillStyle', '#ffffff').bind("<circle>").appendTo().fillCircle(250, 250, 180)

            // 绘制三行文字
            .config({
                'font-size': 40,
                'fillStyle': '#272727',
                'textAlign': 'center'
            })
            .bind("<text>").appendTo().fillText('￥100,000', 250, 210)
            .config({
                'font-size': 30,
                'fillStyle': '#595757'
            })
            .bind("<text>").appendTo().fillText('可借', 250, 160)
            .config({
                'font-size': 24,
                'fillStyle': '#a4a1a1'
            })
            .bind("<text>").appendTo().fillText('总额度150,000', 250, 260)

            // 配置进度条
            .config({
                'fillStyle': '#ff7f08',
                'arc-start-cap': 'round',
                'arc-end-cap': 'round'
            }).bind("<path>").appendTo();

        // 启动动画并绘制进度条
        $$.animation(function (deep) {

            // 根据当前进度deep更新弧形进度
            painter.fillArc(250, 250, 180, 200, 0, Math.PI * 2 * rate * deep);

        }, 700, function () {

            // 初始化显示完毕以后，启动水波动画
            $scope.renderWave(rate, painter);
        });

    };

    $scope.renderWave = function (deep, painter) {
        console.log('renderWave');
    };


}]);