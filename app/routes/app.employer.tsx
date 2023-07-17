/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.3/dist/tailwind.min.css" rel="stylesheet">
  <title>Employer Dashboard</title>
  <style>
    .hidden { display: none; }
  </style>
</head>
<body class="bg-gray-100">
  <div class="container mx-auto px-4">
    <div class="flex flex-col md:flex-row">
      <aside class="w-full md:w-1/4 p-4">
        <nav class="mb-4 p-4 outline-2 outline-black">
          <ul>
            <li><a href="#" id="settingsLink" class="text-blue-500">Profile Settings</a></li>
          </ul>
        </nav>
      </aside>
      <main class="w-full md:w-3/4 p-4">
        <div class="mb-4">
          <label for="themeSelect" class="mr-2">Theme:</label>
          <select id="themeSelect" class="rounded-md bg-white"></select>
          <button id="createNew" class="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md">Create New Job Post</button>
        </div>
        <div id="jobPosts">
          <!-- Job posts will be populated here -->
          <div class="bg-white p-4 mb-4 rounded-md shadow-md">
            <h3 class="text-xl mb-2">Fake Job Post 1</h3>
            <p class="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            <div>
              <button class="editBtn bg-blue-500 text-white px-2 py-1 rounded-md mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M7.26562 4.60943C8.14825 3.72666 10.4802 4.1021 12.5719 6.19383L15.5583 3.20744C16.0824 2.67332 16.2342 1.64934 15.8722 1.28702C15.6027 1.01755 14.6871 1.21993 14.2684 1.63861L11.6333 4.27383C9.29152 2.12997 7.93249 3.49031 6.86733 4.55583C6.23996 5.18429 7.05043 6.96081 9.04137 8.9519C11.0324 11.0087 11.975784 12.0061 12.5457 12.5757C13.3286 13.3585 14.36442 14.3722 15.702 12.0344L19.1054 7.2117C19.3515 6.25032 20.2878 4.9376 18.2711 2.92016C16.2543 0.903043 10.4029 2.82561 7.98086 5.27807C7.39754 4.64434 8.22362 3.63141 7.26562 4.60943Z"/>
                </svg>
                Edit
              </button>
              <button class="deleteBtn bg-red-500 text-white px-2 py-1 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm7 4a1 1 0 00-1-1h-2a1 1 0 100 2h2a1 1 0 001-1zm-.7092 3.0461a.9999998.9999998 0 00-1.2081-.3278l-2.9997 1.5a1 1 0 101.0062 1.7677l2.9997-1.5a.9999998.9999998 0 00.2018-1.4397zm1-4a1 1 0 11-2 0 1 1 0 012 0zm-8-1a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>
                </svg>
                Delete
              </button>
            </div>
          </div>
          <div class="bg-white p-4 mb-4 rounded-md shadow-md">
            <h3 class="text-xl mb-2">Fake Job Post 2</h3>
            <p class="mb-2">Mauris eget nulla non urna pretium aliquet a ut nibh...</p>
            <div>
              <button class="editBtn bg-blue-500 text-white px-2 py-1 rounded-md mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M7.26562 4.60943C8.14825 3.72666 10.4802 4.1021 12.5719 6.19383L15.5583 3.20744C16.0824 2.67332 16.2342 1.64934 15.8722 1.28702C15.6027 1.01755 14.6871 1.21993 14.2684 1.63861L11.6333 4.27383C9.29152 2.12997 7.93249 3.49031 6.86733 4.55583C6.23996 5.18429 7.05043 6.96081 9.04137 8.9519C11.0324 11.0087 11.975784 12.0061 12.5457 12.5757C13.3286 13.3585 14.36442 14.3722 15.702 12.0344L19.1054 7.2117C19.3515 6.25032 20.2878 4.9376 18.2711 2.92016C16.2543 0.903043 10.4029 2.82561 7.98086 5.27807C7.39754 4.64434 8.22362 3.63141 7.26562 4.60943Z"/>
                </svg>
                Edit
              </button>
              <button class="deleteBtn bg-red-500 text-white px-2 py-1 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm7 4a1 1 0 00-1-1h-2a1 1 0 100 2h2a1 1 0 001-1zm-.7092 3.0461a.9999998.9999998 0 00-1.2081-.3278l-2.9997 1.5a1 1 0 101.0062 1.7677l2.9997-1.5a.9999998.9999998 0 00.2018-1.4397zm1-4a1 1 0 11-2 0 1 1 0 012 0zm-8-1a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>
                </svg>
                Delete
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>

  <!-- Modals -->
  <div id="createJobModal" class="hidden fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
    <div class="bg-white w-3/4 max-w-sm p-4 rounded-md">
      <h2 class="mb-4 text-xl">Create Job Post</h2>
      <form id="createJobForm">
        <label for="title">Job Title</label>
        <input type="text" id="title" class="w-full rounded-md p-2 mb-4">
        <label for="description">Description</label>
        <textarea id="description" class="w-full rounded-md p-2 mb-4"></textarea>
        <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded-md">Submit</button>
      </form>
    </div>
  </div>

  <div id="deleteJobModal" class="hidden fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
    <div class="bg-white w-3/4 max-w-sm p-4 rounded-md">
      <h2 class="mb-4 text-xl">Delete Job Post</h2>
      <p class="mb-4">Are you sure you want to delete this job post?</p>
      <button id="confirmDelete" class="bg-red-500 text-white px-4 py-2 rounded-md mr-2">Delete</button>
      <button id="cancelDelete" class="bg-gray-500 text-white px-4 py-2 rounded-md">Cancel</button>
    </div>
  </div>

  <div id="editJobModal" class="hidden fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
    <div class="bg-white w-3/4 max-w-sm p-4 rounded-md">
      <h2 class="mb-4 text-xl">Edit Job Post</h2>
      <form id="editJobForm">
        <input type="hidden" id="editJobId">
        <label for="editTitle">Job Title</label>
        <input type="text" id="editTitle" class="w-full rounded-md p-2 mb-4">
        <label for="editDescription">Description</label>
        <textarea id="editDescription" class="w-full rounded-md p-2 mb-4"></textarea>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Save</button>
      </form>
    </div>
  </div>

  <div id="settingsModal" class="hidden fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
    <div class="bg-white w-3/4 max-w-sm p-4 rounded-md">
      <h2 class="mb-4 text-xl">Profile Settings</h2>
      <form id="settingsForm">
        <!-- Add settings inputs here -->
        <label for="colorPicker">Select color:</label>
        <input type="color" id="colorPicker" class="mb-4">
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Save</button>
      </form>
    </div>
  </div>

  <script>
    // Functions and event listeners for each modal and the dashboard will be implemented here.
  </script>
</body>
</html>
*/
import { requireUserId } from "~/services/session.server";

import { useLoaderData, useNavigate, useFetcher, useSubmit, useFormAction, useOutletContext, Outlet, Form, Link, NavLink, useLocation } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import React, { useEffect } from "react";
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
import useLocalStorage from "~/hooks/useLocalStorage";
import { getUser } from "~/services/session.server";

import type { User } from '~/models/user.server';
import UserContext, { useUserContext } from "~/context/user.context";
import {
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";


/* interface LoaderData {
    user: User;
  } */
  
  /* export const loader = async ({ request }: LoaderArgs) => {
      const url = new URL(request.url);
      const user = await getUser(request);
      if (user && url.pathname.includes(user.role)) {
        return redirect(`/app/${user.role}`);
      } 
  
      if (!user) return redirect('/login');
      // return safeRedirect(`/${user.id}/profile`); `/login?redirectTo=${url}`
      return json({ user });
    }; */
  
  // type OutletContextProps = [string, (value?: React.SetStateAction<string> | undefined) => void];
  
  export default function AppEmployerRoute() {
    const { user } = useUserContext();
    
    // const submit = useSubmit();
    // const action = useFormAction();
  
    // const fetcher = useFetcher();
  
    // const [theme, toggle]: RootContextType = useRootContext();
  
    return (
      <>
      <p>Welcome {user?.firstName + " " + user?.lastName?.substring(0, 1)}.</p>
      <p>Role: {user?.role}</p>
      <p>Address:</p>
      <p>{user?.streetAddress}</p>
      <p>{user?.city}, {user?.state} {user?.zipCode}</p>
      </>
    );
  };