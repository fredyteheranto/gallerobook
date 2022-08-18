import React from 'react';

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="spinner-grow inline-block w-12 h-12 bg-current rounded-full opacity-0 text-blue-300"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingPage;
