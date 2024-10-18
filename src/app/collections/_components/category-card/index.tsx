"use client";
import React from "react";
import { CategoryType } from "../../page";
import Link from "next/link";

interface CategoryProps {
  category: CategoryType;
}

function CategoryCard({ category }: CategoryProps) {
  return (
    <Link href={`/collections/${category.category}`}>
      <p className="capitalize bg-gray-800 border w-fit px-5 py-3  text-white rounded-tl-3xl rounded-br-3xl hover:border-blue-500">
        {category.category} <span>({category.count})</span>
      </p>
    </Link>
  );
}

export default CategoryCard;
