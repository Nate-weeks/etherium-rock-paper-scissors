'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _RockPaperScissors = require('./build/RockPaperScissors.json');

var _RockPaperScissors2 = _interopRequireDefault(_RockPaperScissors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
  return new _web2.default.eth.Contract(JSON.parse(_RockPaperScissors2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyaXVtL2dhbWUuanMiXSwibmFtZXMiOlsid2ViMyIsIkdhbWUiLCJhZGRyZXNzIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUFpQixBQUFqQixBQUVBOzs7Ozs7a0JBQWUsVUFBQyxBQUFELFNBQWEsQUFDMUI7U0FBTyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FDTCxLQUFLLEFBQUwsTUFBVyw0QkFBSyxBQUFoQixBQURLLFlBRUwsQUFGSyxBQUFQLEFBSUQ7QUFMRCIsImZpbGUiOiJnYW1lLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9OYXRlL2V0aGVyaXVtLXJvY2stcGFwZXItc2Npc3NvcnMifQ==