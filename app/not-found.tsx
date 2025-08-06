'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-white dark:bg-black text-gray-800 dark:text-gray-200">
      <h1 className="text-5xl font-extrabold text-teal-700 dark:text-teal-400 mb-4">Page Not Found</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-semibold transition"
      >
        Back to Home
      </Link>

      {/* Optional Divider */}
      <div className="mt-12">
        <Image
          src="/images/heart-div.png"
          alt="Divider"
          width={160}
          height={40}
        />
      </div>

      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        Morton Dental | (07) 5455 3577
      </p>
    </div>
  );
}
