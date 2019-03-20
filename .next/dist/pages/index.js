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

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Nate/etherium-rock-paper-scissors/pages/index.js?entry';


var RockPaperScissorsIndex = function (_Component) {
  (0, _inherits3.default)(RockPaperScissorsIndex, _Component);

  function RockPaperScissorsIndex() {
    (0, _classCallCheck3.default)(this, RockPaperScissorsIndex);

    return (0, _possibleConstructorReturn3.default)(this, (RockPaperScissorsIndex.__proto__ || (0, _getPrototypeOf2.default)(RockPaperScissorsIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(RockPaperScissorsIndex, [{
    key: 'renderGames',
    value: function renderGames() {
      var items = this.props.games.map(function (address) {
        return {
          header: address,
          description: _react2.default.createElement(_routes.Link, { route: 'game/' + address, __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          }, _react2.default.createElement('a', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          }, 'View Game')),
          fluid: true
        };
      });
      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      console.log(this.props.games);
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, 'Open Games'), _react2.default.createElement(_routes.Link, { route: '/game/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        content: 'Create game',
        icon: 'add circle',
        primary: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }))), this.renderGames()));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIkxheW91dCIsIkNhcmQiLCJCdXR0b24iLCJMaW5rIiwiUm9ja1BhcGVyU2Npc3NvcnNJbmRleCIsIml0ZW1zIiwicHJvcHMiLCJnYW1lcyIsIm1hcCIsImhlYWRlciIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwiY29uc29sZSIsImxvZyIsInJlbmRlckdhbWVzIiwibWV0aG9kcyIsImdldERlcGxveWVkUm9ja1BhcGVyU2Npc3NvcnMiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFNOztBQUNmLEFBQVMsQUFBWTs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7O2tDQU9TLEFBQ2I7VUFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsSUFBSSxtQkFBVyxBQUM1Qzs7a0JBQU8sQUFDRyxBQUNSO3VDQUNFLEFBQUMsOEJBQUssaUJBQU4sQUFBcUI7d0JBQXJCOzBCQUFBLEFBQ0U7QUFERjtXQUFBLGtCQUNFLGNBQUE7O3dCQUFBOzBCQUFBO0FBQUE7QUFBQSxhQUpDLEFBR0gsQUFDRSxBQUdKO2lCQVBGLEFBQU8sQUFPRSxBQUVWO0FBVFEsQUFDTDtBQUZKLEFBQWMsQUFXZCxPQVhjOzJDQVdQLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFDUjtBQURRO09BQUE7Ozs7NkJBR0UsQUFDUDtjQUFBLEFBQVEsSUFBSSxLQUFBLEFBQUssTUFBakIsQUFBdUIsQUFDdkI7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsK0JBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUM7aUJBQUQsQUFDVSxBQUNWO2NBRkEsQUFFTyxBQUNQO2lCQUhBOztvQkFBQTtzQkFKTixBQUVFLEFBQ0UsQUFDRSxBQU9EO0FBUEM7QUFDQSxpQkFQVixBQUNFLEFBQ0UsQUFXSyxBQUFLLEFBSWY7Ozs7Ozs7Ozs7Ozt1QkF2Q3FCLGtCQUFBLEFBQVEsUUFBUixBQUFnQiwrQixBQUFoQixBQUErQzs7bUJBQTdEO0E7aURBRUMsRUFBQyxPLEFBQUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3Q1gsQSxBQTVDcUM7O2tCQTRDckMsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTmF0ZS9ldGhlcml1bS1yb2NrLXBhcGVyLXNjaXNzb3JzIn0=