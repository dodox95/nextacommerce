// plik: components/BackQuote.tsx

import React from 'react';
import Image from 'next/image';

const BackQuote: React.FC = () => {
  return (
    <section className="py-10 lg:py-20 bg-stone-100 font-poppins dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
            <Image
              src="/shop.jpg" // The path to your image file in the public directory
              alt="Shop"
              width={1341} // The width of the image - adjust as necessary
              height={768} // The height of the image - adjust as necessary
              layout="responsive" // Makes the image scale based on the parent element
            />
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="border-l-4 border-blue-500 pl-4 mb-6">
              <span className="text-sm text-gray-600 uppercase dark:text-gray-400">Who we are?</span>
              <h1 className="mt-2 text-3xl font-black text-gray-700 dark:text-gray-300">
                About Us
              </h1>
            </div>
            <p className="mb-10 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <blockquote className="p-4 italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote">
              <p className="mb-2">"Successfully Providing business solutions from 25 years"</p>
              <cite className="flex items-center">
                <span className="mr-3 font-bold text-neutral-800">- John Doe, CEO</span>
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BackQuote;
