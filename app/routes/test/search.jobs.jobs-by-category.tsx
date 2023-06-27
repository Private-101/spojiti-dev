import * as React from "react";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import type { JobPost } from '~/models/job.server';
import type { Category } from "~/models/category.server";
import { getAllCategories } from '~/models/category.server';
import { getAllJobPosts, getAllJobPostsByCategory } from '~/models/job.server';
import invariant from "tiny-invariant";
/*
interface JobsByCategoryLoaderData {
  categoryJobs: JobPost[];
}
export const loader = async ({request, params}: LoaderArgs) => {
    invariant(params.categoryId, "Category ID required");
  const searchParams = new URL(request.url).searchParams;
  const selectedCategory = searchParams.has("category") ? searchParams.get("category") : '';
  // const categories = await getAllCategories();
  const categoryJobs: JobPost[] = await getAllJobPostsByCategory(selectedCategory ?? categories[0].id);
  // const jobs = await getAllJobPostsByCategory();
  // if ()
  searchParams.forEach(async (value, key) => {
    if (value !== "") {
      const jobData = await getAllJobPostsByCategory(value);
      categoryJobs.push(jobData);
    }
  })
  
  
  
  return json<JobsByCategoryLoaderData>({categoryJobs})
};
*/