https://github.com/chidimo/immutability-in-js/blob/master/src/reducers-with-produce.js

```javascript
const { produce } = require('immer');
console.log('immer-produce');

// produce(state, callback) => nextState

const initState = {
  pets: ['dog', 'cat'],
  packages: [
    { name: 'react', installed: true },
    { name: 'redux', installed: true },
  ],
};

// to add a new package
const newPackage = { name: 'immer', installed: false };

const nextState = produce(initState, draft => {
  draft.packages.push(newPackage);
});

console.log(nextState);
```