/**
 * In the above example, the Cookie Popup component displays a message about 
 * the use of cookies and provides buttons to accept or learn more about the cookie policy. 
 * The component uses LocalStorage to track the acceptance of cookies and hides the popup 
 * once the cookies are accepted. The handleAcceptCookies function updates the LocalStorage 
 * and state to track the acceptance of cookies. The useEffect hook can be used to perform 
 * any necessary actions when cookies are accepted.
 */

import React, { useState, useEffect } from 'react';

const CookiePopup: React.FC = () => {
  const [acceptedCookies, setAcceptedCookies] = useState(false);

  const handleAcceptCookies = () => {
    window.localStorage.setItem('cookiesAccepted', 'true');
    setAcceptedCookies(true);
  };

  useEffect(() => {
    if (window && window.localStorage) {
      const isAccepted = window.localStorage.getItem('cookiesAccepted') === 'true';
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
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 text-sm">
      <p className="mb-2">We use cookies to enhance your experience on our website.</p>
      <div className="flex space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAcceptCookies}
        >
          Accept
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => window.location.href = 'https://www.example.com/privacy-policy'}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default CookiePopup;
