"use strict";

var path = require('path');

var webpack = require('webpack');

var CURRENT_WORKING_DIR = process.cwd();
var config = {
  mode: "production",
  entry: [path.join(CURRENT_WORKING_DIR, 'client/main.js')],
  output: {
    path: path.join(CURRENT_WORKING_DIR, '/dist'),
    filename: 'bundle.js',
    publicPath: "/dist/"
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }]
  }
};
module.exports = config;