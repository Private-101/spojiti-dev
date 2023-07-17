/*
<div className="mx-auto w-full max-w-md px-8">
        <Form method="post" className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="mt-1">
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
                className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
              />
              {actionData?.errors?.email ? (
                <div className="pt-1 text-red-700" id="email-error">
                  {actionData.errors.email}
                </div>
              ) : null}
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                ref={passwordRef}
                name="password"
                type="password"
                autoComplete="new-password"
                aria-invalid={actionData?.errors?.password ? true : undefined}
                aria-describedby="password-error"
                className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
              />
              {actionData?.errors?.password ? (
                <div className="pt-1 text-red-700" id="password-error">
                  {actionData.errors.password}
                </div>
              ) : null}
            </div>
          </div>

          <input type="hidden" name="redirectTo" value={redirectTo} />
          <button
            type="submit"
            className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400"
          >
            Create Account
          </button>
          <div className="flex items-center justify-center">
            <div className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                className="text-blue-500 underline"
                to={{
                  pathname: "/login",
                  search: searchParams.toString(),
                }}
              >
                Log in
              </Link>
            </div>
          </div>
        </Form>
      </div>
      */
      import { Dialog, Transition } from "@headlessui/react";
      import type { ActionArgs, LinksFunction } from "@remix-run/node";
      import { redirect } from "@remix-run/node";
      import {
        Form,
        useActionData,
        useNavigate,
        useNavigation,
      } from "@remix-run/react";

      export default function ApplicantJoinModal() {
        const navigate = useNavigate();
        // const actionData = useActionData<typeof action>();
        const transition = useNavigation();
      
        function onDismiss() {
          navigate("/test-join");
        }
      
        const disabled =
          transition.state === "submitting" || transition.state === "loading";
      
        return (
            <>
    <div id="modal" className="fixed inset-0 z-30 flex items-center justify-center">
        <div className="bg-white w-full max-w-lg rounded-xl overflow-hidden p-4">
            <h2 id="modal-title" className="text-2xl font-bold mb-4">Sign Up</h2>
            <form id="sign-up-form">
                <div className="mb-4">
                    <label className="block text-gray-700">Email:</label>
                    <input type="email" name="email" className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-300"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password:</label>
                    <input type="password" name="password" className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-300"/>
                </div>
                <div id="extra-fields"></div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Sign Up</button>
            </form>
            <button id="modal-close" onClick={() => onDismiss()} className="text-gray-500 text-sm mt-3 hover:text-red-600 float-right">&times; Close</button>
        </div>
    </div>
            </>
        )
      }