ctrlapp.register.controller('skyboxController', ['$remote', '$scope', function ($remote, $scope) {

  $scope.initMethod = function () {
    // 创建3D对象并配置好画布和着色器
    var image3d = new image3D(document.getElementById('palette'), {

      // 传递着色器
      "vertex-shader": document.getElementById("vs").innerText,
      "fragment-shader": document.getElementById("fs").innerText,

      // 开启深度计算
      "depth": true

    });

    // 数据
    var data = new Float32Array([
      0.5, 0.5, 0.5,
      0.5, -0.5, 0.5,
      -0.5, -0.5, 0.5,
      -0.5, 0.5, 0.5,
      0.5, 0.5, -0.5,
      0.5, -0.5, -0.5,
      -0.5, -0.5, -0.5,
      -0.5, 0.5, -0.5,
      0.0, 0.0, 0.8,
      0.0, 0.0, -0.8,
      0.8, 0.0, 0.0,
      -0.8, 0.0, 0.0,
      0.0, 0.8, 0.0,
      0.0, -0.8, 0.0
    ]);

    // 顶点索引数组
    var indexes = new Uint8Array([

      0, 1, 8, 1, 2, 8, 2, 3, 8, 0, 3, 8,
      4, 5, 9, 5, 6, 9, 6, 7, 9, 4, 7, 9,
      0, 1, 10, 1, 5, 10, 4, 5, 10, 0, 4, 10,
      2, 6, 11, 6, 7, 11, 3, 7, 11, 2, 3, 11,
      0, 3, 12, 3, 7, 12, 4, 7, 12, 4, 0, 12,
      1, 2, 13, 1, 5, 13, 5, 6, 13, 2, 6, 13

    ]);

    image3d.Buffer().write(data).use('a_position', 3, 3, 0);
    image3d.Buffer(true).write(indexes);

    // 创建纹理对象
    var texture = image3d.TextureCube(500, 500);

    var image1 = new Image();
    image1.onload = function () {
      var image2 = new Image();
      image2.onload = function () {
        var image3 = new Image();
        image3.onload = function () {
          var image4 = new Image();
          image4.onload = function () {
            var image5 = new Image();
            image5.onload = function () {
              var image6 = new Image();
              image6.onload = function () {

                texture.write(image1, image2, image3, image4, image5, image6);
                image3d.setUniformInt('u_texture', texture);

                var camera = image3d.Camera();
                var painter = image3d.Painter();

                setInterval(function () {

                  camera.rotateBody(Math.PI / 30, 1, -1, 0.2, -1, 1, -0.2);
                  image3d.setUniformMatrix("u_matrix", camera.value());

                  painter.elemTriangle(0, 72);

                }, 50);

              };
              image6.src = "image/skybox-front.jpg";
            };
            image5.src = "image/skybox-back.jpg";
          };
          image4.src = "image/skybox-bottom.jpg";
        };
        image3.src = "image/skybox-top.jpg";
      };
      image2.src = "image/skybox-left.jpg";
    };
    image1.src = "image/skybox-right.jpg";

  };

}]);