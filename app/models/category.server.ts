import { matchSorter } from "match-sorter";
import type { Category } from "@prisma/client";
import { prisma } from "~/db.server";
// TODO: include strict validation to ensure only clients can make applications and employers can make job posts
// import { getUserById, updateUserById } from '~/models/user.server';

export type { Category } from "@prisma/client";

/*
type Category = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    description: string | null;
}
*/
/**
 * This is just matching a hard-coded list of values, but often you'd be
 * querying your database for a set of records. If you're using prisma with
 * postgres, you can use "fulltext" to let the database make it really fast for
 * you:
 * https://www.prisma.io/docs/concepts/components/prisma-client/full-text-search
 */
export async function searchCategoryJobs(query: string) {
  // artificially slowed down and chaotic where some requests start earlier but
  // land later, this is a condition many apps don't consider but Remix handles
  // for you automatically. Open the network tab and watch as Remix
  // automatically cancels the requests as they're interrupted.
  await new Promise((res) => setTimeout(res, Math.random() * 1000));
  const categoryJobs = await getCategoryJobs(query);
  if (!categoryJobs || !categoryJobs.jobs || categoryJobs.jobs.length < 1) return null;
  // const jobs = await getAllJobPosts();
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
  // if (!query || !query.length) {
    // return jobs;
  // }
  return categoryJobs.jobs; // matchSorter(categoryJobs.jobs, query, { keys: ["title", "description"] });
};

export async function getCategoryJobs(id: Category['id']) {
  return prisma.category.findFirst({where: {id}, include: {jobs: true}});
}

export async function categoryExists(title: Category['title']) {
    return prisma.category.findFirst({where: {title}})
  }

export async function createCategory(data: Pick<Category, 'title' | 'description'>) {
    return prisma.category.create({ data });
  };

export async function deleteCategory(id: Category["id"]) {
    return prisma.category.delete({ where: { id } });
  };

  export async function getAllCategories() {
    return prisma.category.findMany();
  }

  export async function getAllCategoriesWithJobs() {
    return prisma.category.findMany({include: {jobs: true}});
  }
