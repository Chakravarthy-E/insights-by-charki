"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFetchArticles = (page: number) => {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["articles"],

    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/articles?published=true&page=${page}&limit=5`
      );
      return response.data;
    },
    staleTime: 0,
  });

  return { data, isLoading, isSuccess };
};

export const useFetchArticle = (slug: string) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/article/${slug}`
      );
      return response.data.article;
    },
    staleTime: 0,
  });
  return { data, isLoading, isError, error };
};

export const useFetch = (url: string) => {
  const { data, isLoading, isSuccess, isError, isPending } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API}/${url}`);
      return response.data;
    },
  });
  return { data, isError, isSuccess, isLoading, isPending };
};

export const useFetchCollections = () => {
  const { data, isLoading, isSuccess, isError, isPending } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/collections`
      );
      return response.data;
    },
    staleTime: 0,
  });
  return { data, isError, isSuccess, isLoading, isPending };
};

export const useFetchArticleByCategory = (category: string) => {
  const { data, isLoading, isSuccess, isError, isPending } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/collections/${category}`
      );
      return response.data;
    },
    staleTime: 0,
  });
  return { data, isError, isSuccess, isLoading, isPending };
};
