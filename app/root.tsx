import React, { useLayoutEffect } from 'react';
import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse, useRouteError, useLoaderData
} from "@remix-run/react";
import RootContext, { type RootContextType } from "./context/root.context";
import { useContext, useEffect, useState } from 'react';
import { getUser } from "~/services/session.server";
import stylesheet from "~/tailwind.css";
import useLocalStorage from '~/hooks/useLocalStorage';
import useColorMode from "./hooks/useColorMode";
import { useToggle } from "./hooks/useToggle";

import {
  ThemeBody,
  ThemeHead,
  ThemeProvider,
  useTheme,
  Theme
} from "~/context/theme.context";
import { getThemeSession } from "~/services/theme.server";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Spojiti | Remix" },
    { viewport: "width=device-width,initial-scale=1" },
    { charset: "utf-8" },
    {
      property: "og:title",
      content: "Spojiti | Remix",
    },
    {
      name: "description",
      content: "Spojiti: Made with Remix",
    },
  ];
};

export interface RootLoaderData {
  theme: Theme
};

export const loader = async ({ request }: LoaderArgs) => {
  const themeSession = await getThemeSession(request);

  return json<RootLoaderData>({
    theme: themeSession.getTheme(),
  });
};

function App() {
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
  
     const data = useLoaderData<RootLoaderData>();
     // const [theme, toggle] = useToggle(['light', 'dark']);

     const prefersDarkMQ = "(prefers-color-scheme: dark)";

     const getPreferredTheme = () =>
       window.matchMedia(prefersDarkMQ).matches ? Theme.DARK : Theme.LIGHT;

     useLayoutEffect(() => {
    console.log('inside root useLayoutEffect hook');

    const theme = getPreferredTheme();
    console.log(`Preferred Theme: ${theme}`);

    const cl = document.documentElement.classList;

    const themeAlreadyApplied = cl.contains('light') || cl.contains('dark');
    console.log(`Theme Already Applied: ${themeAlreadyApplied}`);

    if (themeAlreadyApplied) {
      // this script shouldn't exist if the theme is already applied!
      // console.warn(
        // "Hi there, could you let me know you're seeing this message? Thanks!",
      // );
    } else {
      cl.add(theme);
    };

    const meta = document.querySelector("meta[name=color-scheme]");
    
    /* if (meta) {
      const attribute = meta.getAttribute('content')
      console.log(attribute ?? 'null'); // light dark
      meta.setAttribute('content', 'dark light');
      const nextAttribute = meta.getAttribute('content')
      console.log(nextAttribute ?? 'null'); // dark light
    } else {
      console.log("typeof meta === null!");
    } */

    if (meta) {
      if (theme === 'dark') {
        meta.setAttribute('content', 'dark light');
      } else if (theme === 'light') {
        meta.setAttribute('content', 'light dark');
      }
    } else {
      console.warn(
        "meta[name=color-scheme] Tag was not proided",
      );
    }
  }, []);

  return (
    <html lang="en" className={data.theme}>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta
          name="color-scheme"
          content="light dark"
        />
        <Meta />
        <Links />
        <ThemeHead ssrTheme={Boolean(data.theme)} />
      </head>
      <body>
        {/*<RootContext.Provider value={[theme, toggle]}>*/}
        <Outlet />
        {/*</RootContext.Provider>*/}
        <ThemeBody ssrTheme={Boolean(data.theme)} />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

export default function AppWithProviders() {
  const data = useLoaderData<RootLoaderData>();

  return (
    <ThemeProvider specifiedTheme={data.theme}>
      <App />
    </ThemeProvider>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          Route Error: {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Client Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
};

/*
function OptimisticFavorite({ contact }: { contact: ContactRecord }) {
  const fetchers = useFetchers();

  // start with the default case, read the actual data.
  let isFavorite = contact.favorite;

  // Now check if there are any pending fetchers that are changing this contact
  for (const fetcher of fetchers) {
    // @ts-expect-error https://github.com/remix-run/remix/pull/5476
    if (fetcher.formAction === `/contacts/${contact.id}`) {
      // Ask for the optimistic version of the data
      // @ts-expect-error https://github.com/remix-run/remix/pull/5476
      isFavorite = fetcher.formData.get("favorite") === "true";
    }
  }

  // Now the star in the sidebar will immediately update as the user clicks
  // instead of waiting for the network to respond
  return isFavorite ? <span>★</span> : null;
}
*/