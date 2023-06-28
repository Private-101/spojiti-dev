import type { User } from '~/models/user.server';
import type { Category, JobPost } from '~/models/job.server';

  export interface JobMenuData {
    categories: Category[];
    jobs: JobPost[];
  }