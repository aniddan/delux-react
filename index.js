const Store = require('delux');
const Provider = require('./src/provider');
const ConnectedComponent = require('./src/connected');

module.exports = {Provider, ConnectedComponent};

Object.defineProperty(Store.prototype, 'Provider', {
    get () {
        return Provider.StoreConstructor(this);
    }
});
