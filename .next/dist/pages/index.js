'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _factory = require('../etherium/factory');

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