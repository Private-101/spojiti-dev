import * as React from "react";
import { SocialIcon } from 'react-social-icons';
import { useLoaderData, useFetcher, useSubmit, useFormAction, useOutletContext, Outlet, Link } from "@remix-run/react";


export default function SocialShareButtons() {
    return (
        <>
        <div className="flex space-x-4">
        <div className="shadow-sm hover:shadow-md opacity-100 translate-y-0 hover:scale-110 transition-all duration-200">
            <button data-testid="login-button" className="overflow-clip border border-transparent hover:border-sp-primary mt-2 bg-white text-sp-primary hover:text-sp-primary/80 px-6 py-2 text-sm font-medium hover:font-semibold !no-underline rounded-md inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 h-9.5">
              <span className="mr-2 bg-white rounded-full">
              <SocialIcon network='instagram' url='https://instagram.com' className="h-2 w-2 fill-white hover:text-white" label="Instagram" />
              </span>
              Share to IG
            </button>
          </div>

          <div className="shadow-sm hover:shadow-md opacity-100 translate-y-0 hover:scale-110 transition-all duration-200">
            <button data-testid="login-button" className="overflow-clip border-transparent mt-2 bg-sp-primary !text-white hover:bg-sp-primary-dark px-4 py-2 text-sm !no-underline rounded-md inline-flex items-center justify-center border font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 h-9.5">
              <span className="mr-2 bg-white rounded-full">
              <SocialIcon network='facebook' url='https://facebook.com' className="h-2 w-2 fill-white hover:text-white" label="Facebook" />
              </span>
              Share to Facebook
            </button>
          </div>
        </div>
        </>
    )
}