import * as React from "react";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import type { JobPost } from '~/models/job.server';
import type { Category } from "~/models/category.server";
import { getAllCategories } from '~/models/category.server';
import { getAllJobPosts, getAllJobPostsByCategory } from '~/models/job.server';

interface FormattedCategory {
    id: string;
    createdAt: string;
    updatedAt: string;
    title: string;
    description: string;   
}
interface CategoriesLoaderData {
    formattedCategories: FormattedCategory[];
}
export const loader = async ({request}: LoaderArgs) => {
  // const searchParams = new URL(request.url).searchParams;
  const categories = await getAllCategories();
  const formattedCategories: FormattedCategory[] = categories.map((cat) => {
    return {
        id: cat.id,
        createdAt: cat.createdAt.toString(),
        updatedAt: cat.updatedAt.toString(),
        title: cat.title,
        description: cat.description ?? ''
    }
  })
  
  return json<CategoriesLoaderData>({formattedCategories})
};