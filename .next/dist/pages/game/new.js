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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../../etherium/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../etherium/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Nate/etherium-rock-paper-scissors/pages/game/new.js?entry';


var GameNew = function (_Component) {
  (0, _inherits3.default)(GameNew, _Component);

  function GameNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, GameNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = GameNew.__proto__ || (0, _getPrototypeOf2.default)(GameNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      bet: '',
      name: '',
      bestOf: '',
      errorMessage: '',
      loading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.setState({ loading: true, errorMessage: '' });
                _context.prev = 2;
                _context.next = 5;
                return _web2.default.eth.getAccounts();

              case 5:
                accounts = _context.sent;
                _context.next = 8;
                return _factory2.default.methods.createRockPaperScissors(_this.state.bet, _this.state.name, _this.state.bestOf).send({
                  from: accounts[0],
                  value: _this.state.bet
                });

              case 8:
                _routes.Router.pushRoute('/');
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](2);

                _this.setState({
                  errorMessage: _context.t0.message
                });

              case 14:
                _this.setState({ loading: false });

              case 15:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[2, 11]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(GameNew, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, ' Create a new rockPaperScissors Game'), _react2.default.createElement(_semanticUiReact.Form, { error: !!this.state.errorMessage, onSubmit: this.onSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, 'Game Name'), _react2.default.createElement(_semanticUiReact.Input, {
        label: 'name',
        labelPosition: 'right',
        value: this.state.name,
        onChange: function onChange(event) {
          return _this3.setState({ name: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, 'Bet'), _react2.default.createElement(_semanticUiReact.Input, {
        label: 'wei',
        labelPosition: 'right',
        value: this.state.bet,
        onChange: function onChange(event) {
          return _this3.setState({ bet: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, 'Best of How Many Games?'), _react2.default.createElement(_semanticUiReact.Input, {
        label: 'odd number',
        labelPosition: 'right',
        value: this.state.bestOf,
        onChange: function onChange(event) {
          return _this3.setState({ bestOf: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, 'Create!')));
    }
  }]);

  return GameNew;
}(_react.Component);

exports.default = GameNew;

// TODO
// - display relevant information about games
// - create a join game button
// - create a select move button that only appears if you are one of the
// 2 players in the game
// - display who won each round and how many games are left
// - display who won the whole thing
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2dhbWUvbmV3LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiTWVzc2FnZSIsImZhY3RvcnkiLCJ3ZWIzIiwiUm91dGVyIiwiR2FtZU5ldyIsInN0YXRlIiwiYmV0IiwibmFtZSIsImJlc3RPZiIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlUm9ja1BhcGVyU2Npc3NvcnMiLCJzZW5kIiwiZnJvbSIsInZhbHVlIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFNLEFBQVEsQUFBTzs7QUFDOUIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFRLEFBQWE7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7Ozs7Ozs7OE0sQUFDSjtXQUFRLEFBQ0gsQUFDTDtZQUZRLEFBRUYsQUFDTjtjQUhRLEFBR0EsQUFDUjtvQkFKUSxBQUlNLEFBQ2Q7ZSxBQUxRLEFBS0M7QUFMRCxBQUNSLGEsQUFPRjsyRkFBVyxpQkFBQSxBQUFPLE9BQVA7WUFBQTtzRUFBQTtvQkFBQTs2Q0FBQTttQkFDVDtzQkFBQSxBQUFNLEFBQ047c0JBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE1BQU0sY0FGdEIsQUFFVCxBQUFjLEFBQStCO2dDQUZwQztnQ0FBQTt1QkFJZ0IsY0FBQSxBQUFLLElBSnJCLEFBSWdCLEFBQVM7O21CQUExQjtBQUpDLG9DQUFBO2dDQUFBO3lDQUtELEFBQVEsUUFBUixBQUFnQix3QkFBd0IsTUFBQSxBQUFLLE1BQTdDLEFBQW1ELEtBQUssTUFBQSxBQUFLLE1BQTdELEFBQW1FLE1BQU0sTUFBQSxBQUFLLE1BQTlFLEFBQW9GLFFBQXBGLEFBQ0w7d0JBQ08sU0FERixBQUNFLEFBQVMsQUFDZjt5QkFBTyxNQUFBLEFBQUssTUFSUCxBQUtELEFBQ0EsQUFFYztBQUZkLEFBQ0osaUJBRkk7O21CQUtOOytCQUFBLEFBQU8sVUFWQSxBQVVQLEFBQWlCO2dDQVZWO0FBQUE7O21CQUFBO2dDQUFBO2dEQVlQOztzQkFBQSxBQUFLO2dDQUNXLFlBYlQsQUFZUCxBQUFjLEFBQ007QUFETixBQUNaOzttQkFHRjtzQkFBQSxBQUFLLFNBQVMsRUFBRSxTQWhCVCxBQWdCUCxBQUFjLEFBQVc7O21CQWhCbEI7bUJBQUE7Z0NBQUE7O0FBQUE7aUNBQUE7QTs7Ozs7Ozs7Ozs2QkFtQkQ7bUJBQ047OzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLE9BQUEsa0JBQ0EsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREEsQUFDQSxBQUNFLHlEQUFBLEFBQUMsdUNBQUssT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQXBCLEFBQTBCLGNBQWMsVUFBVyxLQUFuRCxBQUF3RDtvQkFBeEQ7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUdBLDhCQUFBLEFBQUM7ZUFBRCxBQUNNLEFBQ047dUJBRkEsQUFFYyxBQUNkO2VBQU8sS0FBQSxBQUFLLE1BSFosQUFHa0IsQUFDbEI7a0JBQVUseUJBQUE7aUJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxNQUFNLE1BQUEsQUFBTSxPQUFyQyxBQUFTLEFBQWMsQUFBcUI7QUFKdEQ7O29CQUFBO3NCQUxKLEFBQ0UsQUFJRSxBQU9GO0FBUEU7QUFDQSwyQkFNRCxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFHQSx3QkFBQSxBQUFDO2VBQUQsQUFDTSxBQUNOO3VCQUZBLEFBRWMsQUFDZDtlQUFPLEtBQUEsQUFBSyxNQUhaLEFBR2tCLEFBQ2xCO2tCQUFVLHlCQUFBO2lCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsS0FBSyxNQUFBLEFBQU0sT0FBcEMsQUFBUyxBQUFjLEFBQW9CO0FBSnJEOztvQkFBQTtzQkFoQkosQUFZRSxBQUlFLEFBT0Y7QUFQRTtBQUNBLDJCQU1ELGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUdBLDRDQUFBLEFBQUM7ZUFBRCxBQUNNLEFBQ047dUJBRkEsQUFFYyxBQUNkO2VBQU8sS0FBQSxBQUFLLE1BSFosQUFHa0IsQUFDbEI7a0JBQVUseUJBQUE7aUJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxRQUFRLE1BQUEsQUFBTSxPQUF2QyxBQUFTLEFBQWMsQUFBdUI7QUFKeEQ7O29CQUFBO3NCQTNCSixBQXVCRSxBQUlFLEFBT0Y7QUFQRTtBQUNBLDJCQU1GLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUE1QyxBQUFrRDtvQkFBbEQ7c0JBbENGLEFBa0NFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0M7b0JBQXBDO3NCQUFBO0FBQUE7U0F0Q04sQUFDRSxBQUVFLEFBbUNFLEFBS1A7Ozs7O0FBR0gsQSxBQTNFc0I7O2tCQTJFdEIsQUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL05hdGUvZXRoZXJpdW0tcm9jay1wYXBlci1zY2lzc29ycyJ9