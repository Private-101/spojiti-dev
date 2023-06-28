import * as React from 'react';
import { useContext, createContext, useState } from "react";

interface ThemeContext {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
};

const useThemeState = () => {
    const [themeState, setThemeState] = useState<string>("light");

    const themeContext = createContext<ThemeContext>({
        theme: themeState,
        setTheme: setThemeState
    })


}

