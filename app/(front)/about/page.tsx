// plik: page.tsx
import React from 'react';
import BackQuote from './BackQuote'; // Upewnij się, że ścieżka do importu jest poprawna
import BackQuoteRight from './BackQuoteRight'; // Upewnij się, że ścieżka do importu jest poprawna
import FourGridImages from './FourGridImages';
import GoogleMap from './GoogleMap';

export const metadata = {
  title: 'Some Page Title',
};

const Page: React.FC = () => {
  return (
    <>
      <BackQuote />
      <BackQuoteRight />
      <FourGridImages />
      <GoogleMap />
      {/* Tutaj mogą być inne sekcje lub komponenty strony */}
    </>
  );
}

export default Page;
