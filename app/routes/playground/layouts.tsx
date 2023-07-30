import * as React from 'react';
import { Transition } from '@headlessui/react';
import { Bars3Icon } from "@heroicons/react/24/solid";
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
import { Card, Title, Text, Grid, Col, Flex } from "tremor/index";

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

export async function loader({ request, }: LoaderArgs) {
  return null;
};

export default function LayoutDemosRoute() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(true);
  const [theme] = useTheme();
  const location = useLocation();
  const redirectTo = encodeURIComponent(location.pathname + location.search);


  return (
      <div className="p-4">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
      <Transition
        show={isOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Grid className="px-4 border border-black rounded-lg">
        <Col className="py-2">
          <div className="space-y-6">
            {Array.from({ length: 4 }).map((_, idx) => (
              <>
                <Card
                  onClick={() => setSelectedIndex(idx)}
                  className="hover:shadow-lg hover:border-sp-primary">
                  <Flex flexDirection="col" justifyContent="around" alignItems="center" className="">
                    <Title>Dashboard Item {idx + 1}</Title>
                    <Text>optional descriptive text</Text>
                  </Flex>
                </Card>
              </>
            ))}
          </div>
        </Col>
        </Grid>
        </Transition>
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
      <Flex flexDirection="row" justifyContent="between" alignItems="start" className="mb-2 px-4">
        <Bars3Icon className="w-6 h-6 self-start" onClick={() => setIsOpen((o) => !o)} />
        <Avatar className="">Item {selectedIndex + 1} Selected</Avatar>
      </Flex>
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main className="mx-auto max-w-screen-2xl  border border-black rounded-lg">
          <Card className="p-2">
              <Flex flexDirection="col" justifyContent="around" alignItems="center" className="mt-6">
                <Title>Item {selectedIndex + 1} Selected</Title>
                <Text>page details below...</Text>
              </Flex>
              <Outlet />
          </Card>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
  );
};

/*
<main className="p-4">
 <Flex flexDirection="col" justifyContent="around" alignItems="center" className="mb-2">
 <Bars3Icon className="w-6 h-6 self-start" onClick={() => setIsOpen((o) => !o)} />
</Flex>
<Grid numItemsLg={6} className="gap-6 min-h-screen min-w-full">
<Transition
 show={isOpen}
 enter="transition-opacity duration-75"
 enterFrom="opacity-0"
 enterTo="opacity-100"
 leave="transition-opacity duration-150"
 leaveFrom="opacity-100"
 leaveTo="opacity-0"
>
 <Col numColSpanLg={isOpen ? 2 : 0}>
   <div className="space-y-6">
     {Array.from({ length: 4 }).map((_, idx) => (
       <>
         <Card
           onClick={() => setSelectedIndex(idx)}
           className="hover:shadow-lg hover:border-sp-primary">
           <Flex flexDirection="col" justifyContent="around" alignItems="center" className="">
             <Title>Dashboard Item {idx + 1}</Title>
             <Text>optional descriptive text</Text>
           </Flex>
         </Card>
       </>
     ))}
   </div>
 </Col>
 </Transition>

 <Col numColSpanLg={isOpen ? 4 : 6} className="min-w-full">
   <Card className="min-h-screen min-w-full">
       <Flex flexDirection="col" justifyContent="around" alignItems="center" className="mt-6">
         <Title>Item {selectedIndex + 1} Selected</Title>
         <Text>page details below...</Text>
       </Flex>
       <Outlet />
   </Card>
 </Col>
</Grid>
</main>
*/

type IShape = 'circle' | 'square';

interface AvatarWrapperProps {
  htmlWidth: string;
  htmlHeight: string;
  bgColor: string;
  shape: IShape;
  textColor?: string;
}
function Avatar(props: AvatarWrapperProps) {
  return (
    <>
    <div className="flex rounded-full overflow-hidden max-w-[16px] min-w-[16px] h-[16px] text-center items-center justify-center bg-neutral-200 text-neutral-800 border-2 border-black">
    
    </div>
    </>
  )
}
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