import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerUser } from "../services/apiUsers";

export function useRegister(onSuccessCallback) {
  const queryClient = useQueryClient();

  const { mutate: register, isPending } = useMutation({
    mutationFn: registerUser,

    onSuccess: () => {
      queryClient.invalidateQueries(["session"]);

      if (onSuccessCallback) {
        onSuccessCallback();
      }
    },
  });

  return { register, isPending };
}
