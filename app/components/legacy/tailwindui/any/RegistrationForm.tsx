import * as React from 'react';
import type {
    ActionArgs,
    LoaderArgs,
  } from "@remix-run/node"; // or cloudflare/deno
  import { json, redirect } from "@remix-run/node"; // or cloudflare/deno
  import { useSearchParams, Link, Form, useFetcher, useLoaderData, Outlet } from "@remix-run/react";

export const RegistrationForm: React.FC = () => {
    return (
        <>
{/*<script src="https://cdn.tailwindcss.com"></script>*/}

  <div className="container mx-auto py-8 bg-gray-100">
    <h1 className="text-2xl font-bold mb-6 text-center">Registration Form</h1>
    <Form method='POST' className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text" id="name" name="name" placeholder="John Doe" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="email" id="email" name="email" placeholder="john@example.com" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="password" id="password" name="password" placeholder="********" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">Confirm Password</label>
        <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="password" id="confirm-password" name="confirm-password" placeholder="********" />
      </div>
      <button
        className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
        type="submit">Register</button>
    </Form>
  </div>
        </>
    )
}