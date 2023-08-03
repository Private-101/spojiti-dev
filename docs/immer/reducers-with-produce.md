https://github.com/chidimo/immutability-in-js/blob/master/src/reducers-with-produce.js

```javascript
const { produce } = require('immer');
console.log('reducers-with-produce');

// produce(state, callback) => nextState

const initState = {
  pets: [ 'dog', 'cat' ],
  packages: [
    { name: 'react', installed: true },
    { name: 'redux', installed: true },
  ],
};

console.log(initState);

const newPackage = { name: 'immer', installed: false };

// if we were to do this the normal way
const updateReducer = (state = initState, action) => {
  switch (action.type) {
  case 'ADD_PACKAGE':
    return {
      ...state,
      packages: [ ...state.packages, action.package ],
    };

  case 'UPDATE_INSTALLED':
    return {
      ...state,
      packages: state.packages.map(pack =>
        pack.name === action.name
          ? { ...pack, installed: action.installed }
          : pack
      ),
    };
  default:
    return state;
  }
};

// Note that we had to pass in our state manually for our example but when working with
// React’s useReducer hook, the state is passed automatically by the dispatch function.

const nextState = updateReducer(initState, {
  type: 'ADD_PACKAGE',
  package: newPackage,
});

const nextState2 = updateReducer(nextState, {
  type: 'UPDATE_INSTALLED',
  name: 'immer',
  installed: true,
});

const updateReducerWithProduce = (state = initState, action) =>
  produce(state, draft => {
    switch (action.type) {
    case 'ADD_PACKAGE':
      draft.packages.push(action.package);
      break;
    case 'UPDATE_INSTALLED': {
      const package = draft.packages.filter(p => p.name === action.name)[0];
      if (package) package.installed = action.installed;
      break;
    }
    default:
      break;
    }
  });

const nextImmerState = updateReducerWithProduce(initState, {
  type: 'ADD_PACKAGE',
  package: newPackage,
});

const nextImmerState2 = updateReducerWithProduce(nextImmerState, {
  type: 'UPDATE_INSTALLED',
  name: 'immer',
  installed: true,
});

console.log(nextState);
console.log(nextState2);
console.log(nextImmerState);
console.log(nextImmerState2);
```