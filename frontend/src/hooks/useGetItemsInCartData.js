import { useQuery } from "@tanstack/react-query";
import { getItemsInCartData } from "../services/apiItems";

function useGetItemsInCartData(ids) {
  const {
    isPending,
    data: items = [],
    error,
  } = useQuery({
    queryKey: ["cartItems", ids],
    queryFn: () => getItemsInCartData(ids),
  });

  return { isPending, items, error };
}

export default useGetItemsInCartData;
