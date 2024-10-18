"use client";
import { ArticleTypes } from "@/app/(dashboard)/page";
import ArticleCard from "@/components/global/articles/ArticleCard";
import { useFetchArticleByCategory } from "@/hooks/article";
import React from "react";

type Props = {
  params: {
    category: string;
  };
};

function Category({ params }: Props) {
  const category = params.category;
  const { data, isLoading } = useFetchArticleByCategory(category);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="my-4">
      <h1 className="uppercase text-3xl tracking-wider font-semibold text-title-color mb-4 font-outfit">
        {category}
      </h1>
      <div className="grid lg:grid-cols-3 gap-x-2 gap-y-2  md:grid-cols-2 sm:grid-cols-1 grid-flow-dense">
        {data?.articles?.map((article: ArticleTypes) => (
          <ArticleCard article={article} key={article._id} />
        ))}
      </div>
    </div>
  );
}

export default Category;
