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

export const useFetchArticle = (slug: string) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/article/${slug}`
      );
      return response.data.article;
    },
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
  });
  return { data, isError, isSuccess, isLoading, isPending };
};
