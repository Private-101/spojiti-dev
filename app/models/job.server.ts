import { matchSorter } from "match-sorter";
import type { JobPost, JobApplication, User, Category } from "@prisma/client";
import { prisma } from "~/db.server";
// TODO: include strict validation to ensure only clients can make applications and employers can make job posts
// import { getUserById, updateUserById } from '~/models/user.server';
import { getCategoryJobs } from '~/models/category.server';

export type { JobPost, JobApplication } from "@prisma/client";

/**
 * This is just matching a hard-coded list of values, but often you'd be
 * querying your database for a set of records. If you're using prisma with
 * postgres, you can use "fulltext" to let the database make it really fast for
 * you:
 * https://www.prisma.io/docs/concepts/components/prisma-client/full-text-search
 */
export async function searchJobs(query: string) {
  // artificially slowed down and chaotic where some requests start earlier but
  // land later, this is a condition many apps don't consider but Remix handles
  // for you automatically. Open the network tab and watch as Remix
  // automatically cancels the requests as they're interrupted.
  await new Promise((res) => setTimeout(res, Math.random() * 1000));
  const cats = getCategoryJobs(query);
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
  return matchSorter(jobs, query, { keys: ["title", "description"] });
};



/*
type JobPost = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    description: string;
    is_full_time: boolean;
    start_date: Date;
    end_date: Date | null;
    responsibilities: string | null;
    requirements: string | null;
    salary_range_min: number;
    salary_range_max: number;
    userId: string;
}

type JobApplication = {
    id: string;
    userId: string;
    jobId: string;
    status: string;
}
*/

// TODO: might be unnecessary to have other get functions. 
//filters can be applied to data returned from here. 
//Also, the user.noteCount param is probably unnecessary since 
//prisma has a count function that is filtered by user id.
export async function getAllJobPosts() {   
  return prisma.jobPost.findMany();
};

export async function getAllJobPostsByCategory(catId: string) {   
  return prisma.jobPost.findMany({
    where: {}
  });
};

// TODO: maybe include a notification in each function to notify the user of results?

export async function getAllJobApplications() {   
    return prisma.jobApplication.findMany();
  };

  

  export async function createJobPost(userId: User["id"], job: Omit<JobPost, 'id' | 'createdAt' | 'updatedAt' | 'userId'>, categories: Pick<Category, 'id' | 'title'>[] = []) {
    
    const categoryConnectOrCreate = categories.map((cat) => ({
      where: { id: cat.id },
      create: { title: cat.title },
    }));
  /*
  {
            where: {id: categories[0].id},
            create: {title: categories[0].title}
          }
          */
    return prisma.jobPost.create({
      data: {
        ...job,
        userId,
        categories: {
          connectOrCreate: categoryConnectOrCreate
        },
      },
    });
  }
  
  /*
  export async function createJobPost(userId: User["id"], job: Omit<JobPost, 'id' | 'createdAt' | 'updatedAt' | 'userId'>, categories: Category['title'][]) {
    const check = async () => categories.forEach(async (cat) => {
        const exists = await categoryExists(cat);
        if (!exists) {
            return await prisma.category.create({data: {title: cat}});
        };
    });
    await check().then(() => prisma.jobPost.create({
        data: {
          ...job,
          userId,
          categories: {
            connect: categories.map((cat) => {return {connect: {title: cat}}})
          },
        },
      });)
    // const categoryConnectOrCreate = categories.map((title) => ({
      // where: { title }
    // }));
  
    
  }
*/

export async function createJobApplication(userId: User["id"], jobId: JobPost['id']) {
    
    return prisma.jobApplication.create({
      data: {
        status: 'submitted',
        userId,
        jobId,
      },
    });
  };

  export async function updateJobApplicationStatus(id: JobApplication["id"], status: JobApplication['status']) {
    // TODO: add validation to ensure only specific options are set for status
    return prisma.jobApplication.update({
      where: { id },
      data: { status }
    });
  };

  

export async function deleteJobPost(id: JobPost["id"]) {
  return prisma.jobPost.delete({ where: { id } });
};

export async function deleteJobApplication(id: JobApplication["id"]) {
    return prisma.jobApplication.delete({ where: { id } });
  };

