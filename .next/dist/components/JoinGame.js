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
//JoinGame.js - button for joining a game of rockPaperScissors

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
                  value: _this.props.wager // send value of wager in eth
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

  // handles for submission of join-game function


  (0, _createClass3.default)(JoinGame, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_semanticUiReact.Form, { error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, onClick: this.onClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, 'Join Game'), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }));
    }
  }]);

  return JoinGame;
}(_react.Component);

exports.default = JoinGame;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSm9pbkdhbWUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiTWVzc2FnZSIsIkJ1dHRvbiIsIkdhbWUiLCJ3ZWIzIiwiUm91dGVyIiwiSm9pbkdhbWUiLCJzdGF0ZSIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvbkNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImdhbWUiLCJwcm9wcyIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiam9pbkdhbWUiLCJzZW5kIiwiZnJvbSIsInZhbHVlIiwid2FnZXIiLCJyZXBsYWNlUm91dGUiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBUzs7QUFDeEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQWM7Ozs7O0FBTnZCOztJLEFBUU07Ozs7Ozs7Ozs7Ozs7OztnTixBQUNKO29CQUFRLEFBQ1EsQUFDZDtlLEFBRk0sQUFFRztBQUZILEFBQ04sYSxBQUtGOzJGQUFVLGlCQUFBLEFBQU0sT0FBTjtrQkFBQTtzRUFBQTtvQkFBQTs2Q0FBQTttQkFDUjtzQkFBQSxBQUFPLEFBRUQ7O0FBSEUsdUJBR0ssb0JBQUssTUFBQSxBQUFLLE1BSGYsQUFHSyxBQUFnQixBQUU3Qjs7c0JBQUEsQUFBSyxTQUFTLEVBQUUsU0FMUixBQUtSLEFBQWMsQUFBVzs7Z0NBTGpCO2dDQUFBO3VCQVFpQixjQUFBLEFBQUssSUFSdEIsQUFRaUIsQUFBUzs7bUJBQTFCO0FBUkEsb0NBQUE7Z0NBQUE7NEJBU0EsQUFBSyxRQUFMLEFBQWEsV0FBYixBQUF3Qjt3QkFDdEIsU0FEMkIsQUFDM0IsQUFBUyxBQUNmO3lCQUFPLE1BQUEsQUFBSyxNQUZxQixBQUVmLE1BWGQsQUFTQSxBQUE2QixBQUVhO0FBRmIsQUFDakMsaUJBREk7O21CQUtOOzsrQkFBQSxBQUFPLHdCQUFzQixNQUFBLEFBQUssTUFkNUIsQUFjTixBQUF3QztnQ0FkbEM7QUFBQTs7bUJBQUE7Z0NBQUE7Z0RBZ0JOOztzQkFBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLFlBQTlCLEFBQWMsQUFBb0IsQUFDbEM7d0JBQUEsQUFBUSxJQUFJLE1BQUEsQUFBSyxNQWpCWCxBQWlCTixBQUF1Qjs7bUJBR3pCOztzQkFBQSxBQUFLLFNBQVMsRUFBRSxTQXBCUixBQW9CUixBQUFjLEFBQVc7O21CQXBCakI7bUJBQUE7Z0NBQUE7O0FBQUE7aUNBQUE7QTs7Ozs7O0FBRFY7Ozs7Ozs7NkJBd0JRLEFBQ047NkJBQ0UsQUFBQyx1Q0FBSyxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBcEIsQUFBMEI7b0JBQTFCO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQyxTQUFTLFNBQVcsS0FBeEQsQUFBNkQ7b0JBQTdEO3NCQUFBO0FBQUE7U0FERixBQUNFLEFBR0EsOEJBQUEsQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTVDLEFBQWtEO29CQUFsRDtzQkFMSixBQUNFLEFBSUUsQUFHTDtBQUhLOzs7Ozs7QSxBQXBDZSxBQTBDdkI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiSm9pbkdhbWUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL05hdGUvZXRoZXJpdW0tcm9jay1wYXBlci1zY2lzc29ycyJ9