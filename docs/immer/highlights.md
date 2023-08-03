https://www.smashingmagazine.com/2020/06/better-reducers-with-immer/

Better Reducers With Immer
13 min read
Tools, React, Redux, JavaScript
Share on Twitter, LinkedIn
Chidi Orji
ABOUT THE AUTHOR
Awesome frontend developer who loves everything coding. I’m a lover of choral music and I’m working to make it more accessible to the world, one upload at a … More about Chidi ↬

Email Newsletter
Your email
Weekly tips on front-end & UX.
Trusted by 200,000+ folks.

More than 10M icons 30% off
More than 10M icons 30% off
Boost your skills online, with our friendly online workshops on front-end and design.
Smart Interface Design Patterns, 9h-video course
Boost your skills online, with our friendly online workshops on front-end and design.
SmashingConf UX & Design: Antwerp 2023
Introducing Netlify Connect
Introducing Netlify Connect
In-demand skills with Northwestern online
Prepare for today’s communication roles Northwestern’s MS in Information Design.
Boost your skills online, with our friendly online workshops on front-end and design.
Typography Masterclass, with Elliot Jay Stocks
Boost your skills online, with our friendly online workshops on front-end and design.
Smart Interface Design Checklists
In this article, we’re going to learn how to use Immer to write reducers. When working with React, we maintain a lot of state. To make updates to our state, we need to write a lot of reducers. Manually writing reducers results in bloated code where we have to touch almost every part of our state. This is tedious and error-prone. In this article, we’re going to see how Immer brings more simplicity to the process of writing state reducers.
As a React developer, you should be already familiar with the principle that state should not be mutated directly. You might be wondering what that means (most of us had that confusion when we started out).

This tutorial will do justice to that: you will understand what immutable state is and the need for it. You’ll also learn how to use Immer to work with immutable state and the benefits of using it. You can find the code in this article in this Github repo.

Immutability In JavaScript And Why It Matters #
Immer.js is a tiny JavaScript library was written by Michel Weststrate whose stated mission is to allow you “to work with immutable state in a more convenient way.”

But before diving into Immer, let’s quickly have a refresher about immutability in JavaScript and why it matters in a React application.

The latest ECMAScript (aka JavaScript) standard defines nine built-in data types. Of these nine types, there are six that are referred to as primitive values/types. These six primitives are undefined, number, string, boolean, bigint, and symbol. A simple check with JavaScript’s typeof operator will reveal the types of these data types.

console.log(typeof 5) // number
console.log(typeof 'name') // string
console.log(typeof (1 < 2)) // boolean
console.log(typeof undefined) // undefined
console.log(typeof Symbol('js')) // symbol
console.log(typeof BigInt(900719925474)) // bigint
Copy
A primitive is a value that is not an object and has no methods. Most important to our present discussion is the fact that a primitive’s value cannot be changed once it is created. Thus, primitives are said to be immutable.

The remaining three types are null, object, and function. We can also check their types using the typeof operator.

console.log(typeof null) // object
console.log(typeof [0, 1]) // object
console.log(typeof {name: 'name'}) // object
const f = () => ({})
console.log(typeof f) // function
Copy
These types are mutable. This means that their values can be changed at any time after they are created.

You might be wondering why I have the array [0, 1] up there. Well, in JavaScriptland, an array is simply a special type of object. In case you’re also wondering about null and how it is different from undefined. undefined simply means that we haven’t set a value for a variable while null is a special case for objects. If you know something should be an object but the object is not there, you simply return null.

To illustrate with a simple example, try running the code below in your browser console.

console.log('aeiou'.match(/[x]/gi)) // null
console.log('xyzabc'.match(/[x]/gi)) // [ 'x' ]
Copy
String.prototype.match should return an array, which is an object type. When it can’t find such an object, it returns null. Returning undefined wouldn’t make sense here either.

Enough with that. Let’s return to discussing immutability.

Web forms are at the center of every meaningful interaction, so they’re worth getting a firm handle on. Meet Adam Silver’s Form Design Patterns, a practical guide to designing and building forms for the web.

Jump to table of contents ↬
Feature Panel
According to the MDN docs:

“All types except objects define immutable values (that is, values which can’t be changed).”
This statement includes functions because they are a special type of JavaScript object. See function definition here.

Let’s take a quick look at what mutable and immutable data types mean in practice. Try running the below code in your browser console.

let a = 5;
let b = a
console.log(`a: ${a}; b: ${b}`) // a: 5; b: 5
b = 7
console.log(`a: ${a}; b: ${b}`) // a: 5; b: 7
Copy
Our results show that even though b is “derived” from a, changing the value of b doesn’t affect the value of a. This arises from the fact that when the JavaScript engine executes the statement b = a, it creates a new, separate memory location, puts 5 in there, and points b at that location.

What about objects? Consider the below code.

let c = { name: 'some name'}
let d = c;
console.log(`c: ${JSON.stringify(c)}; d: ${JSON.stringify(d)}`) // {"name":"some name"}; d: {"name":"some name"}
d.name = 'new name'
console.log(`c: ${JSON.stringify(c)}; d: ${JSON.stringify(d)}`) // {"name":"new name"}; d: {"name":"new name"}
Copy
We can see that changing the name property via variable d also changes it in c. This arises from the fact that when the JavaScript engine executes the statement, c = { name: 'some name' }, the JavaScript engine creates a space in memory, puts the object inside, and points c at it. Then, when it executes the statement d = c, the JavaScript engine just points d to the same location. It doesn’t create a new memory location. Thus any changes to the items in d is implicitly an operation on the items in c. Without much effort, we can see why this is trouble in the making.

Imagine you were developing a React application and somewhere you want to show the user’s name as some name by reading from variable c. But somewhere else you had introduced a bug in your code by manipulating the object d. This would result in the user’s name appearing as new name. If c and d were primitives we wouldn’t have that problem. But primitives are too simple for the kinds of state a typical React application has to maintain.

This is about the major reasons why it is important to maintain an immutable state in your application. I encourage you to check out a few other considerations by reading this short section from the Immutable.js README: the case for immutability.

Having understood why we need immutability in a React application, let’s now take a look at how Immer tackles the problem with its produce function.

Immer’s produce Function #
Immer’s core API is very small, and the main function you’ll be working with is the produce function. produce simply takes an initial state and a callback that defines how the state should be mutated. The callback itself receives a draft (identical, but still a copy) copy of the state to which it makes all the intended update. Finally, it produces a new, immutable state with all the changes applied.

The general pattern for this sort of state update is:

// produce signature
produce(state, callback) => nextState
Copy
Let’s see how this works in practice.

import produce from 'immer'

const initState = {
  pets: ['dog', 'cat'],
  packages: [
    { name: 'react', installed: true },
    { name: 'redux', installed: true },
  ],
}

// to add a new package
const newPackage = { name: 'immer', installed: false }

const nextState = produce(initState, draft => {
  draft.packages.push(newPackage)
})
Copy
In the above code, we simply pass the starting state and a callback that specifies how we want the mutations to happen. It’s as simple as that. We don’t need to touch any other part of the state. It leaves initState untouched and structurally shares those parts of the state that we didn’t touch between the starting and the new states. One such part in our state is the pets array. The produced nextState is an immutable state tree that has the changes we’ve made as well as the parts we didn’t modify.

Armed with this simple, but useful knowledge, let’s take a look at how produce can help us simplify our React reducers.

Writing Reducers With Immer #
Suppose we have the state object defined below

const initState = {
  pets: ['dog', 'cat'],
  packages: [
    { name: 'react', installed: true },
    { name: 'redux', installed: true },
  ],
};
Copy
And we wanted to add a new object, and on a subsequent step, set its installed key to true

const newPackage = { name: 'immer', installed: false };
Copy
If we were to do this the usual way with JavaScripts object and array spread syntax, our state reducer might look like below.

const updateReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_PACKAGE':
      return {
        ...state,
        packages: [...state.packages, action.package],
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
Copy
We can see that this is unnecessarily verbose and prone to mistakes for this relatively simple state object. We also have to touch every part of the state, which is unnecessary. Let’s see how we can simplify this with Immer.

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
Copy
And with a few lines of code, we have greatly simplified our reducer. Also, if we fall into the default case, Immer just returns the draft state without us needing to do anything. Notice how there is less boilerplate code and the elimination of state spreading. With Immer, we only concern ourselves with the part of the state that we want to update. If we can’t find such an item, as in the `UPDATE_INSTALLED` action, we simply move on without touching anything else. The `produce` function also lends itself to currying. Passing a callback as the first argument to `produce` is intended to be used for currying. The signature of the curried `produce` is
//curried produce signature
produce(callback) => (state) => nextState
Copy
Let’s see how we can update our earlier state with a curried produce. Our curried produce would look like this:
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
Copy
The curried produce function accepts a function as its first argument and returns a curried produce that only now requires a state from which to produce the next state. The first argument of the function is the draft state (which will be derived from the state to be passed when calling this curried produce). Then follows every number of arguments we wish to pass to the function.

All we need to do now to use this function is to pass in the state from which we want to produce the next state and the action object like so.

// add a new package to the starting state
const nextState = curriedProduce(initState, {
  type: 'ADD_PACKAGE',
  package: newPackage,
});

// update an item in the recently produced state
const nextState2 = curriedProduce(nextState, {
  type: 'SET_INSTALLED',
  name: 'immer',
  installed: true,
});
Copy
Note that in a React application when using the useReducer hook, we don’t need to pass the state explicitly as I’ve done above because it takes care of that.

You might be wondering, would Immer be getting a hook, like everything in React these days? Well, you’re in company with good news. Immer has two hooks for working with state: the useImmer and the useImmerReducer hooks. Let’s see how they work.

Using The useImmer And useImmerReducer Hooks #
The best description of the useImmer hook comes from the use-immer README itself.

useImmer(initialState) is very similar to useState. The function returns a tuple, the first value of the tuple is the current state, the second is the updater function, which accepts an immer producer function, in which the draft can be mutated freely, until the producer ends and the changes will be made immutable and become the next state.
To make use of these hooks, you have to install them separately, in addition to the main Immer libarary.

yarn add immer use-immer
Copy
In code terms, the useImmer hook looks like below

import React from "react";
import { useImmer } from "use-immer";

const initState = {}
const [ data, updateData ] = useImmer(initState)
Copy
And it’s as simple as that. You could say it’s React’s useState but with a bit of steroid. To use the update function is very simple. It receives the draft state and you can modify it as much as you want like below.

// make changes to data
updateData(draft => {
  // modify the draft as much as you want.
})
Copy
The creator of Immer has provided a codesandbox example which you can play around with to see how it works.

useImmerReducer is similarly simple to use if you’ve used React’s useReducer hook. It has a similar signature. Let’s see what that looks like in code terms.

import React from "react";
import { useImmerReducer } from "use-immer";

const initState = {}
const reducer = (draft, action) => {
  switch(action.type) {      
    default:
      break;
  }
}

const [data, dataDispatch] = useImmerReducer(reducer, initState);
Copy
We can see that the reducer receives a draft state which we can modify as much as we want. There’s also a codesandbox example here for you to experiment with.

And that is how simple it is to use Immer hooks. But in case you’re still wondering why you should use Immer in your project, here’s a summary of some of the most important reasons I’ve found for using Immer.

Why You Should Use Immer #
If you’ve written state management logic for any length of time you’ll quickly appreciate the simplicity Immer offers. But that is not the only benefit Immer offers.

When you use Immer, you end up writing less boilerplate code as we have seen with relatively simple reducers. This also makes deep updates relatively easy.

With libraries such as Immutable.js, you have to learn a new API to reap the benefits of immutability. But with Immer you achieve the same thing with normal JavaScript Objects, Arrays, Sets, and Maps. There’s nothing new to learn.

Immer also provides structural sharing by default. This simply means that when you make changes to a state object, Immer automatically shares the unchanged parts of the state between the new state and the previous state.

With Immer, you also get automatic object freezing which means that you cannot make changes to the produced state. For instance, when I started using Immer, I tried to apply the sort method on an array of objects returned by Immer’s produce function. It threw an error telling me I can’t make any changes to the array. I had to apply the array slice method before applying sort. Once again, the produced nextState is an immutable state tree.

Immer is also strongly typed and very small at just 3KB when gzipped.

Conclusion #
When it comes to managing state updates, using Immer is a no-brainer for me. It’s a very lightweight library that lets you keep using all the things you’ve learned about JavaScript without trying to learn something entirely new. I encourage you to install it in your project and start using it right away. You can add use it in existing projects and incrementally update your reducers.

I’d also encourage you to read the Immer introductory blog post by Michael Weststrate. The part I find especially interesting is the “How does Immer work?” section which explains how Immer leverages language features such as proxies and concepts such as copy-on-write.

I’d also encourage you to take a look at this blog post: Immutability in JavaScript: A Contratian View where the author, Steven de Salas, presents his thoughts about the merits of pursuing immutability.

I hope that with the things you’ve learned in this post you can start using Immer right away.

RELATED RESOURCES #
use-immer, GitHub
Immer, GitHub
function, MDN web docs, Mozilla
proxy, MDN web docs, Mozilla
Object (computer science), Wikipedia
“Immutability in JS,” Orji Chidi Matthew, GitHub
“ECMAScript Data Types and Values,” Ecma International
Immutable collections for JavaScript, Immutable.js , GitHub
“The case for Immutability,” Immutable.js , GitHub
