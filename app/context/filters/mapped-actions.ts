/*
Stop Using Giant Switch Statements in Your React Reducers
https://mparavano.medium.com/stop-using-giant-switch-statements-in-your-react-reducers-abfb8aa8ede7


If you’re reading this, you’re no doubt familiar with the common structure of a React reducer–a function that takes in state and an action which will go through a giant switch statement and return a new instance of state.

When I was learning Redux and then transitioned to useReducer with React Hooks, I found it extremely odd that there was no ‘cleaner’ feeling pattern for reducers.

Let the Record Show…
I’m not an anti-switcher.

“Wait! I thought you just said to stop using them?!”
–You

I use switch statements all the time, but not with reducers.

It always feels like a code smell to me when used in a reducer because of the size of the switch and the potential complexity of the code that could be contained in each case. Even when we try to keep as much logic as possible out of the reducer, the cases can be quite large if we’re immutably updating a deeply nested key.

Of course, switches do work, but there has to be a better way. Right?

A Better Way
I would suggest an Action Map.

Let’s start with JavaScript’s native Map object which functions like a Dictionary or Hash Table, if you’re familiar with object oriented programming.

The syntax for a Map is an array of tuples which looks like this:

const myMap = new Map([
  [key1, value1],
  [key2, value2],
]);
We can use this as part our our replacement for the switch by setting the key value pairs:

Key = the action type
Value = a function to process the action (and return new state)

You’ll see this in the example below starting on line #12 as our actionMap:


We put the action map to use in the reducer which is defined starting on line #7. Firstly, it will attempt to get our mappedAction from the actionMap by using the type as the key. If the type matches one of the keys in the map, actionTypes.BANNER_SHOW for example, then we will execute the matching function from the key/value pair in our map.

However, if someone passes in an action that our reducer doesn’t handle (meaning, it’s not in our action map), the current state will be returned. We can think of this like the default when using the switch statement method.

The Advantages
You might be thinking to yourself:

“That’s cool, but why bother? I, for one, like massive switch statements.”
— You (maybe)

Here are a few advantages:

Scope
Unlike a switch statement, each function has its own scope. That means you can declare anything inside one function and have something declared with the same name in another.

To be fair to switch statements, you CAN do this if you really want to, but you’ll have to treat your case statements as block statements with curly braces which looks very odd:

switch(something) {
  case 'thing 1': {
    const x = 'some const named x';
    return x;
  }
  case 'thing 2': {
    const x = 'some other const named x';
    return x;
  }
}
Portable Logic
If we wanted to, we could have the function logic be separated from the map and imported:

const actionMap = new Map([
  [actionTypes.BANNER_DISMISS, dismiss],   
  [actionTypes.BANNER_SHOW, show,
]);
To do that with a switch, you have to return invocations of the functions with the appropriate args passed in:

switch(type) {
  case actionTypes.BANNER_DISMISS:
    return dismiss(state);
  case actionTypes.BANNER_SHOW: 
    return show(state, payload);
}
Testability
We can actually mock any or all of the functions that are in the map if we need or want to. We can’t mock cases of a switch. In fact, we can mock the entire map if we wanted to!

Combining Maps
We can easily combine this with other action maps.

If we’re using Redux, this isn’t as big of a deal because Redux provides a combineReducers util function that will merge our reducer functions together. However, if you’re using React Hooks, this is extremely helpful because it allows you to break up your reducer into several smaller reducers and easily merge them into one:

const actionMap = new Map([
  ...actionMap1,
  ...actionMap2,
  ...actionMap3,
  ...actionMap4,
]);
What have we learned?
Switch statements obviously work, but if you’re at all like me, you always felt like it was a strange and somewhat dirty pattern. We can make our code more flexible and testable by implementing an action map with JavaScript’s native Map object.

So go forth and stop using giant switches!
*/