import type { ReactNode } from 'react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from '@remix-run/react';

import DashboardHeader from '~/components/dashboard/DashboardHeader';
import DashboardSidebar from '~/components/dashboard/DashboardSidebar';
import Logo from '~/components/common/assets/spojiti-logo.svg';
import useLocalStorage from '~/hooks/useLocalStorage';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useLocalStorage('sidebar-expanded', false);
  const location = useLocation();
  const { pathname } = location;
  const sidebarRef = useRef<JSX.IntrinsicElements['aside']>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // window.localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebarRef.current || !trigger.current) return;
      if (
        !sidebarExpanded ||
        sidebarRef.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarExpanded(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarExpanded || keyCode !== 27) return;
      setSidebarExpanded(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    if (sidebarRef.current && sidebarExpanded) {
      sidebarRef.current.focus();
    }
  }, []);
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <DashboardSidebar sidebarOpen={sidebarExpanded} setSidebarOpen={setSidebarExpanded} />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <DashboardHeader sidebarOpen={sidebarExpanded} setSidebarOpen={setSidebarExpanded} />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
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