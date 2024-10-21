"use client";
import { ArticleTypes } from "@/app/(dashboard)/page";
import React from "react";
import Loader from "@/components/global/loader";
import ArticleCard from "@/components/global/articles/ArticleCard";
import { useFetchArticleByCategory } from "@/hooks/article";

type Props = {
  params: {
    category: string;
  };
};

function Category({ params }: Props) {
  const category = params.category;
  const { data, isLoading } = useFetchArticleByCategory(category);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="my-4">
      <h1 className="capitalize text-3xl tracking-wider font-semibold text-blue-500 mb-4 font-outfit">
        {category}
      </h1>
      <div className="grid lg:grid-cols-2 gap-x-2 gap-y-2  md:grid-cols-2 sm:grid-cols-1 grid-flow-dense">
        {data?.jsArticles?.map((article: ArticleTypes) => (
          <ArticleCard article={article} key={article._id} />
        ))}
      </div>
    </div>
  );
}

export default Category;
