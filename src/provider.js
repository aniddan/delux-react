const {PropTypes, Component} = require('react');
const storeShape = require('./store-shape');

export default class Provider extends Component {
    static propTypes = {
        store: storeShape,
        children: PropTypes.element.isRequired
    }
    static childContextTypes = {
        store: storeShape
    }
    getChildContext () {
        return {store: this.props.store};
    }
    render () {
        return this.props.children;
    }
}
