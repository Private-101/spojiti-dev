import * as React from 'react';
import { Outlet } from '@remix-run/react';

const PublicPage: React.FC = () => {
    return (
        <>
        <header className="bg-sp-body-bg shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Spojiti: Great Jobs!</h1>
          </div>
        </header>
        <main>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                <Outlet />
            </div>
        </main>
        </>
    );
};

export default PublicPage;
