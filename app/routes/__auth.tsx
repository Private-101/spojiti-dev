import { useLoaderData, useFetcher, useSubmit, useFormAction, useOutletContext, Outlet } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import React from "react";
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
interface OutletContextProps {
  user: User
};

export default function AuthRoute() {
  const { user } = useLoaderData<LoaderData>();

  // const submit = useSubmit();
  // const action = useFormAction();

  // const fetcher = useFetcher();

  // const [theme, toggle] = useOutletContext<OutletContextProps>();

  return (
    <>
    <DashboardLayout>
    <Outlet context={user} />
    </DashboardLayout>
            
          
    </>
  );
};
