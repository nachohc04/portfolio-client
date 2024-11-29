import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const NotFoundPage = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center bg-zinc-900 text-white px-6">
      <h1 className="text-9xl font-bold text-green-500 mb-4">
        404
      </h1>
      <p className="text-xl md:text-2xl text-gray-400 mb-6 text-center">
      <Typewriter
            words={[
              "Oops! The page you were looking for doesn't exist",
            ]}
            loop={1}
            typeSpeed={10}
            deleteSpeed={30}
            cursor
          />
      </p>
      <p className="text-lg md:text-xl text-gray-500 mb-8 text-center">
        But don't worry, you can head back to the homepage or explore other
        sections of the site.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <Link
          to="/"
          className="bg-green-500 px-6 py-3 text-lg rounded-lg hover:bg-green-600 transition"
        >
          Go to Homepage
        </Link>
        {/* <Link
          to="/projects"
          className="bg-gray-700 px-6 py-3 text-lg rounded-lg hover:bg-gray-600 transition"
        >
          View Projects
        </Link> */}
      </div>
    </div>
  );
};

export default NotFoundPage;
