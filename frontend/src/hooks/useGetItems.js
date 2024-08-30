import { useQuery } from "@tanstack/react-query";
import { getAllItems } from "../services/apiItems";

export function useItems() {
  const {
    isPending,
    data: items = [],
    error,
  } = useQuery({
    queryKey: ["items"],
    queryFn: getAllItems,
  });

  const count = items.length;

  return { isPending, error, items, count };
}

export default useItems;
