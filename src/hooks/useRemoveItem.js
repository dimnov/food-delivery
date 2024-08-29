import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeItemApi } from "../services/apiItems";

function useRemoveItem() {
  const queryClient = useQueryClient();

  const { mutate: removeItem, isPending } = useMutation({
    mutationFn: removeItemApi,
    onSuccess: () => {
      queryClient.invalidateQueries("items");
    },
  });

  return { removeItem, isPending };
}

export default useRemoveItem;
