import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col px-4 sm:px-6 lg:px-8 text-center font-outfit">
      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold uppercase mb-4">
        Not Found
      </h1>
      <p className="text-xl sm:text-2xl lg:text-3xl capitalize mb-6">
        Could not find the requested resource
      </p>
      <Link
        href="/"
        className="text-blue-500 text-lg sm:text-xl lg:text-2xl font-bold capitalize"
      >
        Return Home
      </Link>
    </div>
  );
}

export default NotFound;
