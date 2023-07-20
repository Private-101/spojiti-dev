

export const user = {
    name: "Tom Cook",
    email: "tom@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };
  
  export const navigation = [
    { name: "Top", href: "#top", current: true },
    { name: "Features", href: "#features", current: false },
    { name: "Pricing", href: "#pricing", current: false },
    { name: "Contact Us", href: "#contact-us", current: false },
    // { name: 'Sign Up', href: '/sign-up', current: false },
    // { name: 'Login', href: '/login', current: false },
  ];

  export const userNavigation = [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
  ];
  
  interface DropdownItemProps {
    title: string;
    url: string;
  };

  interface IDropdownItems {
    [key: string]: DropdownItemProps[]
  }

  export const dropdownItems: IDropdownItems = {
    Applicants: [{title: "Find Jobs", url: '/search/jobs'}, {title: "Post Resume", url: '/login?redirectTo=post-resume'}, {title: "Company Listings", url: '/search/restaurants'}],
    Employers: [{title: "Find Applicants", url: '/search/applicants'}, {title: "Post Job", url: '/login?redirectTo=post-job'}, {title: "Pricing", url: '/home#pricing'}],
  };




