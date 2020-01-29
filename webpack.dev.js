const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = require('./webpack.common.js');

module.exports = merge.smart(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './assets/ ',
    watchContentBase: true,
    hot: true,
    port: 4000,
    writeToDisk: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              outputStyle: 'expanded',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      hmr: true,
      reloadAll: true,
      filename: "[name].[hash].css",
      chunkFilename: "[id].[hash].css",
    }),
  ],
});
