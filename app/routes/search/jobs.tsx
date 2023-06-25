// import type { ActionArgs } from "@remix-run/node";
// import { redirect } from "@remix-run/node";

// import { logout } from "~/services/session.server";

// export const action = async ({ request }: ActionArgs) => logout(request);

// export const loader = async () => redirect("/");
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { matchSorter } from "match-sorter";
import { searchJobs, getAllJobPosts } from "~/models/job.server";
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
  const query = url.searchParams.get("q");

  // Search the job posts, you can go look at `app/models/job.server.ts` to see what it's doing.
  // const jobs = (await searchJobs(query || "")).slice(0, 20);

  /**
 * This is just matching a hard-coded list of values, but often you'd be
 * querying your database for a set of records. If you're using prisma with
 * postgres, you can use "fulltext" to let the database make it really fast for
 * you:
 * https://www.prisma.io/docs/concepts/components/prisma-client/full-text-search
 */
//   export async function searchJobs(query: string) {
  // artificially slowed down and chaotic where some requests start earlier but
  // land later, this is a condition many apps don't consider but Remix handles
  // for you automatically. Open the network tab and watch as Remix
  // automatically cancels the requests as they're interrupted.
  // await new Promise((res) => setTimeout(res, Math.random() * 1000));
  //const cats = getCategoryJobs(query);
  const jobs = await getAllJobPosts();
/*
if (!filterValue || !filterValue.length) {
    return items
  }

  const terms = filterValue.split(' ')
  if (!terms) {
    return items
  }

  // reduceRight will mean sorting is done by score for the _first_ entered word.
  return terms.reduceRight(
    (results, term) => matchSorter(results, term, {keys}),
    items,
  )
  */
  if (!query || !query.length) {
    return jobs;
  }
  // return matchSorter(jobs, query, { keys: ["title", "description"] });
// };
  return json(matchSorter(jobs, query, { keys: ["title", "description"] }), {
    // Add a little bit of caching so when the user backspaces a value in the
    // Combobox, the browser has a local copy of the data and doesn't make a
    // request to the server for it. No need to send a client side data fetching
    // library that caches results in memory, the browser has this ability
    // built-in.
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control
    headers: { "Cache-Control": "max-age=60" },
  });
};

/**
 * You shouldn't have to export this, we have a bug.
 * TODO: add github issue link (or just fix it)
 */
export default function Bug() {
  return null;
}