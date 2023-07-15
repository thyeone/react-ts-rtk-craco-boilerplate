const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const DotenvWebpack = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@atoms': path.resolve(__dirname, 'src/atoms'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@apis': path.resolve(__dirname, 'src/apis'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg/,
        type: 'asset',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new CleanWebpackPlugin(),
    new DotenvWebpack(),
  ],
  devServer: {
    hot: true,
    port: 3000,
    historyApiFallback: true, // 요청된 모든 경로에 대해 항상 index.html 반환
    open: true,
  },
};
