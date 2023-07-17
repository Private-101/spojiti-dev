import { type LoaderArgs } from "@remix-run/node";
import {
	Form,
	Outlet,
	useLocation,
    useLoaderData
} from "@remix-run/react";
import { json } from "@remix-run/node";
import {
	Dashboard,
	DashboardMenu,
	DashboardMenuHeader,
	ListItem,
	ListItems,
  buttonStyles
} from "~/components/dashboard/experimental";
import { getAllFiles, type RouteData, type FileObject } from "~/services/dev.server";

interface DevDashboardLoaderData {
    files: string[];
}
export async function loader({request}: LoaderArgs) {
    const devRoutes = getAllFiles();
    // console.log(...devRoutes);
	return json<DevDashboardLoaderData>({files: devRoutes});
};

export default function DevDashboardLayout() {
    const { files } = useLoaderData<DevDashboardLoaderData>();
	const location = useLocation();
	const redirectTo = encodeURIComponent(location.pathname + location.search);
    // const fileObjectArray: FileObject[] = Array.from(data.fileObjects);

    const basePath = 'dev';
    function getPath(route: string) {
        const relPathIndex = route.indexOf(basePath);
        const relPath = route.substring(relPathIndex, basePath.length);
        const title = route.substring(route.lastIndexOf('/') + 1, basePath.length);
        return { relPath, title };
    }
    /*
    {Array.from(data.fileObjects).map((fileData, index) => {
                            const { relPath, title } = getPath(fileData.path);
                            return (
                                <>
                                <div key={`${relPath}-${index}`}>
                                <ListItem to={`/${relPath}`}>{title.toUpperCase()}</ListItem>
                                </div>
                                </>
                            )
                        })}
                        */

	return (
		<>
			<Dashboard>
				<DashboardMenu id="dashboard-menu" menu="dashboard-menu">
					<DashboardMenuHeader label="Dashboard" menu="dashboard-menu" />

					<ListItems>
                        {files.map((file, index) => {
                            // const { relPath, title } = getPath(fileData.path);
                            return (
                                <>
                                <ListItem key={`${file}-${index}`} to={`${basePath}/${file}`}>{file.toUpperCase()}</ListItem>
                                </>
                            )
                        })}
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

				<Outlet context={files} />
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