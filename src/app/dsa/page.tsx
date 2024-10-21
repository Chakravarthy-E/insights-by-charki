"use client";

import React, { useState } from "react";
import ArticleCard from "@/components/global/articles/ArticleCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Button } from "@/components/ui/button";
import DSAArticleCard from "./_components/DSAArticleCard";
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
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["articles", currentPage],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/dsa/articles?published=true&page=${currentPage}&limit=10`
      );
      return response.data;
    },
  });

  if (isSuccess && data?.pagination?.totalPages !== totalPages) {
    setTotalPages(data.pagination.totalPages);
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

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
      <div className="grid lg:grid-cols-3 gap-x-2 gap-y-2 md:grid-cols-2 sm:grid-cols-1 grid-flow-dense">
        {data?.publishedArticles?.map((article: ArticleTypes) => (
          <DSAArticleCard article={article} key={article._id} />
        ))}
      </div>

      <div className="flex items-center justify-center mt-8 space-x-4 font-outfit">
        <Button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          variant="outline"
        >
          Previous
        </Button>
        <span className="text-lg font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          variant="outline"
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default DSAPage;
