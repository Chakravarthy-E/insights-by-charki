"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFetchArticles = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/articles?published=true`
      );
      return response.data;
    },
  });
  return { data, isLoading };
};

export const useFetchArticle = (id: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/article/${id}`
      );
      return response.data.article;
    },
  });
  return { data, isLoading };
};
