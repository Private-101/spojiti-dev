import * as React from "react";
import { useLoaderData, useFetcher, useSubmit, useFormAction, useOutletContext, Outlet, Link } from "@remix-run/react";
import type { ActionArgs, LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData, useSearchParams } from "@remix-run/react";
import { useEffect, useRef } from "react";

import { verifyLogin } from "~/models/user.server";
import { createUserSession, getUserId } from "~/services/session.server";
import { safeRedirect, validateEmail } from "~/utils";
import {
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import SpojitiLogo from '~/components/common/assets/spojiti-logo.svg';

export const meta: V2_MetaFunction = () => [{ title: "Login" }];

export const loader = async ({ request }: LoaderArgs) => {
    const userId = await getUserId(request);
    if (userId) return safeRedirect(`/app/dashboard`);
    return json({});
  };
  
  export const action = async ({ request }: ActionArgs) => {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    // const redirectTo = safeRedirect(formData.get("redirectTo"), "/");
    const remember = formData.get("remember");
  
    if (!validateEmail(email)) {
      return json(
        { errors: { email: "Email is invalid", password: null } },
        { status: 400 }
      );
    }
  
    if (typeof password !== "string" || password.length === 0) {
      return json(
        { errors: { email: null, password: "Password is required" } },
        { status: 400 }
      );
    }
  
    if (password !== 'admin' && password.length < 8) {
      return json(
        { errors: { email: null, password: "Password is too short" } },
        { status: 400 }
      );
    }
  
    const user = await verifyLogin(email, password);
  
    if (!user) {
      return json(
        { errors: { email: "Invalid email or password", password: null } },
        { status: 400 }
      );
    };
  
    if (user.role === 'client') {
      return redirect('/app/clients/login');
    };
  
    if (user.role === 'employer') {
      return redirect('/app/employers/login');
    }
  
    return createUserSession({
      redirectTo: safeRedirect(`/app/dashboard`),
      remember: remember === "on" ? true : false,
      request,
      userId: user.id,
      userRole: user.role
    });
  };

export default function LoginRoute() {
    const [searchParams] = useSearchParams();
  // const redirectTo = searchParams.get("redirectTo") || "/notes";
  const actionData = useActionData<typeof action>();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (actionData?.errors?.email) {
      emailRef.current?.focus();
    } else if (actionData?.errors?.password) {
      passwordRef.current?.focus();
    }
  }, [actionData]);
    return (
        <>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-14 w-auto"
            src={SpojitiLogo} // "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Spojiti"
          />
          <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mx-auto w-full max-w-md px-8 pt-8">
        <Form method="post" className="space-y-6">
        <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  ref={emailRef}
                  id="email"
                  required
                  autoFocus={true}
                  name="email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={actionData?.errors?.email ? true : undefined}
                  aria-describedby="email-error"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {actionData?.errors?.email ? (
                <div className="pt-1 text-red-700" id="email-error">
                  {actionData.errors.email}
                </div>
              ) : null}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <Link to="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  ref={passwordRef}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  aria-invalid={actionData?.errors?.password ? true : undefined}
                  aria-describedby="password-error"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {actionData?.errors?.password ? (
                <div className="pt-1 text-red-700" id="password-error">
                  {actionData.errors.password}
                </div>
              ) : null}
              </div>
            </div>

          

          <input type="hidden" name="redirectTo" value={''} />
          <div>
          <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
          </div>
          
          <div className="flex flex-col items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label
                htmlFor="remember"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="mt-10 text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <Link
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 underline"
                to={{
                  pathname: "/join",
                  search: searchParams.toString(),
                }}
              >
                Start a 14 day free trial
                {/*Sign up*/}
              </Link>
            </div>
          </div>
        </Form>
      </div>
        </>
    );
}

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