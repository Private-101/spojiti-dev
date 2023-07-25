import {} from '@remix-run/react';
import {} from '@remix-run/node';
import type {} from '@remix-run/node';
import React, { 
    createContext, useCallback, useContext, useDebugValue, 
    useDeferredValue, useEffect, useId, useImperativeHandle, 
    useInsertionEffect, useLayoutEffect, useMemo, useReducer, 
    useRef, useState, useSyncExternalStore, useTransition
} from 'react';

interface IProps {};
const Tabs = ({ children }) => (
    <div className="tabs">{children}</div>
  );

  interface IProps {};
  const Panel = ({ children }) => children
  
  interface IProps {};
  const Tab = ({ children }) => (
    <button className="tab">{children}</button>
  )
  const Content = ({ children }) => (
    <div className="content">{children}</div>
  )