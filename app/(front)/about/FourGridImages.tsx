// plik: components/FourGridImages.tsx

import React from 'react';

const FourGridImages: React.FC = () => {
  return (
    <section className="flex items-center py-20 bg-gray-100 font-poppins dark:bg-gray-800">
      <div className="justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-wrap items-center">
          <div className="w-full px-4 mb-10 xl:w-1/2 lg:mb-8">
            <div className="flex flex-wrap">
              <div className="w-full px-4 md:w-1/2">
                <img src="https://i.postimg.cc/YCJW7jv8/pexels-fauxels-3184357.jpg" alt=""
                     className="object-cover w-full mb-6 rounded-lg h-80"/>
                <img src="https://i.postimg.cc/j5L5bX2d/pexels-andrea-piacquadio-3757946.jpg" alt=""
                     className="object-cover w-full rounded-lg h-80"/>
              </div>
              <div className="w-full px-4 md:w-1/2 xl:mt-11">
                <img src="https://i.postimg.cc/sXJQ5cw0/pexels-pixabay-256455-1.jpg" alt=""
                     className="object-cover w-full mb-6 rounded-lg h-80"/>
                <img src="https://i.postimg.cc/vHTg6593/aqq.jpg" alt=""
                     className="object-cover w-full rounded-lg h-80"/>
              </div>
            </div>
          </div>
          <div className="w-full px-4 mb-10 xl:w-1/2 lg:mb-8">
            <span className="text-sm font-semibold text-blue-500 dark:text-blue-400">Why choose us</span>
            <h2 className="mt-2 mb-4 text-2xl font-bold text-gray-700 dark:text-gray-300">
              We are providing a better facility
            </h2>
            <p className="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <ul className="mb-10">
              {/* Lista punktów z ikonami */}
            </ul>
            <a href="#"
               className="px-4 py-2 text-gray-100 bg-blue-500 rounded-md dark:bg-blue-400 dark:hover:bg-blue-500 hover:bg-blue-600">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourGridImages;
