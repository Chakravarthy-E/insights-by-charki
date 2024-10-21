"use client";
import CategoryCard from "@/components/global/category-card";
import React from "react";
import { useFetchCollections } from "../_actions";
import Loader from "@/components/global/loader";

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
          <h1 className="capitalize text-3xl tracking-wider font-semibold text-blue-500 mb-4 font-outfit">
            Collections
          </h1>
          <div className="flex flex-col space-y-5">
            {data?.dsaCollections?.length > 0 && (
              <>
                <h1>DSA</h1>
                <div className="flex gap-2 flex-wrap">
                  {data?.dsaCollections?.map((category: CategoryType) => (
                    <CategoryCard key={category.category} category={category} />
                  ))}
                </div>
              </>
            )}
            {data?.jsCollections?.length > 0 && (
              <>
                <h1>JavaScript</h1>
                <div className="flex gap-2 flex-wrap">
                  {data?.jsCollections?.map((category: CategoryType) => (
                    <CategoryCard key={category.category} category={category} />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Collections;
