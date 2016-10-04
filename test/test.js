const Store = require('delux');
const React = require('react');
const ReactDOM = require('react-dom');
const {Provider, ConnectedComponent} = require('..');

const store = new Store;

store.images = new Store.Collection([]);

store.images.on('addImage', (images, {payload}) => images.concat(payload));

class App extends ConnectedComponent {
    constructor () {
        super(...arguments);
        this.state.images = [];
    }
    static collections = ['images']
    addImage () {
        this.dispatch({
            type: 'addImage',
            payload: 'https://unsplash.it/200/?random'
        });
    }
    render () {
        const {state: {images}} = this;
        const imageNodes = images.map((image, i) => <img width={200} height={200} key={i} src={image} />);
        return <div>
            <div><button onClick={::this.addImage}>add</button></div>
            {imageNodes}
        </div>
    }
}

ReactDOM.render(<Provider {...{store}}><App /></Provider>, document.querySelector('div'));
