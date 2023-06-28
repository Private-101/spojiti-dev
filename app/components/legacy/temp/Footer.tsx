/**
 * the Footer component includes social media links (Facebook, Twitter, Instagram), page links (Home, About, Pricing, Contact), and common legal disclaimers (Terms of Service, Privacy Policy, Cookie Policy). You can customize the links, URLs, and legal disclaimer text based on your requirements.
 */

import React from 'react';
import { Link } from '@remix-run/react';
const Footer: React.FC = () => {
  return (
    <footer className="bg-sp-body-bg dark:bg-sp-accent text-gray-800 rounded-md ring-2 ring-sp-accent dark:ring-black flex justify-between items-center scroll-smooth m-2 px-12 py-12 fixed bottom-0 left-0 right-0 md:sticky w-full">
      <div className="container mx-auto flex flex-row md:flex-col justify-between items-center">
        {/*<div className="flex flex-col md:flex-row md:space-x-4 mb-0 md:mb-4">
          <Link to="/home#top" className="hover:text-sp-primary">
            Facebook
          </Link>
          <Link to="/home#top" className="hover:text-sp-primary">
            Twitter
          </Link>
          <Link to="/home#top" className="hover:text-sp-primary">
            Instagram
          </Link>
  </div>*/}
        <div className="flex flex-col md:flex-row md:space-x-4 mb-0 md:mb-4">
          <Link to="/home#top" className="hover:text-sp-primary">
            Home
          </Link>
          <Link to="/home#features" className="hover:text-sp-primary">
            Features
          </Link>
          <Link to="/home#pricing" className="hover:text-sp-primary">
            Pricing
          </Link>
          <Link to="/home#contact-us" className="hover:text-sp-primary">
            Contact
          </Link>
        </div>
        <p className="mb-2 text-gray-400 text-sm text-center flex-grow w-full">© 2023 Spojiti. All rights reserved.</p>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-gray-400 text-lg text-center">
        <Link to='/terms-of-service' className='hover:text-sp-primary'>
        <p>Terms of Service</p>
        </Link>
        <span className='hidden md:inline-block'>|</span>
        <Link to='/privacy-policy' className='hover:text-sp-primary'>
        <p>Privacy Policy</p>
        </Link>
        <span className='hidden md:inline-block'>|</span>
        <Link to='/cookie-policy' className='hover:text-sp-primary'>
        <p>Cookie Policy</p>
        </Link>
        
      </div>
    </footer>
  );
};

export default Footer;
