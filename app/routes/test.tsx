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
  const data = useRootLoaderData<RootLoaderData>();

  const [theme] = useTheme();

  return (
    <section id={'theme-demo'} className={theme ?? ""}>
      <div>
        <Outlet />
      </div>
    </section>
  );
};