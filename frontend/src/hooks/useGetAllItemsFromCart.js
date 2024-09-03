import { useQuery } from "@tanstack/react-query";
import { getAllItemsFromCart } from "../services/apiItems";

function useGetAllItemsFromCart(ids) {
  const {
    isPending,
    data: items = [],
    error,
  } = useQuery({
    queryKey: ["cartItems", ids],
    queryFn: () => getAllItemsFromCart(ids),
    enabled: ids.length > 0,
  });

  return { isPending, items, error };
}

export default useGetAllItemsFromCart;
