"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFetchArticle = (slug: string) => {
  const { data, isLoading, isError, error } = useSuspenseQuery({
    queryKey: ["articles", slug],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/articles/get-by-slug/${slug}`
      );
      return response.data.article;
    },
    staleTime: 0,
  });
  return { data, isLoading, isError, error };
};

export const useFetchCollections = () => {
  const { data, isLoading, isSuccess, isError, isPending } = useSuspenseQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/articles/collections`
      );
      return response.data;
    },
    staleTime: 0,
  });
  return { data, isError, isSuccess, isLoading, isPending };
};

export const useFetchArticleByCategory = (category: string) => {
  const { data, isLoading, isSuccess, isError, isPending } = useSuspenseQuery({
    queryKey: ["articles", category],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/articles/${category}`
      );
      return response.data;
    },
    staleTime: 0,
  });
  return { data, isError, isSuccess, isLoading, isPending };
};
