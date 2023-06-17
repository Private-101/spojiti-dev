import { Link } from "@remix-run/react";
import type { LoaderArgs, ActionArgs } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import { getAllCategories } from '~/models/job.server';
import { unslugify } from '~/utils';

export const loader = async ({ request }: LoaderArgs) => {
  // TODO: some kind of authentication here to guard apis
  const categories = await getAllCategories();
  return categories.map((cat, i) => {
    // TODO: create a sanitize function that basically formats the data so that there are no errors.
    // currently each route must implement this on its own. abstraction needed
    return json({
      // TODO: review performance: added metadata as an experiment for future use cases.
      metadata: {
        path: '/app/categories/index',
        title: 'categories',
        index: i
      },
      id: cat.id,
      cteatedAt: cat.createdAt.toJSON(),
      updatedAt: cat.updatedAt.toJSON(),
      title: unslugify(cat.title),
      description: cat.description ?? ''
    })
  })
};


export default function CategoriesIndexPage() {
  return (
    <p>
      No note selected. Select a note on the left, or{" "}
      <Link to="new" className="text-blue-500 underline">
        create a new note.
      </Link>
    </p>
  );
}