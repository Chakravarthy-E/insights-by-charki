"use client";
import { useFetchCollections } from "@/hooks/article";
import React from "react";
import CategoryCard from "./_components/category-card";

export interface CategoryType {
  count: number;
  category: string;
}

function Collections() {
  const { data, isLoading } = useFetchCollections();

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          Loading....
        </div>
      ) : (
        <div className=" min-h-screen">
          <h1 className="capitalize text-3xl tracking-wider font-semibold text-title-color mb-4 font-outfit">
            Collections
          </h1>
          <div className="flex gap-2 flex-wrap">
            {data?.collections?.map((category: CategoryType) => (
              <CategoryCard key={category.category} category={category} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Collections;
