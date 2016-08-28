const React = require('react');

module.exports = function connect (reactElement, store, collectionNames) {
    let clone = React.cloneElement(reactElement, {store});
    store.observe(collectionNames, () => clone.forceUpdate());
    return clone;
};
