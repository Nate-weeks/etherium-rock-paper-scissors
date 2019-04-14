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

var _game = require('../../etherium/game');

var _game2 = _interopRequireDefault(_game);

var _web = require('../../etherium/web3');

var _web2 = _interopRequireDefault(_web);

var _semanticUiReact = require('semantic-ui-react');

var _JoinGame = require('../../components/JoinGame');

var _JoinGame2 = _interopRequireDefault(_JoinGame);

var _SelectMove = require('../../components/SelectMove');

var _SelectMove2 = _interopRequireDefault(_SelectMove);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/Nate/etherium-rock-paper-scissors/pages/game/show.js?entry';


var GameShow = function (_Component) {
  (0, _inherits3.default)(GameShow, _Component);

  function GameShow() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, GameShow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = GameShow.__proto__ || (0, _getPrototypeOf2.default)(GameShow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      player: ''
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(GameShow, [{
    key: 'componentDidMount',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var players;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _web2.default.eth.getAccounts();

              case 2:
                players = _context.sent;

                this.setState({ player: players[0] });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref2.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'renderInfo',
    value: function renderInfo() {
      var _props = this.props,
          playerOneMove = _props.playerOneMove,
          playerTwoMove = _props.playerTwoMove,
          playerOneWinCount = _props.playerOneWinCount,
          playerTwoWinCount = _props.playerTwoWinCount,
          winner = _props.winner,
          result = _props.result,
          completed = _props.completed;

      var complete = void 0;
      if (completed == true) {
        complete = "true";
      } else {
        complete = "false";
      }

      var items = [{
        header: "results",
        meta: result
      }, {
        header: "Games Player One has won",
        meta: playerOneWinCount,
        description: '' + this.props.playerOne,
        style: { overflowWrap: 'break-word' }
      }, {
        header: "Games Player Two has won",
        meta: playerTwoWinCount,
        description: '' + this.props.playerTwo,
        style: { overflowWrap: 'break-word' }
      }, {
        header: "Who won the game?",
        meta: winner,
        style: { overflowWrap: 'break-word' }
      }, {
        header: "game completed?",
        meta: complete
      }, {
        header: 'Join game for ' + this.props.wager + ' wei',
        meta: _react2.default.createElement(_JoinGame2.default, { address: this.props.address, wager: this.props.wager, playerOne: this.props.playerOne, __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        }),
        style: { textAlign: 'center' }
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, ' ', 'Welcome to ' + this.props.title, ' '), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, ' The Wager is:'), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, ' ', _web2.default.utils.fromWei(this.props.wager, 'ether') + ' ether'), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, ' ', 'It is best of ' + this.props.games), this.renderInfo(), _react2.default.createElement(_SelectMove2.default, {
        player: this.state.player,
        address: this.props.address,
        playerOne: this.props.playerOne,
        playerTwo: this.props.playerTwo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var game, summary;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                game = (0, _game2.default)(props.query.address);
                _context2.next = 3;
                return game.methods.game().call();

              case 3:
                summary = _context2.sent;
                return _context2.abrupt('return', {
                  address: props.query.address,
                  title: summary[0],
                  wager: summary[1],
                  playerOne: summary[2],
                  playerTwo: summary[3],
                  games: summary[4],
                  playerOneMove: summary[5],
                  playerTwoMove: summary[6],
                  playerOneWinCount: summary[7],
                  playerTwoWinCount: summary[8],
                  winner: summary[9],
                  result: summary[10],
                  completed: summary[11]
                });

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return GameShow;
}(_react.Component);

exports.default = GameShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2dhbWUvc2hvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkdhbWUiLCJ3ZWIzIiwiQ2FyZCIsIkdyaWQiLCJCdXR0b24iLCJKb2luR2FtZSIsIlNlbGVjdE1vdmUiLCJHYW1lU2hvdyIsInN0YXRlIiwicGxheWVyIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJwbGF5ZXJzIiwic2V0U3RhdGUiLCJwcm9wcyIsInBsYXllck9uZU1vdmUiLCJwbGF5ZXJUd29Nb3ZlIiwicGxheWVyT25lV2luQ291bnQiLCJwbGF5ZXJUd29XaW5Db3VudCIsIndpbm5lciIsInJlc3VsdCIsImNvbXBsZXRlZCIsImNvbXBsZXRlIiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJwbGF5ZXJPbmUiLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInBsYXllclR3byIsIndhZ2VyIiwiYWRkcmVzcyIsInRleHRBbGlnbiIsInRpdGxlIiwidXRpbHMiLCJmcm9tV2VpIiwiZ2FtZXMiLCJyZW5kZXJJbmZvIiwiZ2FtZSIsInF1ZXJ5IiwibWV0aG9kcyIsImNhbGwiLCJzdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFNLEFBQU07O0FBQ3JCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQWdCOzs7Ozs7Ozs7SSxBQUdqQjs7Ozs7Ozs7Ozs7Ozs7Z04sQUFDSjtjLEFBQVEsQUFDRTtBQURGLEFBQ047Ozs7Ozs7Ozs7Ozs7dUJBeUJzQixjQUFBLEFBQUssSSxBQUFMLEFBQVM7O21CQUF6QjtBLG1DQUNOOztxQkFBQSxBQUFLLFNBQVMsRUFBQyxRQUFRLFFBQXZCLEFBQWMsQUFBUyxBQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBR3JCO21CQVNOLEtBVE0sQUFTRDtVQVRDLEFBRVIsdUJBRlEsQUFFUjtVQUZRLEFBR1IsdUJBSFEsQUFHUjtVQUhRLEFBSVIsMkJBSlEsQUFJUjtVQUpRLEFBS1IsMkJBTFEsQUFLUjtVQUxRLEFBTVIsZ0JBTlEsQUFNUjtVQU5RLEFBT1IsZ0JBUFEsQUFPUjtVQVBRLEFBUVIsbUJBUlEsQUFRUixBQUdGOztVQUFJLGdCQUFKLEFBQ0E7VUFBRyxhQUFILEFBQWdCLE1BQUssQUFDbkI7bUJBQUEsQUFBVyxBQUNaO0FBRkQsYUFFTyxBQUNMO21CQUFBLEFBQVcsQUFDWjtBQUVEOztVQUFNO2dCQUNKLEFBQ1UsQUFDUjtjQUhVLEFBQ1osQUFFUTtBQUZSLEFBQ0UsT0FGVTtnQkFLWixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047MEJBQWdCLEtBQUEsQUFBSyxNQUh2QixBQUc2QixBQUMzQjtlQUFPLEVBQUUsY0FUQyxBQUtaLEFBSVMsQUFBZ0I7QUFKekIsQUFDRTtnQkFLRixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047MEJBQWdCLEtBQUEsQUFBSyxNQUh2QixBQUc2QixBQUMzQjtlQUFPLEVBQUUsY0FmQyxBQVdaLEFBSVMsQUFBZ0I7QUFKekIsQUFDRTtnQkFLRixBQUNVLEFBQ1I7Y0FGRixBQUVRLEFBQ047ZUFBTyxFQUFFLGNBcEJDLEFBaUJaLEFBR1MsQUFBZ0I7QUFIekIsQUFDRTtnQkFJRixBQUNVLEFBQ1I7Y0F4QlUsQUFzQlosQUFFUTtBQUZSLEFBQ0U7bUNBSXlCLEtBQUEsQUFBSyxNQUE5QixBQUFvQyxRQUR0QyxBQUVFOzhCQUFNLEFBQUMsb0NBQVMsU0FBUyxLQUFBLEFBQUssTUFBeEIsQUFBOEIsU0FBUyxPQUFRLEtBQUEsQUFBSyxNQUFwRCxBQUEwRCxPQUFPLFdBQVcsS0FBQSxBQUFLLE1BQWpGLEFBQXVGO3NCQUF2Rjt3QkFGUixBQUVRLEFBQ047QUFETTtTQUFBO2VBQ0MsRUFBRSxXQTdCYixBQUFjLEFBMEJaLEFBR1MsQUFBYSxBQUl4QjtBQVBFLEFBQ0U7OzJDQU1HLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7b0JBQW5CO3NCQUFQLEFBQU8sQUFDUjtBQURRO09BQUE7Ozs7NkJBRUQsQUFDTjs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNBO0FBREE7QUFBQSxPQUFBLGtCQUNBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUFBLHFCQUFvQixLQUFBLEFBQUssTUFBekIsQUFBK0IsT0FEL0IsQUFDQSxBQUNFLHNCQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUZGLEFBRUUsQUFDQSxtQ0FBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBUyxtQkFBQSxBQUFLLE1BQUwsQUFBVyxRQUFRLEtBQUEsQUFBSyxNQUF4QixBQUE4QixPQUF2QyxBQUFTLEFBQXFDLFdBSGhELEFBR0UsQUFDQSwyQkFBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBQSx3QkFBdUIsS0FBQSxBQUFLLE1BSjlCLEFBSUUsQUFBa0MsQUFDakMsYUFMSCxBQUtHLEFBQUssQUFDTiw4QkFBQSxBQUFDO2dCQUNTLEtBQUEsQUFBSyxNQURmLEFBQ3FCLEFBQ3JCO2lCQUFXLEtBQUEsQUFBSyxNQUZoQixBQUVzQixBQUN0QjttQkFBYSxLQUFBLEFBQUssTUFIbEIsQUFHd0IsQUFDeEI7bUJBQWEsS0FBQSxBQUFLLE1BSmxCLEFBSXdCOztvQkFKeEI7c0JBUEosQUFDRSxBQU1FLEFBUUw7QUFSSztBQUNBOzs7Ozs2RyxBQXpGdUI7Ozs7O21CQUNyQjtBLHVCQUFPLG9CQUFLLE1BQUEsQUFBTSxNLEFBQVgsQUFBaUI7O3VCQUVSLEtBQUEsQUFBSyxRQUFMLEFBQWEsTyxBQUFiLEFBQW9COzttQkFBcEM7QTs7MkJBR0ssTUFBQSxBQUFNLE1BRFYsQUFDZ0IsQUFDckI7eUJBQU8sUUFGRixBQUVFLEFBQVEsQUFDZjt5QkFBTyxRQUhGLEFBR0UsQUFBUSxBQUNmOzZCQUFXLFFBSk4sQUFJTSxBQUFRLEFBQ25COzZCQUFXLFFBTE4sQUFLTSxBQUFRLEFBQ25CO3lCQUFPLFFBTkYsQUFNRSxBQUFRLEFBQ2Y7aUNBQWUsUUFQVixBQU9VLEFBQVEsQUFDdkI7aUNBQWUsUUFSVixBQVFVLEFBQVEsQUFDdkI7cUNBQW1CLFFBVGQsQUFTYyxBQUFRLEFBQzNCO3FDQUFtQixRQVZkLEFBVWMsQUFBUSxBQUMzQjswQkFBUSxRQVhILEFBV0csQUFBUSxBQUNoQjswQkFBUSxRQVpILEFBWUcsQUFBUSxBQUNoQjs2QkFBVyxRLEFBYk4sQUFhTSxBQUFRO0FBYmQsQUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBLEFBVmlCLEFBdUd2Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9OYXRlL2V0aGVyaXVtLXJvY2stcGFwZXItc2Npc3NvcnMifQ==