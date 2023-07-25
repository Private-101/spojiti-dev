import React from "react";
import {useLocalStorage} from 'usehooks-ts';
import { isClient } from "~/utils";
export default function useLocalDarkMode() {
    console.log('useLocalDarkMode triggered');
    let [isDarkMode, setIsDarkMode] = useLocalStorage('dark-mode', false);

    let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    React.useLayoutEffect(() => {
        function updateMode() {
            let isSystemDarkMode = darkModeMediaQuery.matches
            let appDarkMode = isDarkMode === true || isDarkMode === false && isSystemDarkMode === true // (!('dark-mode' in window.localStorage) && isSystemDarkMode);

            if (appDarkMode) {
                document.documentElement.classList.add('dark');
                setIsDarkMode(true);
            } else {
                document.documentElement.classList.remove('dark');
                setIsDarkMode(false);
            }

            // if (appDarkMode === isSystemDarkMode) {
            // delete window.localStorage.isDarkMode
            // }
        };

        function disableTransitionsTemporarily() {
            document.documentElement.classList.add('[&_*]:!transition-none')
            window.setTimeout(() => {
                document.documentElement.classList.remove('[&_*]:!transition-none')
            }, 0)
        };

        function updateModeWithoutTransitions() {
            disableTransitionsTemporarily()
            updateMode()
        };

        updateMode();
        darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
        window.addEventListener('storage', updateModeWithoutTransitions);

        return() => {
            darkModeMediaQuery.removeEventListener('change', updateModeWithoutTransitions);
            window.removeEventListener('storage', updateModeWithoutTransitions);
        }
    }, [isDarkMode, setIsDarkMode, darkModeMediaQuery]);


}
