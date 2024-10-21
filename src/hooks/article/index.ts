"use client";

import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import axios from "axios";

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
