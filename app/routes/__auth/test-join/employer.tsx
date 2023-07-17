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
        useTransition,
      } from "@remix-run/react";
      
      export const action = async ({ request }: ActionArgs) => {
        // Here we can update our database with the new invoice
      
        // This is just so we can see the transition
        return new Promise((resolve) =>
          setTimeout(() => {
            resolve(redirect(`/invoices/`));
          }, 2000),
        );
      };
      
      export default function EmployerJoinModal() {
        const navigate = useNavigate();
        const actionData = useActionData<typeof action>();
        const transition = useNavigation();
      
        function onDismiss() {
          navigate("/test-join");
        }
      
        const disabled =
          transition.state === "submitting" || transition.state === "loading";
      
        return (
          <div className="min-w-full min-h-full bg-black/60">
            <Transition appear show={true} as="div">
            <Dialog as="div" className="fixed inset-0 z-10" open={true} onClose={onDismiss}>
              <Dialog.Overlay className="fixed inset-0" />
              <div className="flex items-center justify-center min-h-screen">
                <Dialog.Title className="text-lg">Add invoice</Dialog.Title>
                <Form
                  method="post"
                  replace
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <label htmlFor="company">Company</label>
                  <input
                    // defaultValue={actionData?.fields?.company}
                    defaultValue={''}
                    type="text"
                    name="company"
                    id="company"
                  />
      
                  <label htmlFor="description">Description</label>
                  <textarea
                    // defaultValue={actionData?.fields?.description}
                    defaultValue={''}
                    name="description"
                    id="description"
                    rows={10}
                  />
      
                  <label htmlFor="amount">Amount</label>
                  <input
                    // defaultValue={actionData?.fields?.amount}
                    defaultValue={''}
                    type="number"
                    name="amount"
                    id="amount"
                  />
                  <label htmlFor="date">Date</label>
                  <input
                    // defaultValue={actionData?.fields?.date}
                    defaultValue={''}
                    type="date"
                    name="date"
                    id="date"
                  />
                  <div>
                    <button type="submit" disabled={disabled}>
                      Add
                    </button>
                    <button type="button" onClick={onDismiss} disabled={disabled}>
                      Cancel
                    </button>
                  </div>
                </Form>
              </div>
            </Dialog>
          </Transition>
          </div>
        );
      }
      