import { useLoaderData, useFetcher, useSubmit, useFormAction, useOutletContext, Outlet } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import React from "react";
import { type RootContextType, useRootContext } from "~/context/root.context";
// import { NavLink } from "@remix-run/react";
// placeholder elements
// import Navbar from "~/components/temp/Navbar";
import Header from "~/components/legacy/tailwindui/sections/Header";
// import PricingSection from "~/components/sections/PricingSection";
// import AboutUsSection from "~/components/sections/AboutUsSection";
// import ContactInfoSection from "~/components/sections/ContactInfoSection";
import Footer from "~/components/legacy/temp/Footer";
import CookiePopup from "~/components/legacy/temp/CookiePopup";

// spojiti website elements - old version
// import OldHeader from "~/components/Header";
// import SpojitiHeader from "~/components/SpojitiHeader";
// import SpojitiHeaderNew from "~/components/SpojitiHeader.new";
import Navbar from "~/components/legacy/tailwindui/Navbar";
import { Container } from "~/components/legacy/tailwindui/Container";
import PricingSection from "~/components/legacy/tailwindui/sections/Pricing";
import FeaturesSection from "~/components/legacy/tailwindui/sections/Features";
import ContactUsSection from '~/components/legacy/tailwindui/sections/ContactUs';

// import Reviews from "~/components/temp/Reviews";
import { generateReviews } from "~/services/faker.server";
import ReviewCards, {
  type Review,
} from "~/components/legacy/tailwindui/sections/ReviewCard";
import AppFooter from "~/components/legacy/tailwindui/AppFooter";

import DarkModeToggle from "~/components/common/DarkModeToggle";
import { useOptionalUser, safeRedirect } from '~/utils';
import { getUser } from "~/services/session.server";
import type { User } from '~/models/user.server';
import DashboardLayout from "~/components/dashboard/DashboardLayout";
import {
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";

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
