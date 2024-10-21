"use client";
import React, { useState } from "react";
import Logo from "../logo";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="flex items-center justify-between w-full p-4 mb-4">
      <Logo />
      <div className="lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" className="lg:hidden">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="p-4 bg-[#05061A]">
            <ul className="flex flex-col items-start mt-10 space-y-4 font-semibold font-raleway px-10">
              <li className="w-full hover:text-blue-500">
                <Link href={"/dsa"} onClick={handleLinkClick}>
                  DSA
                </Link>
              </li>
              <li className="w-full hover:text-blue-500">
                <Link href={"/js-concepts"} onClick={handleLinkClick}>
                  JS Concepts
                </Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>

      <ul className="hidden lg:flex items-center lg:space-x-10 md:space-x-5 sm:space-x-2 space-x-3 font-semibold font-raleway">
        <li className="hover:text-blue-500">
          <Link href={"/dsa"}>DSA</Link>
        </li>
        <li className="hover:text-blue-500">
          <Link href={"/js-concepts"}>JS Concepts</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
