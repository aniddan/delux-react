const Store = require('delux');
const React = require('react');
const {PropTypes} = React;

class ConnectedComponent extends React.Component {
    constructor (props, collectionNames) {
        super(props);
        let collections = {};
        this.collectionNames = validateArray(collectionNames);
        for (let collectionName of this.collectionNames) {
            collections[collectionName] = {};
        }
        this.state = collections;
        this.componentDidMount = this.connect.bind(this);
    }
    connect () {
        let {store} = this.context;
        let {state, dispatch} = store;
        this.dispatch = dispatch.bind(store);
        updateState.call(this, state);
        store.observe(this.collectionNames, updateState.bind(this));
    }
}

ConnectedComponent.contextTypes = {
    store: PropTypes.instanceOf(Store)
};

module.exports = ConnectedComponent;

function updateState (state) {
    this.setState(getRelevantKeys(state, this.collectionNames));
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
