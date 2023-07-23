import {
	Form,
	Outlet,
	useLocation,
    useLoaderData,
	type ShouldReloadFunction,
  type ShouldRevalidateFunction,

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