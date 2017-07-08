"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.default = function (_ref2) {
  var style = _ref2.style,
      children = _ref2.children,
      settings = _ref2.settings,
      onComplete = _ref2.onComplete,
      onFail = _ref2.onFail;

  return _react2.default.createElement(
    _reactNative.TouchableWithoutFeedback,
    {
      style: style,
      onPress: pickImage(settings, onComplete, onFail)
    },
    _react2.default.createElement(
      _reactNative.View,
      null,
      children
    )
  );
};

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactNative = require("react-native");

var _expo = require("expo");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function pickImage(settings, onComplete, onFail) {
  var _this = this;

  return _asyncToGenerator(_regenerator2.default.mark(function _callee() {
    var settings, result, data;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            settings = settings || {};
            _context.prev = 1;
            _context.next = 4;
            return _expo.ImagePicker.launchImageLibraryAsync(settings);

          case 4:
            result = _context.sent;

            onComplete(result);
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            data = { cancelled: false, error: _context.t0 };

            onFail(data);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, _this, [[1, 8]]);
  }));
}