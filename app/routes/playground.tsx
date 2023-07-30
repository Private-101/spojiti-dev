import {
	Form,
	Outlet,
	useLocation,
    useLoaderData,
	type ShouldReloadFunction,
  type ShouldRevalidateFunction,
  isRouteErrorResponse,
  useRouteError
} from "@remix-run/react";
import type { LinksFunction, LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  ThemeBody,
  ThemeHead,
  ThemeProvider,
  useTheme,
  type Theme
} from "~/context/theme.context";
import { getThemeSession } from "~/services/theme.server";
import { useRootLoaderData } from "~/utils";
import type { RootLoaderData } from "~/root";
import {
	Dashboard,
	DashboardMenu,
	DashboardMenuHeader,
	ListItem,
	ListItems,
  buttonStyles
} from "~/components/dashboard/experimental";

export const meta: V2_MetaFunction = () => {
    return [
    {
        title: "Playground for Spojiti"
    },
    {
        property: "og:title",
        content: "Spojiti | Playground",
    },
    {
        name: "description",
        content: "Spojiti: Playground",
    }
];
};

export async function loader({request,}: LoaderArgs) {
	return null;
};

export default function PlaygroundLayoutRoute() {
  const [theme] = useTheme();
  const location = useLocation();
  const redirectTo = encodeURIComponent(location.pathname + location.search);

  return (
    <section id={'playground'}>
      <Outlet />
    </section>
  );
};

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