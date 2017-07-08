"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
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

var _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _class);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this._handleUpload = function (event) {
      var file = event.target.files[0];

      if (!/^image\//.test(file.type)) {
        var data = { cancelled: false, error: "Not an image." };
        _this.props.onFail(data);
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
          _this.props.onComplete(data);
        };
      };

      reader.onerror = function (err) {
        var data = { cancelled: false, error: err };
        _this.props.onFail(data);
      };

      reader.onabort = function (err) {
        var data = { cancelled: false, error: err };
        _this.props.onFail(data);
      };

      reader.readAsDataURL(file);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class, [{
    key: "render",
    value: function render() {
      var containerStyle = Object.assign({}, style.container, this.props.style);
      return _react2.default.createElement(
        "label",
        { onChange: this._handleUpload, style: containerStyle },
        _react2.default.createElement("input", { style: style.input, type: "file", accept: "image/*" }),
        this.props.children
      );
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;