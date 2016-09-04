const Store = require('delux');
const React = require('react');
const createComponent = require('react-unit');
const {connect} = require('.');

let store = new Store;

store.images = new Store.Collection({});

store.images.on('addImage', (action, state) => state[action.payload.id] = action.payload);

class App extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        console.log(this.state.images['1']);
        return React.createElement('div', {
            children: JSON.stringify(this.state.images['1'])
        });
    }
}

createComponent(
    React.createElement(store.Provider, {
        children: React.createElement(connect(App, 'images'))
    })
);

store.dispatch({
    type: 'addImage',
    payload: {
        id: '1',
        url: 'https://media.giphy.com/media/q5WCmw3RqDmxy/giphy.gif'
    }
});
