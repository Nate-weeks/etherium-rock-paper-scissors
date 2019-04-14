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

var _semanticUiReact = require('semantic-ui-react');

var _game = require('../etherium/game');

var _game2 = _interopRequireDefault(_game);

var _web = require('../etherium/web3.js');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Nate/etherium-rock-paper-scissors/components/JoinGame.js';


var JoinGame = function (_Component) {
  (0, _inherits3.default)(JoinGame, _Component);

  function JoinGame() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, JoinGame);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = JoinGame.__proto__ || (0, _getPrototypeOf2.default)(JoinGame)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      errorMessage: '',
      loading: false
    }, _this.onClick = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var game, accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                game = (0, _game2.default)(_this.props.address);

                _this.setState({ loading: true });

                _context.prev = 3;
                _context.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context.sent;
                _context.next = 9;
                return game.methods.joinGame().send({
                  from: accounts[0],
                  value: _this.props.wager
                });

              case 9:

                _routes.Router.replaceRoute('/game/' + _this.props.address);
                _context.next = 16;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](3);

                _this.setState({ errorMessage: _context.t0.message });
                console.log(_this.state.errorMessage);

              case 16:

                _this.setState({ loading: false });

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[3, 12]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(JoinGame, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_semanticUiReact.Form, { error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, onClick: this.onClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, 'Join Game'), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }));
    }
  }]);

  return JoinGame;
}(_react.Component);

exports.default = JoinGame;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSm9pbkdhbWUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiTWVzc2FnZSIsIkJ1dHRvbiIsIkdhbWUiLCJ3ZWIzIiwiUm91dGVyIiwiSm9pbkdhbWUiLCJzdGF0ZSIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvbkNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImdhbWUiLCJwcm9wcyIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiam9pbkdhbWUiLCJzZW5kIiwiZnJvbSIsInZhbHVlIiwid2FnZXIiLCJyZXBsYWNlUm91dGUiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBUzs7QUFDeEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQWM7Ozs7Ozs7SSxBQUVqQjs7Ozs7Ozs7Ozs7Ozs7O2dOLEFBQ0o7b0JBQVEsQUFDUSxBQUNkO2UsQUFGTSxBQUVHO0FBRkgsQUFDTixhLEFBSUY7MkZBQVUsaUJBQUEsQUFBTSxPQUFOO2tCQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUNSO3NCQUFBLEFBQU8sQUFFRDs7QUFIRSx1QkFHSyxvQkFBSyxNQUFBLEFBQUssTUFIZixBQUdLLEFBQWdCLEFBRTdCOztzQkFBQSxBQUFLLFNBQVMsRUFBRSxTQUxSLEFBS1IsQUFBYyxBQUFXOztnQ0FMakI7Z0NBQUE7dUJBUWlCLGNBQUEsQUFBSyxJQVJ0QixBQVFpQixBQUFTOzttQkFBMUI7QUFSQSxvQ0FBQTtnQ0FBQTs0QkFTQSxBQUFLLFFBQUwsQUFBYSxXQUFiLEFBQXdCO3dCQUN0QixTQUQyQixBQUMzQixBQUFTLEFBQ2Y7eUJBQU8sTUFBQSxBQUFLLE1BWFIsQUFTQSxBQUE2QixBQUVmO0FBRmUsQUFDakMsaUJBREk7O21CQUtOOzsrQkFBQSxBQUFPLHdCQUFzQixNQUFBLEFBQUssTUFkNUIsQUFjTixBQUF3QztnQ0FkbEM7QUFBQTs7bUJBQUE7Z0NBQUE7Z0RBZ0JOOztzQkFBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLFlBQTlCLEFBQWMsQUFBb0IsQUFDbEM7d0JBQUEsQUFBUSxJQUFJLE1BQUEsQUFBSyxNQWpCWCxBQWlCTixBQUF1Qjs7bUJBR3pCOztzQkFBQSxBQUFLLFNBQVMsRUFBRSxTQXBCUixBQW9CUixBQUFjLEFBQVc7O21CQXBCakI7bUJBQUE7Z0NBQUE7O0FBQUE7aUNBQUE7QTs7Ozs7Ozs7Ozs2QkF1QkYsQUFDTjs2QkFDRSxBQUFDLHVDQUFLLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUFwQixBQUEwQjtvQkFBMUI7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsQUFBQyx5Q0FBTyxTQUFSLE1BQWdCLFNBQVMsS0FBQSxBQUFLLE1BQTlCLEFBQW9DLFNBQVMsU0FBVyxLQUF4RCxBQUE2RDtvQkFBN0Q7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFHQSw4QkFBQSxBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7b0JBQWxEO3NCQUxKLEFBQ0UsQUFJRSxBQUdMO0FBSEs7Ozs7OztBLEFBbkNlLEFBeUN2Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJKb2luR2FtZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTmF0ZS9ldGhlcml1bS1yb2NrLXBhcGVyLXNjaXNzb3JzIn0=