const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  watchOptions: {
    ignored: '/node_modules/',
    aggregateTimeout: 1000,
    poll: 1000,
  },

  entry: {
    // main: path.resolve(__dirname, 'src/promise.js'),
    // main: path.resolve(__dirname, 'src/await.js'),
    main: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true,
  },

  // source mapping
  devtool: 'inline-source-map',

  // server for development
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    hot: true,
    open: {
      app: {
        name: 'google-chrome',
        arguments: ['--incognito', '--new-window'],
      },
    },
  },

  optimization: {
    runtimeChunk: 'single',
  },

  // plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/template.html'),
      title: 'Combat Stimulator',
      filename: 'index.html',
    }),
  ],

  // loaders
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(png|svg|jpg|webp|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
