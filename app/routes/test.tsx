import { type LoaderArgs } from "@remix-run/node";
import {
	Form,
	Outlet,
	useLocation,
	type ShouldReloadFunction,
  type ShouldRevalidateFunction,

} from "@remix-run/react";

import {
	Dashboard,
	DashboardMenu,
	DashboardMenuHeader,
	ListItem,
	ListItems,
  buttonStyles
} from "~/components/dashboard/experimental";

export async function loader({
	/*context: {
		services: { auth },
	},*/
	request,
}: LoaderArgs) {
	// await auth.requireUser(request);

	return null;
}

/* export const shouldRevalidate: ShouldRevalidateFunction = ({ 
  actionResult,
  currentParams,
  currentUrl,
  defaultShouldRevalidate,
  formAction,
  formData,
  formEncType,
  formMethod,
  nextParams,
  nextUrl, }) =>

	!!submission &&
	["/login", "/logout"].some((pathname) =>
		submission.action.startsWith(pathname)
	); */

  export const unstable_shouldReload: ShouldReloadFunction = ({ submission }) =>
	!!submission &&
	["/login", "/logout", "/items"].some((pathname) =>
		submission.action.startsWith(pathname)
	);

export default function DashboardLayout() {
	const location = useLocation();

	const redirectTo = encodeURIComponent(location.pathname + location.search);

	return (
		<>
			<Dashboard>
				<DashboardMenu id="dashboard-menu" menu="dashboard-menu">
					<DashboardMenuHeader label="Dashboard" menu="dashboard-menu" />

					<ListItems>
						<ListItem to="items">Items</ListItem>
					</ListItems>

					<hr />

					<footer className="p-2 text-center">
						<Form action={`/logout?redirectTo=${redirectTo}`} method="post">
							<button
								className={buttonStyles({
									full: true,
									uniform: true,
								})}
							>
								Logout
							</button>
						</Form>
					</footer>
				</DashboardMenu>

				<Outlet />
			</Dashboard>
		</>
	);
}



/*
import type { LinksFunction, LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Outlet,
  useLoaderData,
} from "@remix-run/react";
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

export const meta: V2_MetaFunction = () => {
    return [
    {
        title: "Theme Demo"
    },
    {
        property: "og:title",
        content: "Spojiti | Theme Demo",
    },
    {
        name: "description",
        content: "Spojiti: Theme Demo",
    }
];
};

export default function TestLayoutRoute() {
  // const data = useRootLoaderData<RootLoaderData>();

  const [theme] = useTheme();

  return (
    <section id={'theme-demo'} className={theme ?? ""}>
      <div>
        <Outlet />
      </div>
    </section>
  );
};
*/