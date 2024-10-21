"use client";
import React from "react";
import Loader from "@/components/global/loader";
import { useFetchCollections } from "@/hooks/article";
import CategoryCard from "../_components/CategoryCard";

export interface CategoryType {
  count: number;
  category: string;
}

function Collections() {
  const { data, isLoading } = useFetchCollections();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className=" min-h-screen">
          <h1 className="capitalize text-3xl tracking-wider font-semibold text-blue-400 mb-4 font-outfit">
            JS Collections
          </h1>
          <div className="flex gap-2 flex-wrap">
            {data?.jsCollections?.map((category: CategoryType) => (
              <CategoryCard key={category.category} category={category} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Collections;
