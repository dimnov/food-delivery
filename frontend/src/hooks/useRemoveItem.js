import { useMutation } from "@tanstack/react-query";
import { removeItemToCart } from "../services/apiItems";

function useRemoveItem() {
  const {
    isPending,
    mutate: removeItem,
    error,
  } = useMutation({
    mutationFn: ({ cartItems, userId }) => removeItemToCart({ cartItems, userId }),

    onError: (err) => {
      console.log(err);
    },
  });

  return { isPending, removeItem, error };
}

export default useRemoveItem;
