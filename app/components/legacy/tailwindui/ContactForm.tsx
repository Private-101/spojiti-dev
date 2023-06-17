import React, { useRef, useState, useEffect } from "react";
import type {
  ActionArgs,
  LoaderArgs,
} from "@remix-run/node"; // or cloudflare/deno
import { json, redirect } from "@remix-run/node"; // or cloudflare/deno
import { useSearchParams, Link, Form, useFetcher, useLoaderData, Outlet } from "@remix-run/react";



export default function ContactForm() {
  const fetcher = useFetcher();
  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data?.ok) {
      ref.current?.reset();
    }
  }, [fetcher]);

  return (
    <fetcher.Form
      ref={ref}
      method="post"
      action="/resources/contact-form"
    >
      <div className="mb-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full  -3 text-gray-800 :text-gray-50 dark:bg-slate-700 border-gray-500 dark:border-slate-600 outline-none focus-visible:shadow-none focus:border-primary"
          name="name"
          id="name"
        />
      </div>
      <div className="mb-6">
        <input
          type="email"
          placeholder="Your Email"
          className="
                                    w-full
                                    rounded
                                    p-3
                                    text-gray-800
                                    dark:text-gray-50
                                    dark:bg-slate-700
                                    border-gray-500
                                    dark:border-slate-600
                                    outline-none
                                    focus-visible:shadow-none
                                    focus:border-primary
                                    "
          name="email"
          id="email"
        />
      </div>
      <div className="mb-6">
        <input
          inputMode="numeric"
          placeholder="Your Phone"
          className="
                                    w-full
                                    rounded
                                    p-3
                                    text-gray-800
                                    dark:text-gray-50
                                    dark:bg-slate-700
                                    border-gray-500
                                    dark:border-slate-600
                                    outline-none
                                    focus-visible:shadow-none
                                    focus:border-primary
                                    "
          name="phone_number"
          id="phone_number"
        />
      </div>
      <div className="mb-6">
        <textarea
          rows={6}
          placeholder="Your Message"
          className="w-full rounded -3 text-gray-800 dark:text-gray-50 dark:bg-slate-700 border-gray-500 dark:border-slate-600 outline-none focus-visible:shadow-none focus:border-primary"
          name="message"
          id="message"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          disabled={fetcher.state === "submitting"}
          className="w-full text-gray-100 hover:text-gray-700 bg-yellow-400  border border-primary dark:border-slate-600 p-3 transition ease-in-out duration-500 hover:bg-yellow-300">
          Send Message
        </button>
      </div>

      {fetcher.state === "idle" && fetcher.data ? (
        fetcher.data.ok ? (
          <p>Message Sent! We will get back to you quickly to resolve your inquiry!</p>
        ) : fetcher.data.error ? (
          <p data-error>{fetcher.data.error}</p>
        ) : null
      ) : null}
    </fetcher.Form>
  );
}