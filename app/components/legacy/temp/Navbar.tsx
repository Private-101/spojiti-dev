// app/components/Navbar.tsx

import React from 'react';
import { Link } from '@remix-run/react';

const Navbar: React.FC = () => {
    return (
      <nav className="bg-gray-800 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-white font-bold text-xl">
            <svg
              className="h-8 w-8 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <text x="12" y="16" className="text-white text-xs text-center">
                Jobs
              </text>
            </svg>
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-gray-300">
              About
            </Link>
            <Link to="/pricing" className="text-white hover:text-gray-300">
              Pricing
            </Link>
            <Link to="/contact" className="text-white hover:text-gray-300">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    );
  };
  

export default Navbar;
