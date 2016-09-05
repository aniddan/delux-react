const Store = require('delux');
const React = require('react');
const {PropTypes, Component} = React;

class Provider extends Component {
    getChildContext () {
        return {store: this.props.store};
    }
    render () {
        return this.props.children;
    }
}

Provider.propTypes = {
    store: PropTypes.instanceOf(Store).isRequired,
    children: PropTypes.element.isRequired
};

Provider.childContextTypes = {
    store: PropTypes.instanceOf(Store).isRequired
};

module.exports = Provider;
