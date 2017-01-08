#Problem 
Managing our application state will start to get tricky as the complexity of
our application grows. The more Component's and deeper the component tree's become 
passing data down as props to all these leaf components will start to become 
tedious, error prone and difficult to rearrange component tree's. 

Redux can help with this.
<div><img src="./docs/output.png" /></div>
Having your application data in store's allows you to "[connect](https://egghead.io/lessons/javascript-redux-generating-containers-with-connect-from-react-redux-visibletodolist)" components at any level deep 
in a tree to this data.  

- after the API data has been fetched utilize redux and "[connect](https://egghead.io/lessons/javascript-redux-generating-containers-with-connect-from-react-redux-visibletodolist)" it, 
to the App component. The goal is to have no change in the User experience. But to have our data hooked up through redux  

### What we will need to implement:
- A top level reducer which holds all our reducers/stores.
- An api Store AKA reducer (This holds the data that comes back from the API)

### React specific bindings
- A Provider
- A higher order connect Component responsible for mapping the reducers data to props passed into
the connected component

From a high level it might look like this:
<div><img src="./docs/output2.png" /></div>


# Tips
- Create the a top level reducer
```js
import { combineReducers } from 'redux'
import { reducer1 } from './path/to/reducer';
import { reducer2 } from './path/to/reducer';
import { reducer3 } from './path/to/reducer';

const rootReducer = combineReducers({ 
    reducer1,
    reducer2,
    reducer3,
});
export default rootReducer;
```
In our case we only have one reducer we want to create to hook up to the rootReducer.
- Create our apiData reducer A simple function that returns it's input, and has a default input
```js
export default (state = {}) => {
    return state;
};
```

- Initialize our reducer with data after we have fetched it from the API
```js
import createStore from 'redux';
const initialReducerState = {
    reducer1 : {...},
    reducer2 : {...},
    reducer3 : {...}
}
const store = createStore(rootReducer, initialReducerState); 
```

With those steps completed we now have a store we can connect our react components to.

- Setup a Provider
```js
import Provider from 'react-redux';
    render(
        <Provider store={store}>
            <TopLevelReactComponent />
        </Provider>
    )
```
A Provider is the bit of magic that allows us to get data to any react component that is in `TopLevelReactComponent`
it uses an implementation called [context](https://facebook.github.io/react/docs/context.html) that react provides with caution. 

- Now that the data is accessible to our react components. Setup the App to "[connect](https://egghead.io/lessons/javascript-redux-generating-containers-with-connect-from-react-redux-visibletodolist)" to the reducer with API data
```js

const mapStateToProps = ({ reducerName }) => ({ nameOfPropThatTheReactComponentAccesses: reducerName.property1, ... });

export default connect(mapStateToProps)(ReactComponentClass)
```

## Solution
- [Solution](https://github.com/azaharakis/app-with-server-rendering/compare/09c9e80...9b8e557)