'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _antd = require('antd');

var _uuid = require('./uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _resize = require('./resize');

var _resize2 = _interopRequireDefault(_resize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var T = _react2.default.PropTypes;

var ResizeTable = function (_Component) {
  _inherits(ResizeTable, _Component);

  function ResizeTable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ResizeTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ResizeTable.__proto__ || Object.getPrototypeOf(ResizeTable)).call.apply(_ref, [this].concat(args))), _this), _this.setColumnsWidth = function (id) {
      var me = $(_reactDom2.default.findDOMNode(_this));
      var table = me.find('#' + id);
      var colgroup = table.find('colgroup');
      var cols = colgroup.find('col');
      $(cols).each(function (index, el) {
        this.style.width = 'auto';
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ResizeTable, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      //  设置列表可拖动
      if (this.props.resizeColumn) {
        var me = $(_reactDom2.default.findDOMNode(this));
        var table = me.find('table');
        var id = (0, _uuid2.default)();
        table.attr('id', id);
        (0, _resize2.default)(id);
        // 去掉所有col上面的width
        this.setColumnsWidth(id);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_antd.Table, this.props);
    }
  }]);

  return ResizeTable;
}(_react.Component);

ResizeTable.defaultProps = {
  resizeColumn: true
};
ResizeTable.propTypes = {
  resizeColumn: T.bool
};
exports.default = ResizeTable;
//# sourceMappingURL=index.js.map