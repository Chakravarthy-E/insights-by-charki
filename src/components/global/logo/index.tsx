import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href={"/"}>
      <h1 className="text-3xl font-semibold bg-clip-text capitalize font-outfit tracking-wide">
        Insights by Chakri
      </h1>
    </Link>
  );
}

export default Logo;
