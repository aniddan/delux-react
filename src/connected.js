const Store = require('delux');
const React = require('react');
const {PropTypes} = React;

class ConnectedComponent extends React.Component {
    constructor (props, context) {
        super(...arguments);
        this.connect(context);
        if (this.init) {
            this.init(...arguments);
        }
    }
    connect (context) {
        let {store} = context || this.context;
        let {state, dispatch} = store;
        this.dispatch = dispatch.bind(store);
        this.state = Object.assign(this.state || {}, getRelevantKeys(state, this.constructor.collections));
        store.observe(validateArray(this.constructor.collections), updateState.bind(this));
    }
}

ConnectedComponent.contextTypes = {
    store: PropTypes.instanceOf(Store)
};

module.exports = ConnectedComponent;

function updateState (state) {
    this.setState(getRelevantKeys(state, this.constructor.collections));
}

function validateArray (a) {
    if (Array.isArray(a)) {
        return a;
    }
    else {
        return [a];
    }
}

function getRelevantKeys (object, keys) {
    let relevant = {};
    for (let key of keys) {
        relevant[key] = object[key];
    }
    return relevant;
}
