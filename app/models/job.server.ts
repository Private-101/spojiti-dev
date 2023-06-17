import type { JobPost, JobApplication, User, Category } from "@prisma/client";

import { prisma } from "~/db.server";
// TODO: include strict validation to ensure only clients can make applications and employers can make job posts
// import { getUserById, updateUserById } from '~/models/user.server';

export type { JobPost, JobApplication } from "@prisma/client";

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

type Category = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    description: string | null;
}
*/

// TODO: might be unnecessary to have other get functions. 
//filters can be applied to data returned from here. 
//Also, the user.noteCount param is probably unnecessary since 
//prisma has a count function that is filtered by user id.
export async function getAllJobPosts() {   
  return prisma.jobPost.findMany();
};

// TODO: maybe include a notification in each function to notify the user of results?

export async function getAllJobApplications() {   
    return prisma.jobApplication.findMany();
  };

  export async function categoryExists(title: Category['title']) {
    return prisma.category.findFirst({where: {title}})
  }

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

  export async function createCategory(data: Pick<Category, 'title' | 'description'>) {
    return prisma.category.create({ data });
  };

export async function deleteJobPost(id: JobPost["id"]) {
  return prisma.jobPost.delete({ where: { id } });
};

export async function deleteJobApplication(id: JobApplication["id"]) {
    return prisma.jobApplication.delete({ where: { id } });
  };

  export async function deleteCategory(id: Category["id"]) {
    return prisma.category.delete({ where: { id } });
  };

  export async function getAllCategories() {
    return prisma.category.findMany();
  }
