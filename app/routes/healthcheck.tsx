// learn more: https://fly.io/docs/reference/configuration/#services-http_checks
import type { LoaderArgs } from "@remix-run/node";

import { prisma } from "~/services/db.server";
import {
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="flex flex-col items-center justify-center text-slate-800 dark:text-slate-200 max-w-150">
        <h1 className="text-3xl font-semibold mb-8">
          Playground Client Error: {error.status} {error.statusText}
        </h1>
        <p className="border-2 border-red-500 text-lg font-normal">{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div className="flex flex-col items-center justify-center text-slate-800 dark:text-slate-200 max-w-150">
        <h1 className="text-3xl font-bold mb-8">Client Error</h1>
        <div className="border-2 border-red-500 text-lg font-normal">
        <p className="mb-2">{error.message}</p>
        <p className="font-semibold text-xl">The stack trace is:</p>
        <pre className="">{error.stack}</pre>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center text-slate-800 dark:text-slate-200">
          <h1 className="text-3xl font-bold">Unknown Error</h1>
      </div>
    );
  }
};
export const loader = async ({ request }: LoaderArgs) => {
  const host =
    request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");

  try {
    const url = new URL("/", `http://${host}`);
    // if we can connect to the database and make a simple query
    // and make a HEAD request to ourselves, then we're good.
    await Promise.all([
      prisma.user.count(),
      fetch(url.toString(), { method: "HEAD" }).then((r) => {
        if (!r.ok) return Promise.reject(r);
      }),
    ]);
    return new Response("OK");
  } catch (error: unknown) {
    console.log("healthcheck ❌", { error });
    return new Response("ERROR", { status: 500 });
  }
};
