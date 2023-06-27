import React from "react";
import { Link } from '@remix-run/react';
import DarkModeToggle from "~/components/common/DarkModeToggle";

type OutletContextProps = [string, (value?: React.SetStateAction<string> | undefined) => void];

interface HeaderProps {
  context: OutletContextProps
};
const Header: React.FC<HeaderProps> = ({context}) => {

  return (
    <>
      {/*<section id="#top" className="bg-gray-100 shadow py-16">
      <header className="text-center">
      <h1 className="text-3xl font-bold text-gray-900 capitalize">
      SPOJITI
      </h1>
      <p className="text-lg font-semibold text-gray-700 mt-4">The Food and Beverage Meeting Place</p>
    </header>
    <div className="flex justify-center space-x-5">
        <div className="w-24 h-24 bg-orange-500"></div>
        <div className="w-24 h-24 bg-orange-500"></div>
      </div>
  </section>*/
  
  // flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8
  // flex justify-center space-x-5
  }
      <div className="flex flex-col items-center justify-center py-16 shadow">
        <div className="flex flex-row">
          {/*context[0] === 'light' ? (
            <h2 className="mb-2 text-lg font-semibold text-black text-opacity-60">LIGHT MODE</h2>
          ) : (
            <h2 className="mb-2 text-lg font-semibold text-gray-2">DARK MODE</h2>
          )*/}
          <DarkModeToggle theme={context[0]} trigger={context[1]} />
        </div>
        <h1 className="my-2 text-4xl font-semibold text-gray-600">SPOJITI</h1>
        <h2 className="mb-6 text-2xl font-semibold text-gray-600">
          The Food and Beverage Meeting Place
        </h2>
        <div className="flex min-h-full min-w-full flex-1 flex-row justify-center space-x-5 px-6 py-12 lg:px-8">
          <div className="flex min-w-fit items-center justify-center bg-sp-primary px-12 py-12 text-lg font-semibold text-white shadow">
            <div className="flex flex-col mx-24 my-8 items-center justify-center">
            <h2 className="mb-10 text-2xl font-semibold text-white">
              Search Employers
            </h2>
            <button className="cursor-pointer rounded-md bg-sp-body-bg ml-4 px-8 py-2 text-xl outline-2 outline-double outline-sp-primary hover:outline-white text-sp-primary hover:bg-sp-primary hover:text-white scale-125 hover:scale-150 transition-all duration-200">
              <Link to='/search/employers'>
                Meet
              </Link>
            </button>
            </div>
          </div>
          <div className="flex min-w-fit items-center justify-center bg-sp-primary px-12 py-12 text-lg font-semibold text-white shadow">
          <div className="flex flex-col mx-24 my-8 items-center justify-center">
            <h2 className="mb-10 text-2xl font-semibold text-white">
              Search Candidates
            </h2>
            <button className="cursor-pointer rounded-md bg-sp-body-bg ml-4 px-8 py-2 text-xl outline-2 outline-double outline-sp-primary hover:outline-white text-sp-primary hover:bg-sp-primary hover:text-white scale-125 hover:scale-150 transition-all duration-200">
            <Link to='/search/clients'>
                Meet
              </Link>
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
