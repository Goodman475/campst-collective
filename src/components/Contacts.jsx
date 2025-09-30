import React from 'react';

const Contacts = () => {
  return (
    <div className="max-w-sm md:max-w-lg mx-auto mt-10 md:mt-16 bg-white/70 backdrop-blur-md rounded-lg shadow-lg p-4 md:p-8 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-amber-400 mb-4">Contact</h2>
      <p className="text-lime-900 text-base md:text-lg mb-6">
        Email us at:
        <br />
        <a
          href="mailto:campst.collective@outlook.com"
          className="text-amber-500 underline hover:text-amber-700 transition"
        >
          campst.collective@outlook.com
        </a>
      </p>
      <div className="flex justify-center">
        <svg
          className="w-12 h-12 md:w-16 md:h-16 text-amber-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.591 7.591a2.25 2.25 0 01-3.182 0L2.909 8.584A2.25 2.25 0 012.25 6.993V6.75"
          />
        </svg>
      </div>
    </div>
  );
};

export default Contacts;