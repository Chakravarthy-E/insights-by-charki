import React from "react";
import Logo from "../logo";
import ThemeToggle from "@/components/theme/ThemeToggle";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full">
      <Logo />
      <ul className="flex items-center space-x-10 font-semibold text-xl font-raleway">
        <li className="hover:text-blue-500">
          <Link href={"/collections"}>Collections</Link>
        </li>
        <li className="hover:text-blue-500">
          <Link href={"/about"}>About</Link>
        </li>

        <ThemeToggle />
      </ul>
    </nav>
  );
}

export default Navbar;
