const path = require('path');
const { mix } = require('laravel-mix');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const NodeEnv = process.env.NODE_ENV;

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
const config = {
  node: {
    fs: 'empty',
  },
  plugins: [
    new CleanWebpackPlugin(['public/js'], {
      dry: NodeEnv === 'test',
    }),
  ],
  output: {
    publicPath: '/',
    chunkFilename: 'js/[name].js',
  },
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader',
          options: { presets: ['es2017'] },
        },
        test: /\.js$/,
      },
      {
        use: {
          loader: 'vue-loader',
          options: { presets: ['es2017'] },
        },
        test: /\.vue/,
      },
    ],
  },
};

mix.webpackConfig(config);
