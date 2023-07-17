import * as React from "react";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import type { JobPost } from '~/models/job.server';
import type { Category } from "~/models/category.server";
import { getAllCategories } from '~/models/category.server';
import { getAllJobPosts, getAllJobPostsByCategory } from '~/models/job.server';

interface JobMenuLoaderData {
  categories: Category[];
  jobs: JobPost[];
}
export const loader = async ({request}: LoaderArgs) => {
  const searchParams = new URL(request.url).searchParams;
  const categories = await getAllCategories();
  // const categoryJobs: JobPost[][] = [];
  /* searchParams.forEach(async (value, key) => {
    if (value !== "") {
      const jobData = await getAllJobPostsByCategory(value);
      categoryJobs.push(jobData);
    }
  }) */
  const selectedCategory = searchParams.has("category") ? searchParams.get("category") : '';
  
  const jobs = await getAllJobPostsByCategory(selectedCategory ?? categories[0].id);
  return json<JobMenuLoaderData>({categories, jobs})
};