'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _minifyCssString = require('minify-css-string');

var _minifyCssString2 = _interopRequireDefault(_minifyCssString);

var _inlineStylePrefixer = require('inline-style-prefixer');

var _inlineStylePrefixer2 = _interopRequireDefault(_inlineStylePrefixer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var prefixer = new _inlineStylePrefixer2.default();

var inCss = '\n  @-webkit-keyframes react-fade-in {\n    0%   { opacity: 0; }\n    50%  { opacity: 0; }\n    100% { opacity: 1; }\n  }\n  @-moz-keyframes react-fade-in {\n    0%   { opacity: 0; }\n    50%  { opacity: 0; }\n    100% { opacity: 1; }\n  }\n  @-ms-keyframes react-fade-in {\n    0%   { opacity: 0; }\n    50%  { opacity: 0; }\n    100% { opacity: 1; }\n  }\n  @keyframes react-fade-in {\n    0%   { opacity: 0; }\n    50%  { opacity: 0; }\n    100% { opacity: 1; }\n  }\n';

var outCss = '\n  @-webkit-keyframes react-fade-out {\n    0%   { opacity: 1; }\n    50%  { opacity: 1; }\n    100% { opacity: 0; }\n  }\n  @-moz-keyframes react-fade-out {\n    0%   { opacity: 1; }\n    50%  { opacity: 1; }\n    100% { opacity: 0; }\n  }\n  @-ms-keyframes react-fade-out {\n    0%   { opacity: 1; }\n    50%  { opacity: 1; }\n    100% { opacity: 0; }\n  }\n  @keyframes react-fade-out {\n    0%   { opacity: 1; }\n    50%  { opacity: 1; }\n    100% { opacity: 0; }\n  }\n';

var Fade = function Fade(_ref) {
  var children = _ref.children,
      duration = _ref.duration,
      out = _ref.out,
      props = _objectWithoutProperties(_ref, ['children', 'duration', 'out']);

  return _react2.default.createElement(
    'span',
    props,
    _react2.default.createElement('style', { children: (0, _minifyCssString2.default)(out ? outCss : inCss) }),
    _react2.default.createElement(
      'div',
      {
        style: prefixer.prefix({
          animationDuration: duration + 's',
          animationIterationCount: 1,
          animationName: 'react-fade-' + (out ? 'out' : 'in'),
          animationTimingFunction: out ? 'ease-out' : 'ease-in'
        })
      },
      children
    )
  );
};

exports.default = Fade;