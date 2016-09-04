# Delux-React

Delux bindings for React

```JavaScript
import Store from 'delux';
import React from 'react';
import {connect} from 'delux-react';

class myComponent extends React.Component {
  render () {
    return <div>{JSON.stringify(this.props.store)}</div>;
  }
}

let store = new Store ();

store.images = new Store.Collection();

<store.Provider>
  {connect(myComponent, ['images'])}
</store.Provider>
```

### Features

 - [Simple React-Redux inspired syntax][React-Redux]
 - [Extendable connected components][Subclassing]

### API Reference

#### Provider

Provider wraps connected components to the store.

##### Create a Provider

```JavaScript
<Provider store={store}></Provider>
// or
<store.Provider></store.Provider>
```

##### Description

The Provider is a [React component][React Component] which pass your [store][Delux Store] to it's child component through [context][React Context].

##### Props

 - **store** - Delux store to provide to the child component

#### connect

Connects components to the store.

##### Paramaters

- **component** - The React Component to connect.
- **collectionNames** - The collections to set to the component state and update by.

##### Connect a component

```JavaScript
let connectedComponent = connect(MyComponent, ['myCollection']);
```

##### Description

Connect is a function which extends a component to use a Delux store through it's context.

[React-Redux]: https://github.com/reactjs/react-redux
[Subclassing]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Sub_classing_with_extends
[Delux Store]: https://github.com/aniddan/delux/blob/master/readme.md#store
[React Component]: [https://facebook.github.io/react/docs/component-api.html]
[React Context]: https://facebook.github.io/react/docs/context.html
