import * as React from 'react';

interface PageContainerProps {
    children: React.ReactNode;
    title: string;
    info?: string;
}

export default function PageContainer({ children, title, info }: PageContainerProps) {
    // combine title in a single string to prevent below warning
    // "Warning: A title element received an array with more than 1 element as children."
    const documentTitle = `Spojiti - ${title}`;
    return (
      <div className='flex flex-col lg:flex-row bg-slate-100'>
        {/*<SidebarNavigation />*/}
        <main className='flex flex-1 min-h-screen min-w-full'>
        <p className='mb-1 text-xl text-neutral-900 font-semibold'>{documentTitle}</p>
            <p className='mb-2 text-md font-normal text-neutral-700'>{info}</p>
            {children}
        </main>
      </div>
    );
  }