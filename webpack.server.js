const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

const baseDir = path.resolve('server');
const outputDir = path.resolve('dist/server');

module.exports = {
  mode: 'production',
  resolve: {
    extensions: ['.ts', '.tsx', '.js',  '.html', '.scss', '.css', '.svg'],
  },
  context: baseDir,
  entry: {
    './faas.server.min': [
      './app.ts',
    ],

  },
  output: {
    path: outputDir,
    filename: '[name].js',
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
};
