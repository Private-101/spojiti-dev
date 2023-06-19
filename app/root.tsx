import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useEffect, useState } from 'react';
import { getUser } from "~/session.server";
import stylesheet from "~/tailwind.css";
import useLocalStorage from '~/hooks/useLocalStorage';
import useColorMode from "./hooks/useColorMode";
import { useToggle } from "./hooks/useToggle";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const loader = async ({ request }: LoaderArgs) => {
  return json({ user: await getUser(request) });
};



export default function App() {
  // const [theme, setTheme] = useLocalStorage('THEME', 'light');
  // const [hydrated, setHydrated] = useState(false);
 /*
  const useToggleThemeEvent = () => {
   console.log('useToggleThemeEvent triggered');
   console.time('useToggleThemeEvent');
   const start = Date.now();
    const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
      // document.body.classList.toggle('dark');

    useEffect(() => {
      if (hydrated === true) {
      console.log('adding toggle-theme event...');
      document.addEventListener('toggle-theme', () => toggleTheme);
      console.log(`Current Theme: ${theme}`);

      return () => { 
        console.log('removing toggle-theme event');
        document.removeEventListener('toggle-theme', () => toggleTheme); 
      };
    };
    // TODO: added this workaround until I figure out why this renders twice
    setHydrated(true);

    }, []);
    console.timeEnd('useToggleThemeEvent');
    const end = Date.now();
    console.log(`Dev Timer: ${end - start}ms`);
  };

    useToggleThemeEvent();

    interface OutletContextProps {
      theme: string;
      toggle: (value?: React.SetStateAction<string> | undefined) => void
    }

    
*/

const [theme, toggle] = useToggle(['light', 'dark']);

  return (
    <html lang="en" className={theme}>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full font-normal text-base text-body dark:text-whiten bg-whiten dark:bg-body relative z-1">
        <Outlet context={[theme, toggle]} />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
