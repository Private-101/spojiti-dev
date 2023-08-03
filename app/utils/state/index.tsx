import * as React from 'react';
import { type Draft, produce, type Immutable } from 'immer';

type StateListener<S> = (nextState: S) => void;

type UpdaterFn<S> = (prevState: S) => S;

export interface Store<S> {
  get(): S;
  set(nextState: S): void;
  set(updater: UpdaterFn<S>): void;
  on(listener: StateListener<S>): () => void;
  off(listener: StateListener<S>): void;
  reset(): void;
  mutate(updater: (draft: Draft<S>) => void | S): void;
}

export function createStore<S>(initialState: S): Store<S> {
  let listeners: StateListener<S>[] = [];
  let currentState = initialState;
  return {
    get() {
      return currentState;
    },
    set(nextState: S | UpdaterFn<S>) {
      currentState =
        typeof nextState === 'function'
          ? (nextState as UpdaterFn<S>)(currentState)
          : nextState;
      listeners.forEach(listener => listener(currentState));
    },
    on(listener: StateListener<S>) {
      listeners.push(listener);
      return () => this.off(listener);
    },
    off(listener: StateListener<S>) {
      listeners = listeners.filter(fn => fn !== listener);
    },
    reset() {
      this.set(initialState);
    },
    mutate(updater: (draft: Draft<S>) => void | S) {
      let currState = this.get();
      let nextState = produce(updater)(currState as Immutable<Draft<S>>);
      if (nextState !== currState) this.set(nextState as S);
    },
  };
}

// Because the state is immutable,
// it can be used as the "version".
function getStoreVersion<S>(store: Store<S>) {
  return store.get();
}

// Subscribe is simple in the case of Mutik.
// Since it does not require any seletor-specific logic,
// it can be declared in module scope.
function subscribe<S>(store: Store<S>, callback: StateListener<S>) {
  return store.on(callback);
}

const MutableSourceContext = React.createContext<Store<unknown>>(null as any);

// This mimics the current Redux <Provider> API.
// It shares the store (really now a MutableSource wrapper)
// with components below in the tree that read from the store.
export function Provider<S>({
  children,
  store,
}: {
  children: React.ReactNode;
  store: Store<S>;
}) {
  const mutableSource = React.useMemo(() => {
    // Wrap the Mutik store in a MutableSource object.
    // The useMutableSource() hook works with this type of object.
    return (React as any).unstable_createMutableSource(store, getStoreVersion);
  }, [store]);

  return React.createElement(
    MutableSourceContext.Provider,
    { value: mutableSource },
    children
  );
}

// It requires a selector and returns a derived store value.
export function useSelector<S, V>(selector: (s: S) => V) {
  const mutableSource = React.useContext(MutableSourceContext);
  // Pass the store state to user selector:
  const getSnapshot = React.useCallback((store: Store<S>) => selector(store.get()), [ 
    selector,
  ]);
  return (React as any).unstable_useMutableSource(mutableSource, getSnapshot, subscribe);
}

/** 

type Disposable<T> = {
    current: T;
    isDisposed: boolean;
    dispose: () => void;
};
type DisposableStateListener<S> = Disposable<StateListener<S>>;
export interface DisposableStore<S> extends Disposable<S> {
    get(): S;
    set(nextState: S): void;
    set(updater: UpdaterFn<S>): void;
    on(listener: DisposableStateListener<S>): () => void;
    off(listener: DisposableStateListener<S>): void;
    reset(): void;
    mutate(updater: (draft: Draft<S>) => void | S): void;
  }



export function createDisposableStore<S>(initialState: S): DisposableStore<S> {
    let listeners: DisposableStateListener<S>[] = [];
    let currentState = initialState;
    return {
        current: initialState,
        isDisposed: false,
        dispose: () => {isDisposed = true},
      get() {
        return currentState;
      },
      set(nextState: S | UpdaterFn<S>) {
        currentState =
          typeof nextState === 'function'
            ? (nextState as UpdaterFn<S>)(currentState)
            : nextState;
        listeners.forEach(listener => listener(currentState));
      },
      on(listener: DisposableStateListener<S>) {
        listeners.push(listener);
        return () => this.off(listener);
      },
      off(listener: DisposableStateListener<S>) {
        listeners = listeners.filter(fn => fn !== listener);
      },
      reset() {
        this.set(initialState);
      },
      mutate(updater: (draft: Draft<S>) => void | S) {
        let currState = this.get();
        let nextState = produce(updater)(currState as Immutable<Draft<S>>);
        if (nextState !== currState) this.set(nextState as S);
      },
    }
};

*/