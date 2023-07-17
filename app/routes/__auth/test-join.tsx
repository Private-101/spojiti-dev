import type { ActionArgs, LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useSearchParams, Outlet, useNavigate, useNavigation } from "@remix-run/react";
import { useEffect, useRef, useState, Fragment } from "react";

import { createUser, getUserByEmail } from "~/models/user.server";
import { createUserSession, getUserId } from "~/services/session.server";
import { safeRedirect, validateEmail } from "~/utils";
import {
    isRouteErrorResponse,
    useRouteError,
} from "@remix-run/react";
import { Dialog, Transition } from "@headlessui/react";

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
export const loader = async ({ request }: LoaderArgs) => {
    // const userId = await getUserId(request);
    // if (userId) return redirect("/");
    return json({});
};

export const action = async ({ request }: ActionArgs) => {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    // const role = formData.get("role")?.toString() ?? 'guest';
    const redirectTo = safeRedirect(formData.get("redirectTo"), "/");

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

    if (password.length < 8) {
        return json(
            { errors: { email: null, password: "Password is too short" } },
            { status: 400 }
        );
    }

    const existingUser = await getUserByEmail(email);
    if (existingUser) {
        return json(
            {
                errors: {
                    email: "A user already exists with this email",
                    password: null,
                },
            },
            { status: 400 }
        );
    }

    const user = await createUser(email, password, 'guest');

    return createUserSession({
        redirectTo,
        remember: false,
        request,
        userId: user.id,
        userRole: 'guest'
    });
};

export const meta: V2_MetaFunction = () => [{ title: "Sign Up" }];

export default function JoinRoute() {
    const [showEmployerSignupForm, setShowEmployerSignupForm] = useState(false);
    const [showApplicantSignupForm, setShowApplicantSignupForm] = useState(false);
    const navigate = useNavigate();
    const transition = useNavigation();

    function onEmployerClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        // e.preventDefault();
        // navigate("/test-join/employer");
        setShowEmployerSignupForm(true);
    };

    function onApplicantClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        // e.preventDefault();
        // navigate("/test-join/applicant");
        setShowApplicantSignupForm(true);
    };

    const disabled =
        transition.state === "submitting" || transition.state === "loading";

    const [searchParams] = useSearchParams();
    const redirectTo = searchParams.get("redirectTo") ?? undefined;
    const actionData = useActionData<typeof action>();
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    // const roleRef = useRef<HTMLInputElement>(null);

    // const [isChecked, setIsChecked] = useState(false);
    // roleRef.current?.checked
    useEffect(() => {
        if (actionData?.errors?.email) {
            emailRef.current?.focus();
        } else if (actionData?.errors?.password) {
            passwordRef.current?.focus();
        }
    }, [actionData]);

    return (
        <>
            {/*<Transition
                show={showSignupForm}
                as={'div'}
                enter="transition-all duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-all duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <Outlet />
    </Transition>*/}
            <Transition
                show={!showEmployerSignupForm && !showApplicantSignupForm}
                as={'div'}
                enter="transition-all ease-in duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-all ease-out duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <main className="flex flex-col mt-12 text-center items-center justify-center">
                    <div id='button-container' className="flex flex-row">
                        <div className="container p-32 mx-8 border-2 border-black">
                            <div className="container items-center justify-center text-center space-x-4">
                                <label htmlFor="employer-btn" className="inline-block w-auto text-lg font-bold text-gray-800 dark:text-gray-200">
                                    Looking to hire?
                                </label>
                                <button id="employer-btn" onClick={(e) => onEmployerClick(e)} className="bg-sp-primary hover:bg-sp-primary/80 text-whiten hover:text-white hover:shadow-md hover:scale-110 py-2 px-4 rounded-md m-2">
                                    Employers Click Here
                                </button>
                            </div>
                        </div>
                        <div className="container p-32 mx-8 border-2 border-black">
                            <div className="container items-center justify-center text-center space-x-4">
                                <label htmlFor="employer-btn" className="inline-block w-auto text-lg font-bold text-gray-800 dark:text-gray-200">
                                    Looking for a job?
                                </label>
                                <button id="applicant-btn" onClick={(e) => onApplicantClick(e)} className="bg-sp-primary hover:bg-sp-primary/80 text-whiten hover:text-white hover:shadow-md hover:scale-110 py-2 px-4 rounded-md m-2">
                                    Applicants Click Here
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </Transition>
            <Transition
                show={showEmployerSignupForm || showApplicantSignupForm}
                as={'div'}>

                {/* The backdrop, rendered as a fixed sibling to the panel container */}
                <div className="fixed inset-0 bg-black/60" aria-hidden="true" />

                <SignUpModal show={showEmployerSignupForm} setShow={setShowEmployerSignupForm} />
                <SignUpModal show={showApplicantSignupForm} setShow={setShowApplicantSignupForm} />

            </Transition>
        </>
    );
};

interface IModalProps {
    show: boolean;
    setShow: (show: boolean) => void;
};

const SignUpModal = ({ show, setShow }: IModalProps) => {
    return (
        <Transition appear show={show} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={() => setShow(false)}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                    enterTo='opacity-100 translate-y-0 sm:scale-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                    leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                    enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                    enterTo='opacity-100 translate-y-0 sm:scale-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                    leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Sign Up
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        We'll never share your email with anyone else.
                                    </p>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};



/*
MODALS

<Transition
                    show={showApplicantSignupForm}
                    as={'div'}
                    enter="transition-all duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-all duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog
                        onClose={() => setShowApplicantSignupForm(false)}
                        className="relative z-50"
                    >
                        {/* The backdrop, rendered as a fixed sibling to the panel container }
                        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />

                        {/* Full-screen container to center the panel }
                        <div id="applicant-sign-up-modal" className="fixed inset-0 flex items-center justify-center p-4">
                            {/* The actual dialog panel  }
                            <Dialog.Panel className="bg-white w-full max-w-lg rounded-xl overflow-hidden p-4">
                                <Dialog.Title>Applicant Sign Up</Dialog.Title>
                                <form id="applicant-sign-up-form">
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Email:</label>
                                        <input type="email" name="email" className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-300" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Password:</label>
                                        <input type="password" name="password" className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-300" />
                                    </div>
                                    <div id="extra-fields"></div>
                                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Sign Up</button>
                                </form>
                                <button id="modal-close" onClick={() => setShowApplicantSignupForm(false)} className="text-gray-500 text-sm mt-3 hover:text-red-600 float-right">&times; Close</button>

                            </Dialog.Panel>
                        </div>
                    </Dialog>
                </Transition>

                <Transition
                    show={showEmployerSignupForm}
                    as={'div'}
                    enter="transition-all duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-all duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog
                        onClose={() => setShowEmployerSignupForm(false)}
                        className="relative z-50"
                    >
                        

                        {/* Full-screen container to center the panel }
                        <div id="employer-sign-up-modal" className="fixed inset-0 flex items-center justify-center p-4">
                            {/* The actual dialog panel  }
                            <Dialog.Panel className="bg-white w-full max-w-lg rounded-xl overflow-hidden p-4">
                                <Dialog.Title>Employer Sign Up</Dialog.Title>
                                <form id="employer-sign-up-form">
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Email:</label>
                                        <input type="email" name="email" className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-300" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700">Password:</label>
                                        <input type="password" name="password" className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-300" />
                                    </div>
                                    <div id="extra-fields"></div>
                                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Sign Up</button>
                                </form>
                                <button id="modal-close" onClick={() => setShowEmployerSignupForm(false)} className="text-gray-500 text-sm mt-3 hover:text-red-600 float-right">&times; Close</button>

                            </Dialog.Panel>
                        </div>
                    </Dialog>
                </Transition>

*/











/*
Applicant Modal

<div id="modal" className="fixed inset-0 z-30 flex items-center justify-center">
                        <div className="bg-white w-full max-w-lg rounded-xl overflow-hidden p-4">
                            <h2 id="modal-title" className="text-2xl font-bold mb-4">Sign Up</h2>
                            <form id="sign-up-form">
                                <div className="mb-4">
                                    <label className="block text-gray-700">Email:</label>
                                    <input type="email" name="email" className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-300" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Password:</label>
                                    <input type="password" name="password" className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-300" />
                                </div>
                                <div id="extra-fields"></div>
                                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Sign Up</button>
                            </form>
                            <button id="modal-close" onClick={() => setShowApplicantSignupForm(false)} className="text-gray-500 text-sm mt-3 hover:text-red-600 float-right">&times; Close</button>
                        </div>
                    </div>
                    */