import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href={"/"}>
      <h1 className="text-3xl font-semibold bg-clip-text capitalize font-outfit tracking-wide">
        <span className="text-violet-500">I</span>
        <span className="dark:text-white">B</span>
        <span className="text-blue-600">C</span>
      </h1>
    </Link>
  );
}

export default Logo;
