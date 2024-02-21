// plik: page.tsx

import React from 'react';
import ContactForm from './ContactForm';
import GoogleMap from '../about/GoogleMap';

export const metadata = {
  title: 'Some Page Title',
};

const Page: React.FC = () => {
  return (
    <>
      <ContactForm />
      {/* Dekoracyjna pozioma linia z designem */}
      <div className="my-8">
        <hr className="border-t border-gray-300 dark:border-gray-700 mx-auto max-w-6xl" />
      </div>
      <GoogleMap />
      {/* Tutaj mogą być inne sekcje lub komponenty strony */}
    </>
  );
}

export default Page;
