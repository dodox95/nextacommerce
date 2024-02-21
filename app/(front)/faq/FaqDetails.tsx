// plik: components/FaqDetails.tsx

import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

const FaqDetails: React.FC = () => {
  return (
    <ul className="max-w-2xl mx-auto mt-20 divide-y shadow shadow-blue-600 rounded-xl">
      {Array.from({ length: 4 }, (_, i) => (
        <li key={i}>
          <details className="group">
            <summary className="flex items-center gap-3 px-4 py-3 font-medium hover:cursor-pointer">
              <FiChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-90" />
              <span>What am I getting as a Premium Member?</span>
            </summary>
            <article className="px-4 pb-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie
                porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus.
              </p>
            </article>
          </details>
        </li>
      ))}
    </ul>
  );
};

export default FaqDetails;
