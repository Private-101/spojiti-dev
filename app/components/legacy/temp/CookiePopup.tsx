/**
 * In the above example, the Cookie Popup component displays a message about 
 * the use of cookies and provides buttons to accept or learn more about the cookie policy. 
 * The component uses LocalStorage to track the acceptance of cookies and hides the popup 
 * once the cookies are accepted. The handleAcceptCookies function updates the LocalStorage 
 * and state to track the acceptance of cookies. The useEffect hook can be used to perform 
 * any necessary actions when cookies are accepted.
 */

import React, { useState, useEffect } from 'react';
import { useLocation } from '@remix-run/react';
import { classNames } from '~/utils';
interface CookiePopupProps {
  // in seconds
  delay?: number
};

const CookiePopup: React.FC<CookiePopupProps> = ({delay}) => {
  const [acceptedCookies, setAcceptedCookies] = useState(false);
  const [loading, setLoading] = useState(true);
  // recorded in seconds
  /*const [timeSince, setTimeSince] = useState(0);

  useEffect(() => {
    if (!loading) {
      if (timeSince > 1000 * 60) {
        // timeSince > 60 seconds, delay is set for update every 60 seconds to save time and resources
        const minutesSinceInterval = setInterval(() => setTimeSince(prev => prev + 60), 60000);
      return () => clearInterval(minutesSinceInterval);
      };
      // timeSince > 60 seconds, delay is set for update every second
      const secondsSinceInterval = setInterval(() => setTimeSince(prev => prev + 1), 1000);
      return () => clearInterval(secondsSinceInterval);
    }
  }, [loading, timeSince]); */

  useEffect(() => {
    console.log(`starting cookie timer...`);
    if (delay && typeof delay === 'number') {
      console.log(`delay provided: ${delay} seconds`);
      const timeout = setTimeout(() => setLoading(false), delay * 1000);
      return () => clearTimeout(timeout);
    };
// default timeout is 3 seconds before cookie banner pops up
console.log(`default delay provided: 3 seconds`);
    const defaultTimer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(defaultTimer); 
  }, [delay])

  const handleAcceptCookies = () => {
    if (window.location.href.includes('spojiti.com')) {
      console.log(`handleAcceptCookies:\nisProduction: ${window.location.href.includes('spojiti.com')}\nsetting cookiesAccepted: true`)
      window.localStorage.setItem('cookiesAccepted', 'true');
    };

    setAcceptedCookies(true);
  };

  useEffect(() => {
    if (window && window.localStorage && window.location.href.includes('spojiti.com')) {
      const isAccepted = window.localStorage.getItem('cookiesAccepted') === 'true';
      console.log(`cookiesAccepted === 'true' ? isAccepted: ${isAccepted}`)
      if (isAccepted) {
        
        setAcceptedCookies(true);
        // Perform any necessary actions when cookies are accepted
      }
    }
    if (acceptedCookies) {
      // Perform any necessary actions when cookies are accepted
    }
  }, [acceptedCookies]);

  if (acceptedCookies) {
    console.log('accepted cookies: true\nreturn null')
    return null;
  };

  /* if (loading) {
    console.log('loading: true\nreturn null');
    return null;
  } */
/*
<!-- Item -->
                <div class="flex justify-between py-6 px-4 bg-white/30 rounded-lg">
                    <div class="flex items-center space-x-4">
                        <img src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" class="rounded-full h-14 w-14" alt="">
                        <div class="flex flex-col space-y-1">
                            <span class="font-bold">Leonard Krashner</span>
                            <span class="text-sm">Yeah same question here too 🔥</span>
                        </div>
                    </div>
                    <div class="flex-none px-4 py-2 text-stone-600 text-xs md:text-sm">
                        17m ago
                    </div>
                </div>
                <!-- Item -->
*/
  return (
      <>
      <div className={classNames('flex w-full md:w-1/2 py-6 px-4 justify-between rounded-lg fixed bottom-0 left-0 right-0 z-10 bg-white border-2 border-black hover:shadow-md transition-all', loading ? 'opacity-0' : 'opacity-100')}>
      <div className='flex flex-col space-y-4 items-start rounded-lg'>
      <p className="mb-2 font-bold text-md text-sp-body-text">We use cookies to enhance your experience on our website.</p>
      
      <div className="flex flex-row space-x-4 p-4 mt-4 border-t-2 border-black">
        <button
          className="bg-white hover:bg-sp-primary-light dark:bg-sp-primary-dark text-sp-primary hover:text-white font-bold text-base py-2 px-4 rounded-md hover:shadow-sm border-2 border-sp-primary hover:border-black transition-all"
          onClick={handleAcceptCookies}
        >
          Accept
        </button>
        <button
          className="bg-red-500 hover:bg-white text-white hover:text-red-500 text-base border-2 border-black hover:border-red-500 font-bold py-2 px-4 rounded-md"
          onClick={() => window.location.pathname = '/privacy-policy'}
        >
          Learn More
        </button>
      </div>
      </div>
      
    </div>
      </>
  );
};

export default CookiePopup;
