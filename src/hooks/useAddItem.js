import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addItemApi } from "../services/apiItems";
import { toast } from "react-toastify";

function useAddItem() {
  const queryClient = useQueryClient();

  const { mutate: addItem, isPending } = useMutation({
    mutationFn: addItemApi,
    onSuccess: () => {
      toast.success("Added Successfully!", {
        style: {
          fontSize: "1.6rem",
        },
      });
      queryClient.invalidateQueries({ queryKey: ["items"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isPending, addItem };
}

export default useAddItem;
