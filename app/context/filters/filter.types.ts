interface JobPostPreview {
    title: string;
    employer: string;
    location: Partial<Location>;
    salary: EmploymentSalary;
    employmentType: EmploymentType;
    updatedAt: string;
    createdAt: string;
};

interface JobPost {
    id: string;
    updatedAt: string;
    createdAt: string;

    title: string;
    position: string;
    employer: string;
    location: Partial<Location>;
    salary: EmploymentSalary;
    employmentType: EmploymentType;
    employmentLocation: EmploymentLocation;
    experience: ExperienceRequiredType[]
    education: string;
    availability: EmploymentAvailability[];
    questions: string[];
    // max charecter length 2000?
    description: string;
    responsabilities: EmploymentResponsibilityType[]
};

export enum FilterOptionsEnum {
    EmploymentType, 
    EmploymentAvailability, 
    EmploymentLocation,
    EmploymentSalary, 
    EmploymentResponsibilityType, 
    ExperienceRequiredType, 
    
};

type FilterOption = EmploymentAvailability | EmploymentSalary | EmploymentResponsibilityType | ExperienceRequiredType | EmploymentType | EmploymentLocation;
type EmploymentType = 'fulltime' | 'parttime' | 'contract' | 'temp' | string;
type EmploymentAvailability = '8 hour shift' | 'Weekends as needed' | 'Saturday' | 'Sunday' | 'Morning shift' | 'Evening shift' | 'Day shift' | 'Night shift' | 'Monday to Friday' | string;
type EmploymentLocation = Location | 'remote' | string;
type ExperienceRequiredType = {title: string; required: boolean };
// type EmploymentSalaryKeyType = 'minimum' | 'maximum';
type EmploymentSalaryValueType = {value: number; timeFrame?: EmploymentSalaryTimeFrame};
type EmploymentSalary = {
    minimum?: EmploymentSalaryValueType;
    maximum?: EmploymentSalaryValueType;
}
type EmploymentSalaryTimeFrame = 'yearly' | 'monthly' | 'biweekly' | 'weekly' | 'daily' | 'hourly' | string;
type EmploymentResponsibilityType = 'Overseeing daily business operations' | 'Developing and implementing growth strategies' | 'Training low-level managers and staff' | 'Creating and managing budgets' | 'Improving revenue' | 'Hiring employees' | 'Evaluating performance and productivity' | 'Analyzing accounting and financial data' | 'Researching and identifying growth opportunities' | 'Generating reports and giving presentations' | string;
// type FilterFunction<T> = (option: FilterOption) => (value: T, index: number, arr: Array<T>) => boolean;


interface FilterContextProps {
datePosted: string;
jobType: string;
experienceLevel: string;
location: Partial<Location>;
pay: string;
distance: string; // Within25miles
shiftorSchedule: string;
encouragedToApply: boolean;
company: string;
postedby: string;
};

interface Location {
    type?: 'commercial' | 'residential';
    street: string;
    unit?: string;
    city: string;
    state: string;
    zipCode: string;
};

