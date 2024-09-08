import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../services/apiItems";

function useGetCategories() {
  const {
    isPending,
    data: categories = [],
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
    staleTime: 3600000, // 60 minutes
  });

  return { isPending, categories, error };
}

export default useGetCategories;
