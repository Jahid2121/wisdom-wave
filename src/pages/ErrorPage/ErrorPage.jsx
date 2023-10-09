import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="text-center p-4 bg-gray-200 border border-orange-400 rounded-lg max-w-sm mx-auto mt-10">
      <h1 className="text-red-600 text-9xl font-bold mb-4">404</h1>
      <p className="text-custom-Pink text-lg mb-2">Oops! The page you're looking for doesn't exist. Please check the URL and try again.</p>
      <p className="font-bold text-xl mt-2">Error Code: 404</p>
      <Link className="text-blue-500 block mt-4" href="/">Go to Homepage</Link>
    </div>
  );
};

export default ErrorPage;
