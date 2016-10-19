'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = require('react');

var Component = _require.Component;

var storeShape = require('./store-shape');

var ConnectedComponent = function (_Component) {
    _inherits(ConnectedComponent, _Component);

    function ConnectedComponent() {
        _classCallCheck(this, ConnectedComponent);

        var _this = _possibleConstructorReturn(this, (ConnectedComponent.__proto__ || Object.getPrototypeOf(ConnectedComponent)).apply(this, arguments));

        if (!_this.state) {
            _this.state = {};
        }
        var store = _this.context.store;
        var state = _this.state;
        var collections = _this.constructor.collections;

        _this.dispatch = store.dispatch.bind(store);
        Object.assign(state, store.state.get(collections));
        store.observe(collections, function (state) {
            return _this.setState(state.get(collections));
        });
        return _this;
    }

    return ConnectedComponent;
}(Component);

ConnectedComponent.contextTypes = {
    store: storeShape
};
exports.default = ConnectedComponent;
;