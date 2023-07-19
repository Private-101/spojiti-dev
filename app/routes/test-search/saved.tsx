import * as React from "react";
import { useState, useEffect, Fragment, useRef } from "react";
import { Link } from '@remix-run/react';
import { json } from "@remix-run/node";
import {
  isRouteErrorResponse, useRouteError
} from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";

interface TestLoaderData {};

export const loader = async ({request}: LoaderArgs) => {
  return json<TestLoaderData>({})
};

// export const action = async ({request}: ActionArgs) => {}

export default function SearchLayoutPage() {
  return (
    <>
    <div className="left-column w-1/3 pr-4">
            <div id="alerts" className="space-y-4">
                <p>Alerts List</p>
            </div>
        </div>
        <div className="right-column w-2/3 pl-4 bg-white shadow-lg p-6 rounded-md">
            <div id="alert-details">
                <p>Alert Details</p>
            </div>
        </div>
    </>
  );
};

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
  }