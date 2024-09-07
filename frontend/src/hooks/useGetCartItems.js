import { useQuery } from "@tanstack/react-query";
import { getCartItems } from "../services/apiItems";

function useGetCartItems(userId) {
  const {
    isPending,
    data: cartItems = {},
    error,
  } = useQuery({
    queryKey: ["cartItems"],
    queryFn: () => getCartItems(userId),
  });

  return { isPending, cartItems, error };
}

export default useGetCartItems;
