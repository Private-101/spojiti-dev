interface JobPostPreview {
    title: string;
    employer: string;
    location: {
        city: string;
        state: string;
        zipCode: string;
    };
    salary: {
        value: number;
        timeFrame: 'yearly' | 'monthly' | 'biweekly' | 'weekly' | 'daily' | 'hourly' | 'other';
    };
    employmentType: 'fulltime' | 'parttime' | 'contract' | 'athome' | 'other';
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
    location: Partial<ILocation>;
    salary: EmploymentSalary;
    employmentType: EmploymentType;
    employmentLocation: EmploymentLocation;
    experience: ExperienceRequiredType[]
    education: string;
    availability: EmploymentAvailability[];
    questions: string[];
    // max charecter length 2000?
    description: string;
    responsabilities: ['Overseeing daily business operations', 'Developing and implementing growth strategies', 'Training low-level managers and staff', 'Creating and managing budgets', 'Improving revenue', 'Hiring employees', 'Evaluating performance and productivity', 'Analyzing accounting and financial data', 'Researching and identifying growth opportunities', 'Generating reports and giving presentations']
};

type FilterOption = ExperienceRequiredType | EmploymentType | EmploymentLocation;
type EmploymentType = 'fulltime' | 'parttime' | 'contract' | 'temp' | 'other';
type EmploymentAvailability = '8 hour shift' | 'Weekends as needed' | 'Saturday' | 'Sunday' | 'Morning shift' | 'Evening shift' | 'Day shift' | 'Night shift' | 'Monday to Friday' | string;
type EmploymentLocation = Location | 'remote' | string;
type ExperienceRequiredType = {title: string; required: boolean };
type EmploymentSalary = { [key: EmploymentSalaryType]: {value: number; timeFrame: EmploymentSalaryTimeFrame}};
type EmploymentSalaryType = 'minimum' | 'maximum';
type EmploymentSalaryTimeFrame = 'yearly' | 'monthly' | 'biweekly' | 'weekly' | 'daily' | 'hourly' | string;
interface Filters {
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

