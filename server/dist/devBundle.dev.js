"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _webpack = _interopRequireDefault(require("webpack"));

var _webpackDevMiddleware = _interopRequireDefault(require("webpack-dev-middleware"));

var _webpackHotMiddleware = _interopRequireDefault(require("webpack-hot-middleware"));

var _webpackConfigClient = _interopRequireDefault(require("./../webpack.config.client.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var compile = function compile(app) {
  if (process.env.NODE_ENV == "development") {
    var compiler = (0, _webpack["default"])(_webpackConfigClient["default"]);
    var middleware = (0, _webpackDevMiddleware["default"])(compiler, {
      publicPath: _webpackConfigClient["default"].output.publicPath
    });
    app.use(middleware);
    app.use((0, _webpackHotMiddleware["default"])(compiler));
  }
};

var _default = {
  compile: compile
};
exports["default"] = _default;