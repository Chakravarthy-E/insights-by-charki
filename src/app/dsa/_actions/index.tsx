import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFetchDSAArticle = (slug: string) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/dsa/get-by-slug/${slug}`
      );
      return response.data.article;
    },
    staleTime: 0,
  });
  return { data, isLoading, isError, error };
};

export const useFetchDSAArticleByCategory = (category: string) => {
  const { data, isLoading, isSuccess, isError, isPending } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/dsa/collections/${category}`
      );
      return response.data;
    },
    staleTime: 0,
  });
  return { data, isError, isSuccess, isLoading, isPending };
};

export const useFetchDSACollections = () => {
  const { data, isLoading, isSuccess, isError, isPending } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API}/dsa/dsa-collections`
      );
      return response.data;
    },
    staleTime: 0,
  });
  return { data, isError, isSuccess, isLoading, isPending };
};
