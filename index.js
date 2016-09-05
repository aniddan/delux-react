const Store = require('delux');
const React = require('react');
const Provider = require('./provider');
const ConnectedComponent = require('./connected');

module.exports = {Provider, ConnectedComponent};

Object.defineProperty(Store.prototype, 'Provider', {
    get () {
        return (props) => React.createElement(Provider, Object.assign({
            store: this,
        }, props));
    }
});
