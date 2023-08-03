https://github.com/chidimo/immutability-in-js/blob/master/src/reducers-with-produce.js

```javascript
const { produce } = require('immer');
console.log('reducers-with-curried-produce');

// produce(callback) => (state, ...args) => nextState

const newPackage = { name: 'immer', installed: false };

const initState = {
  pets: [ 'dog', 'cat' ],
  packages: [
    { name: 'react', installed: true },
    { name: 'redux', installed: true },
  ],
};

const curriedProduce = produce((draft, action) => {
  switch (action.type) {
  case 'ADD_PACKAGE':
    draft.packages.push(action.package);
    break;
  case 'SET_INSTALLED': {
    const package = draft.packages.filter(p => p.name === action.name)[0];
    if (package) package.installed = action.installed;
    break;
  }
  default:
    break;
  }
});

const nextState = curriedProduce(initState, {
  type: 'ADD_PACKAGE',
  package: newPackage,
});

const nextState2 = curriedProduce(nextState, {
  type: 'SET_INSTALLED',
  name: 'immer',
  installed: true,
});

console.log(curriedProduce);
console.log(initState);
console.log(nextState);
console.log(nextState2);
```