import { useLoaderData, useFetcher, useSubmit, useFormAction, useOutletContext } from "@remix-run/react";
import { json } from "@remix-run/node";
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
import {
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";

interface LoaderData {
  reviews: Review[];
}

export const loader = async ({ request }: LoaderArgs) => {
  const reviews = await generateReviews(3);

  return json<LoaderData>({ reviews });
};

const Home: React.FC = () => {
  const { reviews } = useLoaderData<LoaderData>();

  // const [theme, toggle]: RootContextType = useRootContext();

  return (
    <>
      <Header />

      <Container id="features" classNames="rounded-md">
        <FeaturesSection />
        <div className="container bg-gray-200 dark:bg-gray-800 py-8">
          <ReviewCards reviews={reviews} />
          {/*<div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">*/}
          {/*reviews.map((review) => (
            <div key={review.name} className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-md text-gray-600">{review.name}</dt>
            <dt className="text-md text-gray-600">{review.jobTitle}</dt>
            <dd className="order-first text-sm font-semibold tracking-tight text-sp-text-light sm:text-sm">
              {review.quote}
            </dd>
          </div>
          ))*/}
          {/*</dl>
      </div>*/}
        </div>
      </Container>

      <Container id="pricing" classNames="rounded-md">
        <PricingSection />
      </Container>

      <Container id="contact-us" classNames="mx-16 my-12 px-8 py-4">
        {/*<ContactInfoSection />*/}
        <ContactUsSection />
      </Container>
    </>
  );
};

export default Home;






/*
 <CookiePopup />
      <Navbar />
      <main id="top" className="scroll-smooth">
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/ Your content /}
          <Container classNames="rounded-md rounded">
            <Header context={[theme, toggle]} />
          </Container>

          <Container id="features" classNames="rounded-md">
            <FeaturesSection />
            <div className="container bg-gray-200 py-8">
              <ReviewCards reviews={reviews} />
              {/<div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">/}
              {/reviews.map((review) => (
            <div key={review.name} className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-md text-gray-600">{review.name}</dt>
            <dt className="text-md text-gray-600">{review.jobTitle}</dt>
            <dd className="order-first text-sm font-semibold tracking-tight text-sp-text-light sm:text-sm">
              {review.quote}
            </dd>
          </div>
          ))/}
              {/</dl>
      </div>/}
            </div>
          </Container>

          <Container id="pricing" classNames="rounded-md">
            <PricingSection />
          </Container>

          <Container id="contact-us" classNames="mx-16 my-12 px-8 py-4">
            {/<ContactInfoSection />/}
        <ContactUsSection />
          </Container>

          

          {/ Add more sections as needed /}

          {/<Container>
            <Outlet />  // Nested routes will be rendered here 
          </Container>/}

          <Footer />
        </div>
      </main>
      <AppFooter />
              */

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