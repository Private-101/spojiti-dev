import * as React from "react";
import { useLoaderData, useFetcher, useSubmit, useFormAction, useOutletContext, Outlet, Link } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import { TvIcon } from '@heroicons/react/24/outline';
import { SocialIcon } from 'react-social-icons';
import {
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";

/*
<div className="flex flex-col max-h-screen text-center items-center justify-center">
px-2 py-2 lg:px-8 
<div id='header' className="min-w-full p-8 mb-8 rounded-xl border-2 border-black">
</div>
*/
export default function AuthRoute() {
  return (
    <>
      <div className="flex flex-1 flex-col justify-center min-h-screen bg-neutral-200 dark:bg-neutral-600">
        <Header />
        <Outlet />
        <footer
          className="mx-auto mt-12 w-full max-w-container px-4 sm:px-6 lg:px-8">
          <div className="border-t border-sp-primary/70 dark:border-sp-primary/90 py-4">
            <p className="mt-2 text-center text-sm leading-6 text-slate-600">© 2023 Spojiti Inc. All rights reserved.</p>
            <div className="mt-8 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
              <a href="/privacy-policy">Privacy policy</a>
              <div className="h-4 w-px bg-slate-500/20">
              </div>
              <a href="/terms-of-service">Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

/*
<svg className="mx-auto h-5 w-auto text-slate-900" aria-hidden="true" viewBox="0 0 160 24" fill="none">

svg logo - tailwind 
<path d="M18.724 1.714c-4.538 0-7.376 2.286-8.51 6.857 1.702-2.285 3.687-3.143 5.957-2.57 1.296.325 2.22 1.271 3.245 2.318 1.668 1.706 3.6 3.681 7.819 3.681 4.539 0 7.376-2.286 8.51-6.857-1.701 2.286-3.687 3.143-5.957 2.571-1.294-.325-2.22-1.272-3.245-2.32-1.668-1.705-3.6-3.68-7.819-3.68zM10.214 12c-4.539 0-7.376 2.286-8.51 6.857 1.701-2.286 3.687-3.143 5.957-2.571 1.294.325 2.22 1.272 3.245 2.32 1.668 1.705 3.6 3.68 7.818 3.68 4.54 0 7.377-2.286 8.511-6.857-1.702 2.286-3.688 3.143-5.957 2.571-1.295-.326-2.22-1.272-3.245-2.32-1.669-1.705-3.6-3.68-7.82-3.68z" className="fill-sp-primary">
              </path>

svg text - 'tailwind'
<path d="M51.285 9.531V6.857h-3.166v-3.6l-2.758.823v2.777h-2.348v2.674h2.348v6.172c0 3.343 1.686 4.526 5.924 4.011V17.22c-2.094.103-3.166.129-3.166-1.517V9.53h3.166zm12.087-2.674v1.826c-.97-1.337-2.476-2.16-4.468-2.16-3.472 0-6.357 2.931-6.357 6.763 0 3.805 2.885 6.763 6.357 6.763 1.992 0 3.498-.823 4.468-2.186v1.851h2.758V6.857h-2.758zM59.338 17.4c-2.297 0-4.034-1.723-4.034-4.114 0-2.392 1.736-4.115 4.034-4.115s4.034 1.723 4.034 4.115c0 2.391-1.736 4.114-4.034 4.114zM70.723 4.929c.97 0 1.762-.823 1.762-1.775 0-.977-.792-1.774-1.762-1.774s-1.762.797-1.762 1.774c0 .952.792 1.775 1.762 1.775zm-1.379 14.785h2.758V6.857h-2.758v12.857zm5.96 0h2.757V.943h-2.758v18.771zM95.969 6.857l-2.502 8.872-2.655-8.872h-2.63L85.5 15.73l-2.477-8.872h-2.91l4.008 12.857h2.707l2.68-8.665 2.656 8.665h2.706L98.88 6.857h-2.911zm6.32-1.928c.97 0 1.762-.823 1.762-1.775 0-.977-.792-1.774-1.762-1.774s-1.762.797-1.762 1.774c0 .952.792 1.775 1.762 1.775zm-1.379 14.785h2.758V6.857h-2.758v12.857zm12.674-13.191c-1.736 0-3.115.643-3.957 1.98V6.857h-2.758v12.857h2.758v-6.891c0-2.623 1.43-3.703 3.242-3.703 1.737 0 2.86 1.029 2.86 2.983v7.611h2.757V11.82c0-3.343-2.042-5.297-4.902-5.297zm17.982-4.809v6.969c-.971-1.337-2.477-2.16-4.468-2.16-3.473 0-6.358 2.931-6.358 6.763 0 3.805 2.885 6.763 6.358 6.763 1.991 0 3.497-.823 4.468-2.186v1.851h2.757v-18h-2.757zM127.532 17.4c-2.298 0-4.034-1.723-4.034-4.114 0-2.392 1.736-4.115 4.034-4.115 2.297 0 4.034 1.723 4.034 4.115 0 2.391-1.737 4.114-4.034 4.114z" fill="currentColor">
              </path>

svg box w/text 'ui'
              <path fill-rule="evenodd" clip-rule="evenodd" d="M145.532 3.429h8.511c.902 0 1.768.36 2.407 1.004.638.643.997 1.515.997 2.424v8.572c0 .909-.359 1.781-.997 2.424a3.394 3.394 0 01-2.407 1.004h-8.511a3.39 3.39 0 01-2.407-1.004 3.438 3.438 0 01-.997-2.424V6.857c0-.91.358-1.781.997-2.424a3.39 3.39 0 012.407-1.004zm-5.106 3.428c0-1.364.538-2.672 1.495-3.636a5.09 5.09 0 013.611-1.507h8.511c1.354 0 2.653.542 3.61 1.507a5.16 5.16 0 011.496 3.636v8.572a5.16 5.16 0 01-1.496 3.636 5.086 5.086 0 01-3.61 1.506h-8.511a5.09 5.09 0 01-3.611-1.506 5.164 5.164 0 01-1.495-3.636V6.857zm10.907 6.251c0 1.812-1.359 2.916-3.193 2.916-1.823 0-3.182-1.104-3.182-2.916v-5.65h1.633v5.52c0 .815.429 1.427 1.549 1.427 1.12 0 1.549-.612 1.549-1.428v-5.52h1.644v5.652zm1.72 2.748V7.457h1.644v8.4h-1.644z" fill="currentColor">
              </path>
              */

function Header() {
  return (
    <>
      <header data-testid="layout-header" className="flex h-12 pb-4 items-center justify-center border border-slate-600/20 sm:fixed sm:top-0 sm:z-10 sm:w-full sm:bg-opacity-80 sm:backdrop-blur sm:backdrop-filter cursor-default">
        <Link to="/home#top" className="flex items-center justify-center max-w-fit cursor-pointer">
          <span className="sr-only">spojiti.com</span>
          <svg viewBox="0 0 150 40" xmlns="http://www.w3.org/2000/svg" className="sm:w-1/2 mx-auto h-16 w-auto" fill="#f58321">
            <text x="0" y="40" fontSize="36" fontFamily="Arial" fontWeight="bold" className="">SPOJITI</text>
          </svg>
        </Link>
      </header>
    </>
  )
};

/*
skies.dev logo

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 447.88 121.59" className="w-24 fill-current text-primary-500 dark:text-gray-300" aria-hidden="true">
      <g data-name="Layer 2">
      <g data-name="Layer 1">
      <path className="logo_svg__cls-1" d="M36.38 59.68c0 1.06-.07 2.15-.07 3.23v-3.23Z">
      </path>
    <path className="logo_svg__cls-1" d="M36.38 59.68c0 1.06-.07 2.15-.07 3.23v-3.23Z">
      </path>
    <path className="logo_svg__cls-2" d="M169.14 75.79c-7.39 0-11.2 5.82-11.42 11.08h22.74a11.13 11.13 0 0 0-11.32-11.08Zm0 0c-7.39 0-11.2 5.82-11.42 11.08h22.74a11.13 11.13 0 0 0-11.32-11.08Zm0 0c-7.39 0-11.2 5.82-11.42 11.08h22.74a11.13 11.13 0 0 0-11.32-11.08Zm0 0c-7.39 0-11.2 5.82-11.42 11.08h22.74a11.13 11.13 0 0 0-11.32-11.08Zm0 0c-7.39 0-11.2 5.82-11.42 11.08h22.74a11.13 11.13 0 0 0-11.32-11.08Zm0 0c-7.39 0-11.2 5.82-11.42 11.08h22.74a11.13 11.13 0 0 0-11.32-11.08Zm0 0c-7.39 0-11.2 5.82-11.42 11.08h22.74a11.13 11.13 0 0 0-11.32-11.08ZM222.8 59a53.19 53.19 0 0 0-51.87-42 52.53 52.53 0 0 0-26.5 7.13A61.44 61.44 0 0 0 34.25 58.81c0 1-.08 2.09-.08 3.14v-3.14a34.45 34.45 0 0 0-20.24 62.12h9.28a31.63 31.63 0 0 1-16.13-7.85l6.72-10.64c4.48 3.81 11.88 6.72 16.36 6.72s7.61-1.12 7.61-4.7-8.06-5.38-10.08-6c-9.18-2.35-17.25-5.6-17.25-17 0-10.76 9.41-17.36 21-17.36s18 4.25 21.17 6.83l-5.88 10.46C43.6 78.92 37.32 76 32.84 76c-4.25 0-6.6 1.12-6.6 4s4.25 4.26 8.06 5.38c9.52 2.8 19.49 5.71 19.49 17.92 0 10.52-7.6 15.86-16.47 17.59h20.83V43.08h17.92V83.4l16.8-18.25h20.61L93.32 85.87l21.44 35.06h3l-.39-55.78h17.92l.39 55.78h26.36c-13.28-2.54-22.38-12.5-22.38-28.12 0-18.26 13.44-28.67 29.79-28.67s27.66 10.86 27.66 27c0 2.69-.22 5.94-.22 5.94h-39.28c.78 8 6.83 11.53 14.11 11.53a31.08 31.08 0 0 0 16.58-5.26l7 9.29a34.06 34.06 0 0 1-17.89 8.3h35a31.59 31.59 0 0 1-16.13-7.85l6.72-10.64c4.48 3.81 11.87 6.72 16.35 6.72s7.62-1.12 7.62-4.7-8.07-5.38-10.08-6c-9.19-2.35-17.25-5.6-17.25-17 0-10.76 9.41-17.36 20.94-17.36s18 4.25 21.17 6.83L236 81.39c-3.13-2.47-9.4-5.39-13.88-5.39-4.26 0-6.61 1.12-6.61 4s4.26 4.26 8.07 5.38c9.52 2.8 19.48 5.71 19.48 17.92 0 10.52-7.6 15.86-16.46 17.59h13A34.46 34.46 0 0 0 222.8 59Zm-96.44-.24c-6 0-10.19-3.69-10.19-9.29s4.14-9.3 10.19-9.3 10.19 3.81 10.19 9.3-4.14 9.29-10.19 9.29Zm42.78 17c-7.39 0-11.2 5.82-11.42 11.08h22.74a11.13 11.13 0 0 0-11.32-11.05Zm0 0c-7.39 0-11.2 5.82-11.42 11.08h22.74a11.13 11.13 0 0 0-11.32-11.05Zm0 0c-7.39 0-11.2 5.82-11.42 11.08h22.74a11.13 11.13 0 0 0-11.32-11.05Zm0 0c-7.39 0-11.2 5.82-11.42 11.08h22.74a11.13 11.13 0 0 0-11.32-11.05Zm0 0c-7.39 0-11.2 5.82-11.42 11.08h22.74a11.13 11.13 0 0 0-11.32-11.05Zm0 0c-7.39 0-11.2 5.82-11.42 11.08h22.74a11.13 11.13 0 0 0-11.32-11.05Zm0 0c-7.39 0-11.2 5.82-11.42 11.08h22.74a11.13 11.13 0 0 0-11.32-11.05Zm0 0c-7.39 0-11.2 5.82-11.42 11.08h22.74a11.13 11.13 0 0 0-11.32-11.05Z">
      </path>
    <path className="logo_svg__cls-2" d="M262 121.59c-6.27 0-10.64-3.58-10.64-9.63s4.37-9.63 10.64-9.63 10.53 3.58 10.53 9.63-4.41 9.63-10.53 9.63Z">
      </path>
    <path className="logo_svg__cls-2" d="m313.7 120.36.12-7.28-.34.11c-4.14 5.6-10.75 8.4-18.14 8.4-16 0-26.1-12.54-26.1-28.78s10.08-28.67 26.1-28.67c10.08 0 15.68 5 17.47 7.73V43.08h17.92v77.28Zm-13.21-42.11c-7.73 0-13 5.82-13 14.33s5.26 14.34 13 14.34 12.88-5.82 12.88-14.34-5.15-14.33-12.88-14.33ZM390.31 97.07H351c.78 8 6.83 11.53 14.11 11.53a31.08 31.08 0 0 0 16.58-5.26l7.05 9.29c-1.79 1.35-9.07 9-26.2 9s-29.46-10.52-29.46-28.78 13.44-28.67 29.79-28.67 27.67 10.86 27.67 27c0 2.64-.23 5.89-.23 5.89Zm-27.77-21.28c-7.4 0-11.2 5.82-11.43 11.08h22.74a11.12 11.12 0 0 0-11.31-11.08ZM425.14 120.36h-16.8l-22.62-55.21h18.7L417 100.09l12.4-34.94h18.48ZM94.16 120.93H76.07v-17.26L81 98.86l13.16 22.07z">
      </path>
    </g>
    </g>
    </svg>
    */

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
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
interface LoaderData {
  user: User;
}

export const loader = async ({ request }: LoaderArgs) => {
    const user = await getUser(request);
    // const url = new URL(request.url);

    if (!user) return redirect('/login');
    // return safeRedirect(`/${user.id}/profile`); `/login?redirectTo=${url}`
    return json({ user });
  };

// type OutletContextProps = [string, (value?: React.SetStateAction<string> | undefined) => void];

export default function AuthRoute() {
  const { user } = useLoaderData<LoaderData>();

  // const submit = useSubmit();
  // const action = useFormAction();

  // const fetcher = useFetcher();

  const [theme, toggle]: RootContextType = useRootContext();

  return (
    <>
    <DashboardLayout>
    <Outlet context={user} />
    </DashboardLayout>
            
          
    </>
  );
};
*/
