/**
 * the Footer component includes social media links (Facebook, Twitter, Instagram), page links (Home, About, Pricing, Contact), and common legal disclaimers (Terms of Service, Privacy Policy, Cookie Policy). You can customize the links, URLs, and legal disclaimer text based on your requirements.
 */

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sp-body-bg dark:bg-sp-accent text-gray-800 rounded-md ring-2 ring-sp-accent dark:ring-black flex justify-between items-center scroll-smooth mx-4 my-4 px-12 py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#top" className="hover:text-gray-300">
            Facebook
          </a>
          <a href="#top" className="hover:text-gray-300">
            Twitter
          </a>
          <a href="#top" className="hover:text-gray-300">
            Instagram
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
          <a href="/about" className="hover:text-gray-300">
            About
          </a>
          <a href="/pricing" className="hover:text-gray-300">
            Pricing
          </a>
          <a href="/contact" className="hover:text-gray-300">
            Contact
          </a>
        </div>
      </div>
      <div className="container mx-auto mt-4 text-gray-400 text-sm text-center">
        <p className="mb-2">© 2023 Your Company. All rights reserved.</p>
        <p>Terms of Service | Privacy Policy | Cookie Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
