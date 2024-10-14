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
      <p className="capitalize border w-fit px-5 py-3 rounded-md text-blue-500">
        {category.category}
      </p>
    </Link>
  );
}

export default CategoryCard;
