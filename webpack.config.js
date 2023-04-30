const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
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

  // plugins
  plugins: [
    new htmlWebpackPlugin({
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
