'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _RockPaperScissorsFactory = require('./build/RockPaperScissorsFactory.json');

var _RockPaperScissorsFactory2 = _interopRequireDefault(_RockPaperScissorsFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_RockPaperScissorsFactory2.default.interface), '0x6f9Da511AFA84612D01fAdF71e7cd28fF0b96fC0');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyaXVtL2ZhY3RvcnkuanMiXSwibmFtZXMiOlsid2ViMyIsIlJvY2tQYXBlclNjaXNzb3JzRmFjdG9yeSIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUVBLEFBQU8sQUFBUCxBQUFxQyxBQUFyQzs7Ozs7O0FBRUEsSUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUNmLEtBQUssQUFBTCxNQUFXLG1DQUF5QixBQUFwQyxBQURlLFlBRWYsQUFGZSxBQUFqQixBQUtBOztrQkFBZSxBQUFmIiwiZmlsZSI6ImZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL05hdGUvZXRoZXJpdW0tcm9jay1wYXBlci1zY2lzc29ycyJ9