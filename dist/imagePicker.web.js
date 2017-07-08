"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var style = _ref.style,
      onComplete = _ref.onComplete,
      onFail = _ref.onFail,
      children = _ref.children;

  var containerStyle = Object.assign({}, styles.container, style);

  return _react2.default.createElement(
    "label",
    { onChange: handleUpload(onComplete, onFail), style: containerStyle },
    _react2.default.createElement("input", { style: styles.input, type: "file", accept: "image/*" }),
    children
  );
};

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  container: {
    display: "flex",
    cursor: "pointer"
  },
  input: {
    border: 0,
    width: 0,
    height: 0,
    visibility: "hidden",
    display: "none"
  }
};

function handleUpload(onComplete, onFail) {
  return function (event) {
    var file = event.target.files[0];

    if (!/^image\//.test(file.type)) {
      var data = { cancelled: false, error: "Not an image." };
      onFail(data);
      return;
    }

    var reader = new FileReader();

    reader.onload = function (event) {
      var image = new Image();
      image.src = event.target.result;
      image.onload = function (event) {
        var _event$target = event.target,
            width = _event$target.width,
            height = _event$target.height;

        var uri = event.target.src;
        var data = { cancelled: false, uri: uri, width: width, height: height };
        onComplete(data);
      };
    };

    reader.onerror = function (err) {
      var data = { cancelled: false, error: err };
      onFail(data);
    };

    reader.onabort = function (err) {
      var data = { cancelled: false, error: err };
      onFail(data);
    };

    reader.readAsDataURL(file);
  };
}