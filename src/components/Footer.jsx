import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-amber-50 via-amber-100 to-amber-50 py-6 md:py-8 mt-10 shadow-inner">
      <div className="flex flex-col items-center justify-center gap-2">
        <hr className="w-2/3 border-lime-900 mb-4" />
        <div className="flex items-center gap-2">
          <svg
            className="w-6 h-6 text-lime-900"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 19v-6m0 0V5m0 8l-4-4m4 4l4-4"
            />
          </svg>
          <span className="font-semibold text-lime-900 text-base md:text-lg">
            ALL RIGHTS RESERVED 2025
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;