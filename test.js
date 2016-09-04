const Store = require('delux');
require('.');
const React = require('react');
const createComponent = require('react-unit');

let store = new Store;

store.images = new Store.Collection({});

store.images.on('addImage', (action, state) => state[action.payload.id] = action.payload);

class App extends React.Component {
    constructor (props) {
        super(props);
        store.rerender('images', this);
    }
    render () {
        console.log(store.state.images['1']);
        return React.createElement('div', {
            children: JSON.stringify(store.state.images['1'])
        });
    }
}

store.dispatch({
    type: 'addImage',
    payload: {
        id: '1',
        url: 'https://media.giphy.com/media/q5WCmw3RqDmxy/giphy.gif'
    }
});

createComponent(React.createElement(App));
