"use client";
import React from "react";
import { useFetchArticles } from "@/hooks/article";
import ArticleCard from "./ArticleCard";

export interface ArticleTypes {
  _id: string;
  title: string;
  description: string;
  content: string;
  likes: number;
  category: string;
  published: boolean;
  imageUrl?: {
    public_id: string;
    url: string;
  };
  isFeatured: boolean;
  slug: string;
  createdAt: string;
}

function Articles() {
  const { data, isLoading } = useFetchArticles();
  if (isLoading) {
    return <p className="">Loading Articles.....</p>;
  }
  return (
    <div className="my-4">
      <h1 className=" capitalize text-3xl tracking-wider font-semibold text-title-color mb-4 font-outfit">
        Latest Articles
      </h1>
      <div className="grid lg:grid-cols-3 gap-x-2 gap-y-2  md:grid-cols-2 sm:grid-cols-1 grid-flow-dense">
        {data?.publishedArticles?.map((article: ArticleTypes) => (
          <ArticleCard article={article} key={article._id} />
        ))}
      </div>
    </div>
  );
}

export default Articles;
