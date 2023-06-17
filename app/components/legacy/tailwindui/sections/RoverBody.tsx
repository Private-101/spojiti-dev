import * as React from 'react';
import type {
    ActionArgs,
    LoaderArgs,
  } from "@remix-run/node"; // or cloudflare/deno
  import { json, redirect } from "@remix-run/node"; // or cloudflare/deno
  import { useSearchParams, Link, Form, useFetcher, useLoaderData, Outlet } from "@remix-run/react";

  interface RoverBodyProps {
    children: React.ReactNode
};

/*
  <div className="bg-gray-100">

        <div className="space-y-12">
            <RoverBody>
          <Outlet />
          </RoverBody>
        </div>
      </div>
      */
     
export const RoverBody: React.FC<RoverBodyProps> = ({children}) => {
  return (
    <>
    {/* TODO: uncomment user to see /app/dashboard route! */}
        {/*<TempNavbar user={user ??  null} />*/}
        <section className="max-w-screen max-h-screen">
          <div className="flex flex-col items-center justify-center">
            <h3 className="mb-2 text-4xl font-semibold text-gray-600">
              SPOJITI
            </h3>
            <h5 className="mb-6 text-2xl font-semibold text-gray-600">
              The Food and Beverage Meeting Place
            </h5>
          </div>
        </section>
      <section
        className="font-sans m-0 flex min-h-full min-w-full  flex-col text-sm text-gray-900 "
        // style="line-height: 1.3;"
      >
        <div id="app" className="leading-5 text-gray-900">
          <main
            role="main"
            id="base-content"
            className="leading-5 text-gray-900"
          >
            <div
              data-element="Wrapper"
              data-component="StickySidebar"
              data-source-file="StickySidebar.tsx"
              className="relative mx-1 hidden flex-shrink-0 flex-grow-0 self-stretch leading-5 text-gray-900 md:block"
              // style="flex-basis: 320px; z-index: 3; min-height: 1274px;"
            >
              <div
                className="m-0 px-2 pb-0 pt-2 leading-5 text-gray-900 outline-8 outline-black"
                data-element="Box"
                data-component="CollectionWrapper"
                data-source-file="CollectionWrapper.tsx"
                // style="min-width: 0px;"
              >
                {children}
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};
