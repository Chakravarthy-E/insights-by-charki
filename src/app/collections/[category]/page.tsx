"use client";
import { ArticleTypes } from "@/components/global/articles";
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
      <div className="space-y-3">
        {data?.articles?.map((article: ArticleTypes) => (
          <ArticleCard article={article} key={article._id} />
        ))}
      </div>
    </div>
  );
}

export default Category;
