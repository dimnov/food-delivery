import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerUser } from "../services/apiUsers";

export function useRegister(onSuccessCallback) {
  const queryClient = useQueryClient();

  const {
    mutate: register,
    isPending,
    error,
  } = useMutation({
    mutationFn: ({ username, email, password }) => registerUser({ username, email, password }),

    onSuccess: (user) => {
      queryClient.setQueriesData(["user"], user.username);
      queryClient.invalidateQueries(["session"]);

      if (onSuccessCallback) {
        onSuccessCallback();
      }
    },

    onError: (err) => {
      console.log(err.message);
    },
  });

  return { register, isPending, error };
}
