"use client";
import ArticleCard from "@/components/global/articles/ArticleCard";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

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

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["articles", currentPage],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/article/articles?published=true&page=${currentPage}&limit=9`
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
    return (
      <p className="flex items-center justify-center min-h-screen">
        Loading Articles...
      </p>
    );
  }

  return (
    <div className="my-4">
      <h1 className="capitalize text-3xl tracking-wider font-semibold text-title-color mb-4 font-outfit">
        Articles
      </h1>
      <div className="grid lg:grid-cols-2 gap-x-2 gap-y-2 md:grid-cols-2 sm:grid-cols-1 grid-flow-dense">
        {data?.publishedArticles?.map((article: ArticleTypes) => (
          <ArticleCard article={article} key={article._id} />
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
