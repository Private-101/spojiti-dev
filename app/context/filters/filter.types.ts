/*
import { ReactNode, ReactText } from "react";

import { Moment } from "moment";
import { DatePickerProps } from "antd/lib/date-picker";
import { SelectProps } from "antd/lib/select";
import { DefaultValueType } from "rc-tree-select/lib/interface";

export interface IFilterFieldBaseProps<T> {
  label?: string;
  shouldHide?: (form: T) => boolean;
  onlyShow?: (form: T) => boolean;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export interface IFilterSelectItem {
  value: any;
  key?: string;
  display?: string;
}

export interface IDropdownSelectProps {
  value?: string | number;
  className?: string;
  menuClassName?: string;
  itemClassName?: string;
  emptyLocale?: string;
  placeholderClassName?: string;
  menuWidth?: number;
  disabled?: boolean;
  renderValue?: (x: any) => ReactNode;
  followWheel?: boolean;
}

export interface IFilterDropdownSelectField<T, K extends keyof T = keyof T> extends IFilterFieldBaseProps<T> {
  name: K;
  type: "dropdown-select";
  options: IFilterSelectItem[];
  placeholder?: string;
  allowClear?: boolean;
  selectProps?: IDropdownSelectProps;
  translateNonStringvalue?: boolean;
  valueClassName?: string;
}

export interface IFilterSelectField<T, K extends keyof T = keyof T> extends IFilterFieldBaseProps<T> {
  name: K;
  type: "select";
  options: IFilterSelectItem[];
  placeholder?: string;
  allowClear?: boolean;
  selectProps?: SelectProps<DefaultValueType>;
  translateNonStringvalue?: boolean;
  valueClassName?: string;
}

export interface IFilterDatePickerField<T, K extends keyof T = keyof T> extends IFilterFieldBaseProps<T> {
  name: K;
  type: "date-picker";
  placeholder?: string;
  allowClear?: boolean;
  disabled?: boolean;
  /** 组件选中的值, 设置到 form object 之前如果需要进行转换 /
  transformSelectedValue?: (clonedDateObj: Moment, dateString: string) => string;
  datePickerProps?: DatePickerProps;
  valueClassName?: string;
}

export interface IFilterCustomField<T, K extends keyof T = keyof T> extends IFilterFieldBaseProps<T> {
  name: K;
  type: "custom";
  /** parent container is using column,
   * for antd inputs with default with 100%, you need to take care of that by yourself
   * @param current value in this field
   * @param onChange update value in this field
   * @param form the form
   /
  render: (value: any, onChange: (x: any) => void, form: T) => ReactNode;
  valueClassName?: string;
}

export type IFilterFieldItem<T = any> = IFilterDropdownSelectField<T> | IFilterSelectField<T> | IFilterDatePickerField<T> | IFilterCustomField<T>;

export type FuncUpdateItem<T> = (x: any, item: IFilterFieldItem<T>) => void;
*/

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

// TODO: where does the <T> actually go for best efficiency?
export type FilterFn<T> = (item: T, index: number) => boolean;
// export type FilterFn<T> = (item: T, index: number) => boolean

export type BlankVoidFn = () => void;
export type SortOption = 'asc' | 'desc';

/** TEMP DATA TODO: modify */       /** TEMP DATA TODO: modify */       /** TEMP DATA TODO: modify */
/** TEMP DATA TODO: modify */       /** TEMP DATA TODO: modify */       /** TEMP DATA TODO: modify */
/** TEMP DATA TODO: modify */       /** TEMP DATA TODO: modify */       /** TEMP DATA TODO: modify */
/** TEMP DATA TODO: modify */       /** TEMP DATA TODO: modify */       /** TEMP DATA TODO: modify */
/** TEMP DATA TODO: modify */       /** TEMP DATA TODO: modify */       /** TEMP DATA TODO: modify */

export type Themes =
  | 'GitHub'
  | 'GitHubDark'
  | 'Winter'
  | 'GitLab'
  | 'GitLabDark'
  | 'Halloween'
  | 'Dracula'
  | 'Slate'
  | 'Rose'
  | 'Indigo'
  | 'Emerald'
  | 'Sky'
  | 'Amber'

export interface Theme {
  name: Themes
  textColor: string
  levelColors: [level_0: string, level_1: string, level_2: string, level_3: string, level_4: string]
  background: string
  mode?: 'light' | 'dark'
}

export type GitHubUsername = string
export type ContributionYear = number

export interface GitHubUser {
  name?: string
  login: GitHubUsername
  avatarUrl: string
  contributionsCollection: {
    years: ContributionYear[]
  }
}

export interface GitHubContributionCalendar {
  contributionsCollection: {
    contributionCalendar: ContributionCalendar
  }
}

export interface ContributionBasic {
  name?: string
  login: GitHubUsername
  avatarUrl: string
  contributionYears: ContributionYear[]
}

/** Check out: {@link https://docs.github.com/en/graphql/reference/enums#contributionlevel} */
export const enum ContributionLevel {
  Null = 'Null',
  NONE = 'NONE',
  FIRST_QUARTILE = 'FIRST_QUARTILE',
  SECOND_QUARTILE = 'SECOND_QUARTILE',
  THIRD_QUARTILE = 'THIRD_QUARTILE',
  FOURTH_QUARTILE = 'FOURTH_QUARTILE',
}

export interface ContributionDay {
  level: `${ContributionLevel}`
  weekday?: 0 | 1 | 2 | 3 | 4 | 5 | 6
}

export interface ContributionCalendar {
  total: number
  year: number
  weeks: {
    days: ContributionDay[]
  }[]
}

export interface GraphData extends ContributionBasic {
  contributionCalendars: ContributionCalendar[]
}

export const enum ErrorType {
  BadCredentials,
  BadRequest,
}

export interface ResponseData {
  errorType?: ErrorType
  message?: string
  data?: GraphData
}

export const enum GraphSize {
  Small = 's',
  Medium = 'm',
  Large = 'l',
}

export const enum DisplayName {
  Username = '0',
  ProfileName = '1',
}

export interface GraphSettings {
  displayName?: DisplayName
  yearRange?: [start_year: string | null | undefined, end_year: string | null | undefined]
  showAttribution?: boolean
  size?: GraphSize
  theme?: Themes
}

export interface GitHubApiJson<Data> {
  data?: Data
  message?: string
  errors?: { type: string; message: string }[]
}