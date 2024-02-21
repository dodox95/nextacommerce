"use client"
import Link from 'next/link';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const SuccessfulActivationPage = () => {
  useEffect(() => {
    // Display a toast notification
    toast.success('Account activated successfully!', {
      duration: 4000,
      position: 'top-center',
    });

    // Dynamically import canvas-confetti to ensure it runs on the client side
    import('canvas-confetti').then((confetti) => {
      confetti.default({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    });
  }, []);

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="max-w-md p-8 text-center bg-white rounded-lg shadow-xl">
        <h1 className="mb-4 text-3xl font-bold text-gray-800">Account Activation Successful</h1>
        <p className="mb-8 text-lg text-gray-600">Your account has been successfully activated. You're now ready to explore!</p>
        <Link href="/">
          <button className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-md transition duration-150 ease-in-out">
            Go to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessfulActivationPage;
