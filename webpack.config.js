const path = require('path');

module.exports = {
  target: 'node',
  entry: './src/main.ts', // 入口文件，指定 TypeScript 的入口文件
  output: {
    filename: 'index.js', // 输出文件名称
    path: path.resolve(__dirname, 'dist'), // 输出路径
  },
  resolve: {
    extensions: ['.ts', '.js'], // 允许 Webpack 解析 .ts 和 .js 文件
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // 匹配 .ts 文件
        use: 'ts-loader', // 使用 ts-loader 加载 TypeScript 文件
        exclude: /node_modules/, // 排除 node_modules 文件夹
      },
    ],
  },
  mode: 'production', // 设置模式为开发模式（也可以是 'production'）
};
