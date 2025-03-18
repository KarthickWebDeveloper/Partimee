import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <h1 className="text-9xl font-bold text-blue-600">404</h1>
      <h2 className="text-2xl md:text-4xl font-semibold mt-4">Oops! Page Not Found</h2>
      <p className="mt-2 text-gray-600">The page you are looking for doesn’t exist or has been moved.</p>
      <Link to="/" className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;