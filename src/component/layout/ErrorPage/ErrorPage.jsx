import React from 'react';
import error from '../../../assets/error.jpg'
import { Link } from 'react-router-dom';
import DynamicTitle from '../../../Shared/DynamicTitle/DynamicTitle';

const ErrorPage = () => {
  DynamicTitle("Error")
    return (
        <div className="flex flex-col items-center justify-center h-screen">
      <img
        src={error}
        alt="Error"
        className="w-64 h-64 mb-8 rounded-lg"
      />
      <h1 className="text-4xl font-bold mb-2">Oops! Something went wrong.</h1>
      <p className="text-gray-600 text-lg mb-8">
        We're sorry, but an unexpected error occurred. Please try again later.
      </p>
      <Link to='/'><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Go back to home
      </button></Link>
    </div>
    );
};

export default ErrorPage;