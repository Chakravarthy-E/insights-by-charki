"use client";
import { ArticleTypes } from "@/app/(dashboard)/page";
import React from "react";
import DSAArticleCard from "../../_components/DSAArticleCard";
import { useFetchDSAArticleByCategory } from "../../_actions";
import Loader from "@/components/global/loader";

type Props = {
  params: {
    category: string;
  };
};

function Category({ params }: Props) {
  const category = params.category;
  const { data, isLoading } = useFetchDSAArticleByCategory(category);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="my-4">
      <h1 className="capitalize text-3xl tracking-wider font-semibold text-blue-500 mb-4 font-outfit">
        {category}
      </h1>
      <div className="grid lg:grid-cols-3 gap-x-2 gap-y-2  md:grid-cols-2 sm:grid-cols-1 grid-flow-dense">
        {data?.articles?.map((article: ArticleTypes) => (
          <DSAArticleCard article={article} key={article._id} />
        ))}
      </div>
    </div>
  );
}

export default Category;
