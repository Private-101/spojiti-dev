// import type { ActionArgs } from "@remix-run/node";
// import { redirect } from "@remix-run/node";

// import { logout } from "~/services/session.server";

// export const action = async ({ request }: ActionArgs) => logout(request);

// export const loader = async () => redirect("/");
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

import { searchJobs } from "~/models/job.server";
import { searchCategoryJobs } from '~/models/category.server';

/**
 * This route is called via `useFetcher` from the Combobox input. It returns a
 * set of languages as the user types. It's called a Resource Route because it
 * doesn't export a component.  You might think of it as an "API Route".
 */
export const loader = async ({ request }: LoaderArgs) => {
  // First get what the user is searching for by creating a URL:
  // https://developer.mozilla.org/en-US/docs/Web/API/URL
  // https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
  const url = new URL(request.url);
  const query = url.searchParams.get("category");
if (!query) {
  return json([]);
}
  // Search the job posts, you can go look at `app/models/job.server.ts` to see what it's doing.
  const jobs = await searchCategoryJobs(query);

  return json(jobs, {
    // Add a little bit of caching so when the user backspaces a value in the
    // Combobox, the browser has a local copy of the data and doesn't make a
    // request to the server for it. No need to send a client side data fetching
    // library that caches results in memory, the browser has this ability
    // built-in.
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control
    // headers: { "Cache-Control": "max-age=60" },
  });
};

/**
 * You shouldn't have to export this, we have a bug.
 * TODO: add github issue link (or just fix it)
 */
export default function Bug() {
  return null;
}