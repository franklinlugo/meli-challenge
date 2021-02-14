const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const dotenv = require('dotenv').config({ path: path.join(__dirname, '.env') });
const paths = require('./paths');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: '[name].js',
    path: paths.build,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }],
      },
      {
        test: /\.(jpe?g|png|gif|ttf|eot|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]',
        },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'file-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed || {}),
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    alias: {
      '@pages': `${paths.src}/pages`,
      shared: `${paths.src}/shared`,
      services: `${paths.src}/services`,
      styles: `${paths.src}/styles`,
      assets: `${paths.src}/assets`,
      utils: `${paths.src}/utils`,
      constants: `${paths.src}/constants`,
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
