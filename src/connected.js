const {Component} = require('react');
const storeShape = require('./store-shape');

export default class ConnectedComponent extends Component {
    constructor () {
        super(...arguments);
        if (!this.state) {
            this.state = {};
        }
        const {context: {store}, state, constructor: {collections}} = this;
        this.dispatch = ::store.dispatch;
        Object.assign(state, store.state.get(collections));
        store.observe(collections, (state) => this.setState(state.get(collections)));
    }
    static contextTypes = {
        store: storeShape
    }
};
