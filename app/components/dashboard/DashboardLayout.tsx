import type { ReactNode } from 'react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { NavLink, useLocation, useOutletContext } from '@remix-run/react';

import DashboardHeader from '~/components/dashboard/DashboardHeader';
import DashboardSidebar from '~/components/dashboard/DashboardSidebar';
import Logo from '~/components/common/assets/spojiti-logo.svg';
import type { FormattedUser } from '~/context/user.context';
// import type { User } from '~/models/user.server';
// import useLocalStorage from '~/hooks/useLocalStorage';

/* interface OutletContextProps {
  user: User;
}; */

interface DashboardLayoutProps {
  children: ReactNode;
  user: FormattedUser;
}

const DashboardLayout = ({ children, user }: DashboardLayoutProps) => {
  // const { user } = useOutletContext<OutletContextProps>();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  // const [sidebarExpanded, setSidebarExpanded] = useLocalStorage('sidebar-expanded', false);
  const location = useLocation();
  const { pathname } = location;
  const sidebarRef = useRef<JSX.IntrinsicElements['aside']>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // window.localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarOpen) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarOpen]);

  // TODO: make this work, fix errors
  // close on click outside
  /* useEffect(() => {
    const clickHandler = ({ currentTarget }: MouseEvent) => {
      if (!sidebarRef.current || !triggerRef.current) return;
      if (
        !sidebarExpanded ||
        sidebarRef.current.contains(target) ||
        triggerRef.current.contains(target)
      )
        return;
      setSidebarExpanded(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }); */

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      // key: "Esc" is for Firefox browsers v 39 and earlier
      if (sidebarOpen && key === "Escape" || sidebarOpen && key === "Esc") {
        setSidebarOpen(false);
      }
      return;
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  /* useEffect(() => {
    if (sidebarRef.current && sidebarExpanded) {
      sidebarRef.current.focus();
    }
  }, []); */
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <DashboardSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <DashboardHeader user={user} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
  );
};

export default DashboardLayout;