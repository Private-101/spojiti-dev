// import {} from '@remix-run/react';
// import {} from '@remix-run/node';
// import type {} from '@remix-run/node';
import React, { 
    createContext, useCallback, useContext, useDebugValue, 
    useDeferredValue, useEffect, useId, useImperativeHandle, 
    useInsertionEffect, useLayoutEffect, useMemo, useReducer, 
    useRef, useState, useSyncExternalStore, useTransition
} from 'react';
import { createPortal } from 'react-dom';
import { classNames, NOOP } from '~/utils';
import type { ICheckboxInputProps, ICheckboxInputRefProps } from './types';


export const CheckboxInputWithRef = React.forwardRef<ICheckboxInputRefProps, ICheckboxInputProps>(function CheckboxInput(props, ref) {
  const handleRef = React.useRef<HTMLInputElement|null>(null);
  
  React.useImperativeHandle(ref, () => ({
      setChecked(checked: boolean) {
          if (handleRef.current) {
              handleRef.current.checked = checked;
          }
      }
  }), []);
  return (
      <input ref={ handleRef } type="checkbox" {...props} /> 
  )
});