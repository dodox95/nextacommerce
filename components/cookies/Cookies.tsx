"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Import komponentu Link
import { FaTimes } from 'react-icons/fa';

const Cookies: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 right-0 mb-4 mr-4 w-64">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <img src="https://www.svgrepo.com/show/401340/cookie.svg" alt="Cookie" className="h-6 w-6 mr-2" />
            <span className="text-gray-700 font-bold text-sm">Cookie Policy</span>
          </div>
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
            <FaTimes className="h-4 w-4" />
          </button>
        </div>
        <p className="text-gray-600 text-sm">
          We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies.
          {/* Dodajemy link do polityki prywatności */}
          <Link href="/privacy">
            <button className="text-blue-600 hover:underline">Learn more about our Privacy Policy.</button>
          </Link>
        </p>
        <div className="flex justify-between">
          <button onClick={handleAccept} className="mt-4 bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded">
            Accept
          </button>
          <button onClick={handleDecline} className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
