import React from "react";
import Logo from "../logo";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full mb-4">
      <Logo />
      <ul className="flex items-center lg:space-x-10 md:space-x-5 sm:space-x-2 space-x-3 font-semibold sm:text-sm lg:text-base font-raleway">
        <li className="hover:text-blue-500">
          <Link href={"/collections"}>Collections</Link>
        </li>
        <li className="hover:text-blue-500">
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
