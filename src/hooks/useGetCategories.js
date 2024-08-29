import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../services/apiItems";

function useGetCategories() {
  const {
    isPending,
    data: categories = [],
    error,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return { isPending, categories, error };
}

export default useGetCategories;
