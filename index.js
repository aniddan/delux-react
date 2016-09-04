const Store = require('delux');
const React = require('react');

class Provider extends React.Component {
    static get propTypes () {
        return {
            store: React.PropTypes.instanceOf(Store).isRequired,
            children: React.PropTypes.element.isRequired
        };
    }
    getChildContext () {
        return {
            store: this.props.store
        };
    }
    render () {
        return this.props.children;
    }
}

Provider.childContextTypes = {
    store: React.PropTypes.instanceOf(Store)
};

function connect (component, collection_names) {
    collection_names = validateArray(collection_names);
    let connected = class extends component {
        constructor (props, context) {
            super(props, context);
            let {store} = context;
            let {state, dispatch} = store;
            Object.assign(this, {
                dispatch: dispatch.bind(store),
                state: Object.assign(
                    this.state || {},
                    getRelevantKeys(state, collection_names)
                )
            });
            context.store.observe(collection_names, state =>
                this.setState(getRelevantKeys(state, collection_names))
            );
        }
        static get contextTypes () {
            return {
                store: React.PropTypes.instanceOf(Store)
            };
        }
    };

    return connected;
}

module.exports = {Provider, connect};

Object.defineProperty(Store.prototype, 'Provider', {
    get () {
        return (props) => React.createElement(Provider, Object.assign({
            store: this,
        }, props));
    }
});

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
