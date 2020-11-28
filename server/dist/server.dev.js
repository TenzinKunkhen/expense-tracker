"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _template = _interopRequireDefault(require("./../template"));

var _devBundle = _interopRequireDefault(require("./devBundle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//only for dev mode needs to be removed on prod
var app = (0, _express["default"])();
app.get("/", function (req, res) {
  res.status(200).send((0, _template["default"])());
});
var CURRENT_WORKING_DIR = process.cwd();
app.use("/dist", _express["default"]["static"](_path["default"].join(CURRENT_WORKING_DIR, "dist"))); //remove this too

_devBundle["default"].compile(app);

var port = process.env.PORT || 3000;
app.listen(port, function onStart(err) {
  if (err) {
    console.log(err);
  }

  console.info('Server started on port %s.', port);
});