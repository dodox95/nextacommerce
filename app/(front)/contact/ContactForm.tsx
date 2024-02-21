// plik: components/ContactForm.tsx

import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactForm: React.FC = () => {
  return (
    <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-6 md:py-0 md:px-6">
          <h1 className="text-4xl font-bold">Get in touch</h1>
          <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
          <div className="space-y-4">
            <p className="flex items-center">
              <FaMapMarkerAlt className="w-5 h-5 mr-2 sm:mr-6" />
              <a href="https://www.google.com/maps/place/Wroc%C5%82awska+29,+58-200+Dzier%C5%BConi%C3%B3w" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Fake address, 9999 City
              </a>
            </p>
            <p className="flex items-center">
              <FaPhone className="w-5 h-5 mr-2 sm:mr-6" />
              <a href="tel:123456789" className="hover:underline">
                123456789
              </a>
            </p>
            <p className="flex items-center">
              <FaEnvelope className="w-5 h-5 mr-2 sm:mr-6" />
              <a href="mailto:contact@business.com" className="hover:underline">
                contact@business.com
              </a>
            </p>
          </div>
        </div>
        <form noValidate className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
          <label className="block">
            <span className="mb-1">Full name</span>
            <input type="text" placeholder="Leroy Jenkins" className="block w-full rounded-md shadow-sm focus:ring dark:bg-gray-800" />
          </label>
          <label className="block">
            <span className="mb-1">Email address</span>
            <input type="email" placeholder="leroy@jenkins.com" className="block w-full rounded-md shadow-sm focus:ring dark:bg-gray-800" />
          </label>
          <label className="block">
            <span className="mb-1">Message</span>
            <textarea rows={3} className="block w-full rounded-md focus:ring dark:bg-gray-800"></textarea>
          </label>
          <button type="submit" className="self-center px-8 py-3 text-lg rounded dark:bg-violet-400 dark:text-gray-900 focus:ring hover:ring">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
