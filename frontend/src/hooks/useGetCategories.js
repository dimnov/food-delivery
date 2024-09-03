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
  });

  return { isPending, categories, error };
}

export default useGetCategories;
