// src/ErrorPage.tsx
import React from "react";
import { Link } from "react-router-dom";

interface ErrorPageProps {
  errorMessage: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ errorMessage }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500">Error</h1>
      <p className="mt-3 text-gray-700">{errorMessage}</p>
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

export default ErrorPage;
