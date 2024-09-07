import { useMutation } from "@tanstack/react-query";
import { addItemToCart } from "../services/apiItems";

function useAddItem() {
  const {
    isPending,
    mutate: addItem,
    error,
  } = useMutation({
    mutationFn: ({ cartItems, userId }) => addItemToCart({ cartItems, userId }),

    onError: (err) => {
      console.log(err);
    },
  });

  return { isPending, addItem, error };
}

export default useAddItem;
