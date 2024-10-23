// src/NotFound.tsx
import React from "react";
import { Link } from "react-router-dom"; // Make sure to have react-router-dom installed

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl font-semibold mt-5">Page Not Found</h2>
      <p className="mt-3 text-gray-700">
        Sorry, the page you are looking for does not exist.
      </p>
      <div className="mt-5">
        <Link
          to="/"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Go to Home
        </Link>
        <Link
          to="/login"
          className="ml-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
