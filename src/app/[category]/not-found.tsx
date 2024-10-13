import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col font-outfit">
      <h1 className="text-7xl font-bold uppercase">Not Found</h1>
      <p className="text-2xl capitalize">Could not find requested resource</p>
      <Link href="/" className="text-blue-500 text-xl font-bold capitalize">
        Return Home
      </Link>
    </div>
  );
}

export default NotFound;
