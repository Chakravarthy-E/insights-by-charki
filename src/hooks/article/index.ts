"use client";

import { useQuery } from "@tanstack/react-query";
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
