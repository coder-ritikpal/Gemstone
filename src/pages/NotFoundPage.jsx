import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-br from-black via-gray-900 to-black p-6 text-center">
      <h1 className="text-6xl font-bold mb-4 text-pink-500">404</h1>
      <p className="text-xl mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="px-6 py-2 bg-pink-500 hover:bg-pink-600 rounded-full text-white transition"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
