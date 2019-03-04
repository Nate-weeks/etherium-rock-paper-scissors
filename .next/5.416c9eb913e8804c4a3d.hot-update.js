webpackHotUpdate(5,{

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _factory = __webpack_require__(493);

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Nate/etherium-rock-paper-scissors/pages/index.js?entry';


var RockPaperScissorsIndex = function (_Component) {
  (0, _inherits3.default)(RockPaperScissorsIndex, _Component);

  function RockPaperScissorsIndex() {
    (0, _classCallCheck3.default)(this, RockPaperScissorsIndex);

    return (0, _possibleConstructorReturn3.default)(this, (RockPaperScissorsIndex.__proto__ || (0, _getPrototypeOf2.default)(RockPaperScissorsIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(RockPaperScissorsIndex, [{
    key: 'render',
    value: function render() {
      console.log(this.props.games);
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, this.props.games);
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var games;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedRockPaperScissors().call();

              case 2:
                games = _context.sent;
                return _context.abrupt('return', { games: games });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RockPaperScissorsIndex;
}(_react.Component);

exports.default = RockPaperScissorsIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIlJvY2tQYXBlclNjaXNzb3JzSW5kZXgiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJnYW1lcyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZFJvY2tQYXBlclNjaXNzb3JzIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWE7Ozs7Ozs7OztJLEFBRWQ7Ozs7Ozs7Ozs7OzZCQU9LLEFBQ1A7Y0FBQSxBQUFRLElBQUksS0FBQSxBQUFLLE1BQWpCLEFBQXVCLEFBQ3ZCOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLE9BQUEsT0FDRyxBQUFLLE1BRlYsQUFDRSxBQUNjLEFBR2pCOzs7Ozs7Ozs7Ozs7dUJBWnFCLGtCQUFBLEFBQVEsUUFBUixBQUFnQiwrQixBQUFoQixBQUErQzs7bUJBQTdEO0E7aURBRUMsRUFBQyxPLEFBQUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSxBQUowQixBQWlCckM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL05hdGUvZXRoZXJpdW0tcm9jay1wYXBlci1zY2lzc29ycyJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/Nate/etherium-rock-paper-scissors/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/Nate/etherium-rock-paper-scissors/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS40MTZjOWViOTEzZTg4MDRjNGEzZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/MGI3Mjc5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vZXRoZXJpdW0vZmFjdG9yeSc7XG5cbmNsYXNzIFJvY2tQYXBlclNjaXNzb3JzSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCl7XG4gICAgY29uc3QgZ2FtZXMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWRSb2NrUGFwZXJTY2lzc29ycygpLmNhbGwoKTtcblxuICAgIHJldHVybiB7Z2FtZXN9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5nYW1lcylcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICB7dGhpcy5wcm9wcy5nYW1lc31cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb2NrUGFwZXJTY2lzc29yc0luZGV4XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7Ozs7Ozs7Ozs7OztBQVJBO0FBQ0E7QUFEQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=