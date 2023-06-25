# Data Types

__Legend__
/*/ = Filter Value


## Category
    id: string;
    createdAt: Date; /*/
    updatedAt: Date; /*/
    title: string; /*/
    description: string | null;

## JobPost
    id: string;
    createdAt: Date; /*/
    updatedAt: Date; /*/
    title: string; /*/
    description: string;
    is_full_time: boolean; /*/
    start_date: Date; /*/
    end_date: Date | null; /*/
    responsibilities: string | null;
    requirements: string | null;
    salary_range_min: number; /*/
    salary_range_max: number; /*/
    userId: string;

## User
    id: string;
    createdAt: Date; /*/
    updatedAt: Date; /*/
    email: string;
    password_hash: string;
    role: string; /*/
    avatarUrl: string | null;
    notificationsCount: number;
    firstName: string | null;
    lastName: string | null;
    streetAddress: string | null;
    unit: string | null;
    city: string | null;
    state: string | null;
    zipCode: string | null;

## Application
    id: string;
    createdAt: Date; /*/
    updatedAt: Date; /*/
    userId: string;
    jobId: string;
    status: string; /*/

## Notification
    id: string;
    createdAt: Date; /*/
    updatedAt: Date; 
    title: string;
    description: string;
    is_read: boolean; /*/
    userId: string;

## Location _experimental_
    id: string;
    createdAt: Date; /*/
    updatedAt: Date; /*/
    streetAddress: string | null;
    unit: string | null;
    city: string | null; /*/
    state: string | null; /*/
    zipCode: string | null; /*/