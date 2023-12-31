import * as React from "react";
import { FiGithub } from 'react-icons/fi';
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri';
import UserPic from '~/components/common/assets/images/user/user-01.png';
import { Link } from '@remix-run/react';

export const Header = () => {
    return (
      <header className='w-full mx-auto max-w-2xl justify-center h-16 pt-4'>
        <div className='flex flex-row px-5'>
          <Avatar image={UserPic} alt='Picture of the Author' />
          <Navigation />
          <HeaderIcons />
        </div>
      </header>
    );
  };

  export interface HeaderIconProps {
    onClick?: () => void;
    children: React.ReactNode;
  }
  
  export const HeaderIcon = ({ onClick, children }: HeaderIconProps) => {
    return (
      <button className='cursor-pointer rounded-full text-gray-400 hover:text-orange-400 p-1'
              onClick={onClick}>
        {children}
      </button>
    );
  };

  export const ThemeToggle = () => {
  // const { theme, setTheme } = useTheme();
    const setTheme = (msg: string) => console.log(msg);
    const theme: string = 'light';
  return (
    <div className='p-1'>
      <HeaderIcon onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'light' ? <RiMoonClearLine size={25} /> : <RiSunLine size={25} />}
      </HeaderIcon>
    </div>
  );
};

export const HeaderIcons = () => {
    return (
      <div className='basis-1/3 flex justify-end'>
        <ThemeToggle />
        <HeaderIcon>
          <Link to='https://github.com/chrismphilp/philp.io'>
            <FiGithub size={25} />
          </Link>
        </HeaderIcon>
      </div>
    );
  };
  
  export interface AvatarProps {
    image: string;
    alt: string;
  }
  export const Avatar = ({ image, alt }: AvatarProps) => {
    return (
      <div className='basis-1/3 flex items-center'>
        <Link to='/' className='hover:none'>
          <img className='rounded-full shadow-lg ring-[0.85px] ring-orange-400 backdrop-blur mr-4 cursor-pointer hover:ring-[1.15px]'
                 src={image}
                 width={37.5}
                 height={37.5}
                 alt={alt}
                 />
        </Link>
      </div>
    );
  };

  export const Navigation = () => {
    return (
      <div className='basis-1/3 px-5'>
        <nav className='flex justify-center text-xl text-gray-400 backdrop-blur'>
          <Link to='/tech' className='cursor-pointer p-2 px-3 hover:text-orange-400'>Tech</Link>
          <Link to='/misc' className='cursor-pointer p-2 px-3 hover:text-orange-400'>Misc</Link>
          <Link to='/favourites' className='cursor-pointer p-2 px-3 hover:text-orange-400'>Favourites</Link>
        </nav>
      </div>
    );
  };

  export const Footer = () => {
    return (
      <footer className='bg-sp-body-bg dark:bg-gray-700 text-gray-400 dark:text-gray-100 py-5 border-t border-sp-primary border-opacity-60 dark:border-opacity-100'>
        <div className='flex justify-center'>© spojiti.com</div>
      </footer>
    );
  };