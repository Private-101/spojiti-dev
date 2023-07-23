import { useLoaderData, useFetcher, useSubmit, useFormAction, useOutletContext, Outlet } from "@remix-run/react";
import { json } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import React from "react";
import { type RootContextType, useRootContext } from "~/context/root.context";
// import { NavLink } from "@remix-run/react";
import Header from "~/components/legacy/tailwindui/sections/Header";
// import PricingSection from "~/components/sections/PricingSection";
// import AboutUsSection from "~/components/sections/AboutUsSection";
// import ContactInfoSection from "~/components/sections/ContactInfoSection";
import Footer from "~/components/landing/Footer";
import CookiePopup from "~/components/landing/CookiePopup";

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
import {
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";

const Home: React.FC = () => {
  const [theme, toggle]: RootContextType = useRootContext();

  return (
    <>
      <CookiePopup />
      <Navbar />
      <main id="top" className="scroll-smooth bg-gradient-to-r from-indigo-100/50 to-blue-100 dark:from-blue-800 dark:to-indigo-900">
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* Your content */}
          <Container classNames="rounded-md rounded">
            <Outlet />
          </Container>
          <Footer />
        </div>
      </main>
      {/*<AppFooter />*/}
    </>
  );
};

export default Home;

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