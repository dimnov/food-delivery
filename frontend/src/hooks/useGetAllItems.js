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
  });

  return { isPending, items, error };
}

export default useGetAllItems;
