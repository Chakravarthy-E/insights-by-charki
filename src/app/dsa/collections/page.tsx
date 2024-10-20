"use client";
import CategoryCard from "@/components/global/category-card";
import React from "react";
import { useFetchDSACollections } from "../_actions";
import DSACategoryCard from "../_components/DSACategoryCard";

export interface CategoryType {
  count: number;
  category: string;
}

function Collections() {
  const { data, isLoading } = useFetchDSACollections();

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          Loading....
        </div>
      ) : (
        <div className=" min-h-screen">
          <h1 className="capitalize text-3xl tracking-wider font-semibold text-blue-400 mb-4 font-outfit">
            DSA Collections
          </h1>
          <div className="flex gap-2 flex-wrap">
            {data?.collections?.map((category: CategoryType) => (
              <DSACategoryCard key={category.category} category={category} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Collections;
