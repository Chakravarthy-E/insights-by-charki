"use client";
import { ArticleTypes } from "@/app/(dashboard)/page";
import ArticleCard from "@/components/global/articles/ArticleCard";
import React from "react";
import { useFetchArticleByCategory } from "../../_actions";
import Loader from "@/components/global/loader";

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

  const { dsaArticles = [], jsArticles = [] } = data || {};

  const renderArticles = (articles: ArticleTypes[], category: string) => {
    if (articles.length > 0) {
      return (
        <>
          <h1 className="capitalize text-3xl tracking-wider font-semibold text-blue-500 mb-4 font-outfit">
            {category}
          </h1>
          <div className="grid lg:grid-cols-2 gap-x-2 gap-y-2 md:grid-cols-2 sm:grid-cols-1 grid-flow-dense">
            {articles.map((article: ArticleTypes) => (
              <ArticleCard article={article} key={article._id} />
            ))}
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <div className="my-4">
      {renderArticles(dsaArticles, category)}
      {renderArticles(jsArticles, category)}
    </div>
  );
}

export default Category;
