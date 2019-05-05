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
//show.js - component that shows all the information and interractive pieces
//available for a specific game of rockPaperScissors


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
      // method to a list of information available for the rockPaperScissors game
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(GameShow, [{
    key: 'componentDidMount',

    // get the currently logged-in player
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

    // destructure game info and display it in card components

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
            lineNumber: 94
          }
        }),
        style: { textAlign: 'center' }
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, ' ', 'Welcome to ' + this.props.title, ' '), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, ' The Wager is:'), _react2.default.createElement('h2', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, ' ', _web2.default.utils.fromWei(this.props.wager, 'ether') + ' ether'), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, ' ', 'It is best of ' + this.props.games), this.renderInfo(), _react2.default.createElement(_SelectMove2.default, {
        player: this.state.player,
        address: this.props.address,
        playerOne: this.props.playerOne,
        playerTwo: this.props.playerTwo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2dhbWUvc2hvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkdhbWUiLCJ3ZWIzIiwiQ2FyZCIsIkdyaWQiLCJCdXR0b24iLCJKb2luR2FtZSIsIlNlbGVjdE1vdmUiLCJHYW1lU2hvdyIsInN0YXRlIiwicGxheWVyIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJwbGF5ZXJzIiwic2V0U3RhdGUiLCJwcm9wcyIsInBsYXllck9uZU1vdmUiLCJwbGF5ZXJUd29Nb3ZlIiwicGxheWVyT25lV2luQ291bnQiLCJwbGF5ZXJUd29XaW5Db3VudCIsIndpbm5lciIsInJlc3VsdCIsImNvbXBsZXRlZCIsImNvbXBsZXRlIiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJwbGF5ZXJPbmUiLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInBsYXllclR3byIsIndhZ2VyIiwiYWRkcmVzcyIsInRleHRBbGlnbiIsInRpdGxlIiwidXRpbHMiLCJmcm9tV2VpIiwiZ2FtZXMiLCJyZW5kZXJJbmZvIiwiZ2FtZSIsInF1ZXJ5IiwibWV0aG9kcyIsImNhbGwiLCJzdW1tYXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFNLEFBQU07O0FBQ3JCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQWdCOzs7Ozs7O0FBVnZCO0FBQ0E7OztJLEFBWU07Ozs7Ozs7Ozs7Ozs7O2dOLEFBQ0o7Y0FDVSxBQUVWO0EsQUFIUTtBQUFBLEFBQ047Ozs7U0F5Qko7Ozs7Ozs7Ozs7O3VCQUUwQixjQUFBLEFBQUssSSxBQUFMLEFBQVM7O21CQUF6QjtBLG1DQUNOOztxQkFBQSxBQUFLLFNBQVMsRUFBQyxRQUFRLFFBQXZCLEFBQWMsQUFBUyxBQUFROzs7Ozs7Ozs7Ozs7Ozs7QUFHbkM7Ozs7OztpQ0FDYzttQkFTTixLQVRNLEFBU0Q7VUFUQyxBQUVSLHVCQUZRLEFBRVI7VUFGUSxBQUdSLHVCQUhRLEFBR1I7VUFIUSxBQUlSLDJCQUpRLEFBSVI7VUFKUSxBQUtSLDJCQUxRLEFBS1I7VUFMUSxBQU1SLGdCQU5RLEFBTVI7VUFOUSxBQU9SLGdCQVBRLEFBT1I7VUFQUSxBQVFSLG1CQVJRLEFBUVIsQUFHRjs7VUFBSSxnQkFBSixBQUNBO1VBQUcsYUFBSCxBQUFnQixNQUFLLEFBQ25CO21CQUFBLEFBQVcsQUFDWjtBQUZELGFBRU8sQUFDTDttQkFBQSxBQUFXLEFBQ1o7QUFFRDs7VUFBTTtnQkFDSixBQUNVLEFBQ1I7Y0FIVSxBQUNaLEFBRVE7QUFGUixBQUNFLE9BRlU7Z0JBS1osQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOOzBCQUFnQixLQUFBLEFBQUssTUFIdkIsQUFHNkIsQUFDM0I7ZUFBTyxFQUFFLGNBVEMsQUFLWixBQUlTLEFBQWdCO0FBSnpCLEFBQ0U7Z0JBS0YsQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOOzBCQUFnQixLQUFBLEFBQUssTUFIdkIsQUFHNkIsQUFDM0I7ZUFBTyxFQUFFLGNBZkMsQUFXWixBQUlTLEFBQWdCO0FBSnpCLEFBQ0U7Z0JBS0YsQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO2VBQU8sRUFBRSxjQXBCQyxBQWlCWixBQUdTLEFBQWdCO0FBSHpCLEFBQ0U7Z0JBSUYsQUFDVSxBQUNSO2NBeEJVLEFBc0JaLEFBRVE7QUFGUixBQUNFO21DQUl5QixLQUFBLEFBQUssTUFBOUIsQUFBb0MsUUFEdEMsQUFFRTs4QkFBTSxBQUFDLG9DQUFTLFNBQVMsS0FBQSxBQUFLLE1BQXhCLEFBQThCLFNBQVMsT0FBUSxLQUFBLEFBQUssTUFBcEQsQUFBMEQsT0FBTyxXQUFXLEtBQUEsQUFBSyxNQUFqRixBQUF1RjtzQkFBdkY7d0JBRlIsQUFFUSxBQUNOO0FBRE07U0FBQTtlQUNDLEVBQUUsV0E3QmIsQUFBYyxBQTBCWixBQUdTLEFBQWEsQUFJeEI7QUFQRSxBQUNFOzsyQ0FNRyxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBOzs7OzZCQUVELEFBQ047NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDQTtBQURBO0FBQUEsT0FBQSxrQkFDQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBQSxxQkFBb0IsS0FBQSxBQUFLLE1BQXpCLEFBQStCLE9BRC9CLEFBQ0EsQUFDRSxzQkFBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FGRixBQUVFLEFBQ0EsbUNBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQVMsbUJBQUEsQUFBSyxNQUFMLEFBQVcsUUFBUSxLQUFBLEFBQUssTUFBeEIsQUFBOEIsT0FBdkMsQUFBUyxBQUFxQyxXQUhoRCxBQUdFLEFBQ0EsMkJBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQUEsd0JBQXVCLEtBQUEsQUFBSyxNQUo5QixBQUlFLEFBQWtDLEFBQ2pDLGFBTEgsQUFLRyxBQUFLLEFBQ04sOEJBQUEsQUFBQztnQkFDUyxLQUFBLEFBQUssTUFEZixBQUNxQixBQUNyQjtpQkFBVyxLQUFBLEFBQUssTUFGaEIsQUFFc0IsQUFDdEI7bUJBQWEsS0FBQSxBQUFLLE1BSGxCLEFBR3dCLEFBQ3hCO21CQUFhLEtBQUEsQUFBSyxNQUpsQixBQUl3Qjs7b0JBSnhCO3NCQVBKLEFBQ0UsQUFNRSxBQVFMO0FBUks7QUFDQTs7Ozs7NkcsQUEzRnVCOzs7OzttQkFDckI7QSx1QkFBTyxvQkFBSyxNQUFBLEFBQU0sTSxBQUFYLEFBQWlCOzt1QkFFUixLQUFBLEFBQUssUUFBTCxBQUFhLE8sQUFBYixBQUFvQjs7bUJBQXBDO0E7OzJCQUdLLE1BQUEsQUFBTSxNQURWLEFBQ2dCLEFBQ3JCO3lCQUFPLFFBRkYsQUFFRSxBQUFRLEFBQ2Y7eUJBQU8sUUFIRixBQUdFLEFBQVEsQUFDZjs2QkFBVyxRQUpOLEFBSU0sQUFBUSxBQUNuQjs2QkFBVyxRQUxOLEFBS00sQUFBUSxBQUNuQjt5QkFBTyxRQU5GLEFBTUUsQUFBUSxBQUNmO2lDQUFlLFFBUFYsQUFPVSxBQUFRLEFBQ3ZCO2lDQUFlLFFBUlYsQUFRVSxBQUFRLEFBQ3ZCO3FDQUFtQixRQVRkLEFBU2MsQUFBUSxBQUMzQjtxQ0FBbUIsUUFWZCxBQVVjLEFBQVEsQUFDM0I7MEJBQVEsUUFYSCxBQVdHLEFBQVEsQUFDaEI7MEJBQVEsUUFaSCxBQVlHLEFBQVEsQUFDaEI7NkJBQVcsUSxBQWJOLEFBYU0sQUFBUTtBQWJkLEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSxBQVhpQixBQTBHdkI7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTmF0ZS9ldGhlcml1bS1yb2NrLXBhcGVyLXNjaXNzb3JzIn0=