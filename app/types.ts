import type { User } from '~/models/user.server';
import type { Category, JobPost } from '~/models/job.server';
import type { ReactNode } from "react";

export type PropsWithChildrenFunction<P, T> = P & {
    children?(item: T): ReactNode;
}


  export interface JobMenuData {
    categories: Category[];
    jobs: JobPost[];
  }