// pages/activation/error/page.tsx
"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import styles from './style.css'; // Ensure this points to the location of your CSS module

const ErrorPage = () => {
  // State to control the animation class
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    // Display the toast notification on mount
    toast.error('The activation link is invalid or expired.', {
      duration: 4000,
      position: 'top-center',
    });

    // Trigger the shake animation when the component mounts
    setAnimationClass(styles.animateShake);

    // Optionally, remove the class after the animation ends to prevent it from repeating on re-renders
    const timer = setTimeout(() => {
      setAnimationClass('');
    }, 1000); // Adjust timing based on your CSS animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex h-screen items-center justify-center bg-red-100">
      <div className={`max-w-sm p-8 text-center bg-white rounded-lg shadow-xl border border-red-400 ${animationClass}`}>
        <div className="mb-4 inline-block bg-red-200 p-2 rounded-full">
          <Image src="/images/warning/error.png" alt="Error" width={64} height={64} className="rounded-full" />
        </div>
        <h1 className="mb-3 text-3xl font-bold text-red-600">Activation Error</h1>
        <p className="mb-8 text-md text-gray-600">The activation link is invalid or expired. Please check the link or contact support if you believe this is an error.</p>
        <Link href="/">
            <button className="px-6 py-2 text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 rounded-md transition duration-150 ease-in-out">
              Go to Homepage
            </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
