"use client";

import React from "react";
import ArticleCard from "@/components/global/articles/ArticleCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import Loader from "@/components/global/loader";

interface ArticleTypes {
  _id: string;
  title: string;
  content: string;
  likes: number;
  category: string;
  published: boolean;
  isFeatured: boolean;
  slug: string;
  createdAt: string;
}

function DSAPage() {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/articles/dsa`
      );
      return response.data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="my-4">
      <div className="flex items-center justify-between w-full">
        <h1 className="capitalize text-3xl tracking-wider font-semibold text-blue-500 mb-4 font-outfit">
          DSA Articles
        </h1>
        <Link href={"/dsa/collections"}>
          <p className="text-blue-500 font-semibold hover:underline decoration-blue-500">
            Collections
          </p>
        </Link>
      </div>
      <div className="grid lg:grid-cols-2 gap-x-2 gap-y-2 md:grid-cols-2 sm:grid-cols-1 grid-flow-dense">
        {data?.getDsaArticles?.map((article: ArticleTypes) => (
          <ArticleCard article={article} key={article._id} />
        ))}
      </div>
    </div>
  );
}

export default DSAPage;
