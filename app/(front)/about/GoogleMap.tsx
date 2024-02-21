// plik: components/GoogleMap.tsx

import React from 'react';

const GoogleMap: React.FC = () => {
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.9506922538503!2d16.651564415729667!3d50.7280698795139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470e360f94570f5d%3A0x58fbbe4e92e730a1!2sWroc%C5%82awska%2029%2C%2058-200%20Dzier%C5%BConi%C3%B3w!5e0!3m2!1sen!2spl!4v1647024587534!5m2!1sen!2spl";
  
  return (
    <div className="flex flex-wrap items-center justify-center w-full my-10">
      <div className="w-full lg:w-1/2 p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Our Headquarters
        </h2>
        <p className="text-gray-600">
          Here is our headquarters.
        </p>
      </div>
      <div className="w-full lg:w-1/2 p-4">
        <iframe
          width="100%"
          height="450"
          style={{ border:0 }}
          loading="lazy"
          allowFullScreen
          src={mapSrc}>
        </iframe>
      </div>
    </div>
  );
}

export default GoogleMap;
