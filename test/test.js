const Store = require('delux');
const React = require('react');
const ReactDOM = require('react-dom');
const {ConnectedComponent} = require('..');

let store = new Store;

store.images = new Store.Collection({});

store.images.on('addImage', (action, state) => {
    state[action.payload.id] = action.payload;
});

let id = 0;

class App extends ConnectedComponent {
    static get collections () {
        return ['images'];
    }
    render () {
        return React.createElement('div', {
            children: [
                JSON.stringify(this.state.images),
                React.createElement('button', {
                    children: 'add',
                    onClick: () => this.dispatch({
                        type: 'addImage',
                        payload: {
                            id: id++,
                            url: 'https://media.giphy.com/media/q5WCmw3RqDmxy/giphy.gif'
                        }
                    })
                })
            ]
        });
    }
}

ReactDOM.render(
    React.createElement(store.Provider, {
        children: React.createElement(App)
    }),
    document.querySelector('div')
);
