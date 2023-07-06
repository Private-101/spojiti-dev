import { requireUserId } from "~/services/session.server";

import { useLoaderData, useFetcher, useSubmit, useFormAction, useOutletContext, Outlet, Form, Link, NavLink } from "@remix-run/react";
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
import DashboardLayout from "~/components/dashboard/DashboardLayout";
// import Reviews from "~/components/temp/Reviews";
import { generateReviews } from "~/services/faker.server";
import ReviewCards, {
  type Review,
} from "~/components/legacy/tailwindui/sections/ReviewCard";
import AppFooter from "~/components/legacy/tailwindui/AppFooter";

import DarkModeToggle from "~/components/common/DarkModeToggle";
import { useOptionalUser, safeRedirect, useUser } from '~/utils';
import { getUser } from "~/services/session.server";
import type { User } from '~/models/user.server';
import UserContext from "~/context/user.context";
import {
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";

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
      <UserContext.Provider value={user ?? undefined}>
      <DashboardLayout>
      {/*<header className="flex flex-col items-center justify-center w-full">
      <h1>Welcome User!</h1>
    <p>userid: {user.id}</p>
    <Link to='/app/dashboard' className="font-semibold text-indigo-600 hover:text-indigo-500">
        Go To Dashboard
    </Link>
    </header>*/}
      <Outlet context={user} />
    </DashboardLayout>
    </UserContext.Provider>
      </>
    );
  };