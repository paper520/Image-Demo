const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
  entry: ['./src/main.js'],
  output: {
    path: __dirname,
    filename: 'dist/main.js'
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js'
    }
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: ['vue-loader']
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }, {
      test: /\.css$/,
      use: ['vue-style-loader', 'css-loader']

    }, {
      test: /\.(png|jpg|jpeg|gif|bmp)$/,
      use: [{
        loader: "url-loader",
        options: {
          name: "dist/[path][name].[ext]",
          context: "src/assets",
          limit: 5000
        }
      }]
    }]
  },
  devServer: {
    contentBase: './',
    compress: true,
    host: '127.0.0.1',
    port: '30000',
    hot: true,
    inline: true,
    historyApiFallback: true,
    watchOptions: {
      poll: true,
      ignored: /node_modules/,
      aggregateTimeout: 300
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
