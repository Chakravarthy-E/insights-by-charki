"use client";
import React from "react";
import Link from "next/link";

interface CategoryProps {
  category: {
    count: number;
    category: string;
  };
}

function DSACategoryCard({ category }: CategoryProps) {
  return (
    <Link href={`/dsa/collections/${category.category}`}>
      <p className="capitalize bg-gray-800 border w-fit px-5 py-3  text-white rounded-tl-xl rounded-br-xl hover:border-blue-500">
        {category.category}
      </p>
    </Link>
  );
}

export default DSACategoryCard;
