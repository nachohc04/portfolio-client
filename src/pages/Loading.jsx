import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-zinc-900 text-white">
      <div className="w-16 h-16 border-t-4 border-green-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;