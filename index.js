const Store = require('delux');

Store.prototype.rerender = function (collectionNames, componentInstance) {
    this.observe(collectionNames, () => componentInstance.forceUpdate());
};
