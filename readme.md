# Delux-React

Delux bindings for React

```JavaScript
import Store, {Collection} from 'delux';
import React from 'react';
import {ConnectedComponent} from 'delux-react';

class myComponent extends ConnectedComponent {
  static get collections () {
      return ['images'];
  }
  render () {
    return <div>{JSON.stringify(this.state.images)}</div>;
  }
}

let store = new Store ();

store.images = new Collection({});

<Provider store={store}>
  {connect(myComponent, ['images'])}
</Provider>
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
```

##### Description

The Provider is a [React component][React Component] which pass your [store][Delux Store] to it's child component through [context][React Context].

##### Props

 - **store** - Delux store to provide to the child component

#### ConnectedComponent

Creates React Components connected to the store.

##### Create a connected component

```JavaScript
// ES6

class MyComponent extends ConnectedComponent {
    //...
}

MyComponent.collections = collectionNames;

// ES6 static getter

class MyComponent extends ConnectedComponent {
    static get collections () {
        return collectionNames;
    }
    //...
}

// ESNext

class MyComponent extends ConnectedComponent {
    static collections = collectionNames;
    //...
}
```

##### Parameters

- **collectionNames** - Store collections the component uses.

##### ConnectedComponent Instance

###### State

The state of the component is unified with the state of the selected collections.

###### Methods

**dispatch()**

Store#dispatch alias

### Testing

in /delux-react:

```Bash
 $ npm test
```
open /test/test.html with a modern browser.

[React-Redux]: https://github.com/reactjs/react-redux
[Subclassing]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Sub_classing_with_extends
[Delux Store]: https://github.com/aniddan/delux/blob/master/readme.md#store
[React Component]: [https://facebook.github.io/react/docs/component-api.html]
[React Context]: https://facebook.github.io/react/docs/context.html
