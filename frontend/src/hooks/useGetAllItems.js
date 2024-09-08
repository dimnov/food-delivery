import { useQuery } from "@tanstack/react-query";
import { getAllItems } from "../services/apiItems";

function useGetAllItems() {
  const {
    isPending,
    data: items = [],
    error,
  } = useQuery({
    queryKey: ["items"],
    queryFn: getAllItems,
    staleTime: 3600000, // 60 minutes
  });

  return { isPending, items, error };
}

export default useGetAllItems;
