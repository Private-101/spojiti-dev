import * as React from "react";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import type { JobPost } from '~/models/job.server';
import type { Category } from "~/models/category.server";
import { getAllCategories } from '~/models/category.server';
import { getAllJobPosts, getAllJobPostsByCategory } from '~/models/job.server';
import invariant from "tiny-invariant";

interface FormattedJobPost {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  description: string;
  is_full_time: boolean;
  start_date: string;
  end_date: string | null;
  responsibilities: string | null;
  requirements: string | null;
  salary_range_min: number;
  salary_range_max: number;
  userId: string;
}

interface JobsByCategoryLoaderData {
  formattedCategoryJobs: FormattedJobPost[];
}

export const loader = async ({request, params}: LoaderArgs) => {
    invariant(params.categoryId, "Category ID required");
    const categoryJobs: JobPost[] = await getAllJobPostsByCategory(params.categoryId);
    const formattedCategoryJobs: FormattedJobPost[] = categoryJobs.map((job) => {
      return {
        id: job.id,
      createdAt: job.createdAt.toDateString(),
      updatedAt: job.updatedAt.toDateString(),
      title: job.title,
      description: job.description,
      is_full_time: job.is_full_time,
      start_date: job.start_date.toDateString(),
      end_date: job.end_date?.toDateString() ?? null,
      responsibilities: job.responsibilities,
      requirements: job.requirements,
      salary_range_min: job.salary_range_min,
      salary_range_max: job.salary_range_max,
      userId: job.userId
      }
    });
  return json<JobsByCategoryLoaderData>({formattedCategoryJobs});
};