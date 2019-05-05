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

var _jsxFileName = '/Users/Nate/etherium-rock-paper-scissors/components/SelectMove.js';
//SelectMove.js - form that handles for the selection of a move in a radio-button menu

var SelectMove = function (_Component) {
  (0, _inherits3.default)(SelectMove, _Component);

  function SelectMove() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SelectMove);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SelectMove.__proto__ || (0, _getPrototypeOf2.default)(SelectMove)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      selected: '1',
      loading: false,
      errorMessage: ''

      // function handles for the click of radio buttons
    }, _this.handleChange = function (e, _ref2) {
      var value = _ref2.value;
      return _this.setState({ selected: value });
    }, _this.onSubmit = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var game;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                game = (0, _game2.default)(_this.props.address);

                _this.setState({ loading: true, errorMessage: '' });
                // handle for player 1 move

                if (!(_this.props.player == _this.props.playerOne)) {
                  _context.next = 16;
                  break;
                }

                _context.prev = 4;
                _context.next = 7;
                return game.methods.playerOneMove(_this.state.selected).send({
                  from: _this.props.player
                });

              case 7:
                _routes.Router.pushRoute('/game/' + _this.props.address);
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](4);

                _this.setState({
                  errorMessage: _context.t0.message
                });

              case 13:
                _this.setState({ loading: false });
                _context.next = 26;
                break;

              case 16:
                _context.prev = 16;
                _context.next = 19;
                return game.methods.playerTwoMove(_this.state.selected).send({
                  from: _this.props.player
                });

              case 19:
                _routes.Router.pushRoute('/game/' + _this.props.address);
                _context.next = 25;
                break;

              case 22:
                _context.prev = 22;
                _context.t1 = _context['catch'](16);

                _this.setState({
                  errorMessage: _context.t1.message
                });

              case 25:
                _this.setState({ loading: false });

              case 26:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[4, 10], [16, 22]]);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  // handles for the submission of a move - re-renders the page after success or fail


  (0, _createClass3.default)(SelectMove, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_semanticUiReact.Form, { error: !!this.state.errorMessage, onSubmit: this.onSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, 'Select a Move!'), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, {
        radio: true,
        label: 'Rock',
        name: 'checkboxRadioGroup',
        value: '1',
        checked: this.state.selected === '1',
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, {
        radio: true,
        label: 'Paper',
        name: 'checkboxRadioGroup',
        value: '2',
        checked: this.state.selected === '2',
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, {
        radio: true,
        label: 'Scissors',
        name: 'checkboxRadioGroup',
        value: '3',
        checked: this.state.selected === '3',
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, 'Choose your Move!'));
    }
  }]);

  return SelectMove;
}(_react.Component);

exports.default = SelectMove;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VsZWN0TW92ZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNoZWNrYm94IiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkJ1dHRvbiIsIkdhbWUiLCJ3ZWIzIiwiUm91dGVyIiwiU2VsZWN0TW92ZSIsInN0YXRlIiwic2VsZWN0ZWQiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwic2V0U3RhdGUiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJnYW1lIiwicHJvcHMiLCJhZGRyZXNzIiwicGxheWVyIiwicGxheWVyT25lIiwibWV0aG9kcyIsInBsYXllck9uZU1vdmUiLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJwbGF5ZXJUd29Nb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBVSxBQUFNLEFBQU8sQUFBUzs7QUFDekMsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQWM7Ozs7O0FBTnZCOztJLEFBU007Ozs7Ozs7Ozs7Ozs7OztvTixBQUNKO2dCQUFRLEFBQ0ksQUFDVjtlQUZNLEFBRUcsQUFDVDtvQkFBYSxBQUdmOztBLEFBTlE7QUFBQSxBQUNOLGEsQUFNRixlQUFlLFVBQUEsQUFBQyxVQUFEO1VBQUEsQUFBTSxjQUFOLEFBQU07YUFBWSxNQUFBLEFBQUssU0FBUyxFQUFDLFVBQWpDLEFBQWtCLEFBQWMsQUFBVztBLGEsQUFHMUQ7MkZBQVcsaUJBQUEsQUFBTyxPQUFQO1lBQUE7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1Q7c0JBQUEsQUFBTSxBQUNBO0FBRkcsdUJBRUksb0JBQUssTUFBQSxBQUFLLE1BRmQsQUFFSSxBQUFnQixBQUM3Qjs7c0JBQUEsQUFBSyxTQUFTLEVBQUUsU0FB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