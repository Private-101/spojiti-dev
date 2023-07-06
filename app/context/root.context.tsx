// import * as React from 'react';
import { useContext, createContext, useState } from "react";

export type RootContextType = [
    // uses [theme, toggle] from useToggle hook, may change at some point.
    // TODO other context values can be added here...
    /** theme */ string, 
    /** toggle */ (value?: React.SetStateAction<string> | undefined) => void
];

const RootContext = createContext<RootContextType>(['light', () => {}]);

export function useRootContext(): RootContextType {
    return useContext<RootContextType>(RootContext);
  };
  
export default RootContext;

