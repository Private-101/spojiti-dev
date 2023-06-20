import React from 'react';
import { Link } from '@remix-run/react';
import { Container } from '~/components/legacy/tailwindui/Container';
import { SocialIcon } from 'react-social-icons';
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-800 rounded-md ring-4 ring-gray-800 flex justify-between items-center scroll-smooth px-6 py-4 fixed bottom-0 left-0 right-0 md:sticky outline-2">
      <div className="text-lg">
        @{year} SPOJITI - ALL RIGHTS RESERVED
      </div>
      <div className="text-xl">
        <Link to='#top'>
        <ArrowUpCircleIcon className="h-6 w-6 fill-current scale-125 hover:scale-150 transition-all duration-200 hover:text-gray-400 cursor-pointer" />
        </Link>
      </div>
      <div className="flex space-x-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <SocialIcon network='facebook' className="h-6 w-6 fill-current hover:scale-110 transition-all duration-200 hover:text-white" label="Facebook" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <SocialIcon network='instagram' className="h-6 w-6fill-current hover:scale-110 transition-all duration-200 hover:text-white" label="Instagram" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <SocialIcon network='linkedin' className="h-6 w-6fill-current hover:scale-110 transition-all duration-200 hover:text-white" label="LinkedIn" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

/*
import { ExternalLinkIcon } from '@heroicons/react/24/solid';
import { TwitterIcon, YouTubeIcon, InstagramIcon } from '@heroicons/react/24/outline';

interface FooterCenteredProps {
  links: { link: string; label: string }[];
}

export function FooterCentered({ links }: FooterCenteredProps) {
  const items = links.map((link) => (
    <a
      className="text-gray-500 hover:text-gray-700 text-sm"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <div className="mt-32 border-t border-gray-200 pt-4 pb-4 md:flex md:justify-between md:items-center">
      <div className="mx-auto md:mx-0">
        <ExternalLinkIcon className="h-6 w-6" />
      </div>

      <div className="mt-4 md:mt-0 space-x-2">{items}</div>

      <div className="mt-4 md:mt-0 space-x-2">
        <button className="text-gray-500 hover:text-gray-700">
          <TwitterIcon className="h-6 w-6" />
        </button>
        <button className="text-gray-500 hover:text-gray-700">
          <YouTubeIcon className="h-6 w-6" />
        </button>
        <button className="text-gray-500 hover:text-gray-700">
          <InstagramIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
*/