ctrlapp.register.controller('moneyScheduleController', ['$remote', '$scope', function ($remote, $scope) {

    $scope.initMethod = function () {

        // 进度条
        var rate = 0.73;

        // 设置画布大小并获取画笔
        var painter = $$('#palette').attr({
                "width": 500,
                "height": 500
            }).painter()

            // 绘制三个背景圆
            .config('fillStyle', '#fff7e9').bind("<circle>").appendTo().fillCircle(250, 250, 250)
            .config('fillStyle', '#ffe1b1').bind("<circle>").appendTo().fillCircle(250, 250, 220)
            .config('fillStyle', '#ffffff').bind("<circle>").appendTo().fillCircle(250, 250, 180);

        // 准备好用来绘制动画wave的二个标签和进度弧
        var innerWave = $$('<path>').appendTo('#palette');
        var outerWave = $$('<path>').appendTo('#palette');
        var arcNode = $$('<path>').appendTo('#palette');

        // 绘制三行文字
        painter.config({
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
                'arc-start-cap': 'round',
                'arc-end-cap': 'round'
            });

        // 启动动画并绘制进度条
        $$.animation(function (deep) {

            // 根据当前进度deep更新弧形进度
            painter.bind(arcNode).config('fillStyle', '#ff7f08').fillArc(250, 250, 180, 200, -Math.PI / 2, -Math.PI * 2 * (1 - rate) * deep);

            // 初始化wave
            $scope.fullWave(painter, rate * deep, deep, innerWave, outerWave);

        }, 2000, function () {

            // 初始化显示完毕以后，启动wave动画
            $scope.renderWave(rate, painter, innerWave, outerWave);
        });

    };

    $scope.renderWave = function (rate, painter, innerWave, outerWave) {
        $$.animation(function (deep) {

            $scope.fullWave(painter, rate, deep, innerWave, outerWave);

        }, 2000, function () {
            $scope.renderWave(rate, painter, innerWave, outerWave);
        });
    };

    $scope.fullWave = function (painter, rate, deep, innerWave, outerWave) {
        var help = 1;

        if (deep > 0.5) {
            deep = deep - 0.5;
            help = -1;
        }
        deep *= 2;

        // 绘制内弧
        $scope.drawerWave(painter.bind(innerWave).config('fillStyle', '#ff7f08'), rate, deep, help);

        // 绘制外弧
        $scope.drawerWave(painter.bind(outerWave).config('fillStyle', '#fead2e'), rate, deep, -help);
    };

    $scope.drawerWave = function (painter, rate, deep, help) {

        var beginPoint = $$.rotate(250, 250, (0.5 - rate) * Math.PI, 410, 250);
        var endPoint = $$.rotate(250, 250, (1.5 - rate) * Math.PI, 410, 250);

        painter
            .beginPath()
            .moveTo(beginPoint[0], beginPoint[1])
            .arc(250, 250, 160, (0.5 - rate) * Math.PI, 2 * rate * Math.PI)
            .bezierCurveTo(

                // rate > 0.5 ? 1 - rate : rate是用来控制波动大小的，为了好看，0-0.5和0.5-1取对称
                endPoint[0] + (beginPoint[0] - endPoint[0]) * 0.5 * deep, beginPoint[1] + 200 * deep * help * (rate > 0.5 ? 1 - rate : rate),
                endPoint[0] + (beginPoint[0] - endPoint[0]) * 0.5 * (1 + deep), beginPoint[1] - 200 * (1 - deep) * help * (rate > 0.5 ? 1 - rate : rate),

                // 上面是第一和第二个看着点，最后这个是终点，加上画笔开始位置作为起点
                beginPoint[0], beginPoint[1]
            )
            .fill();

    };

}]);