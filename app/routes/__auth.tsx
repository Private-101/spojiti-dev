import * as React from "react";
import { useLoaderData, useFetcher, useSubmit, useFormAction, useOutletContext, Outlet, Link } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import {
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";

export default function AuthRoute() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <Outlet />
      </div>
    </>
  );
}

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
