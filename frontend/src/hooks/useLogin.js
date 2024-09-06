import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser } from "../services/apiUsers";

export function useLogin(onSuccessCallback) {
  const queryClient = useQueryClient();

  const {
    mutate: login,
    isPending,
    error,
  } = useMutation({
    mutationFn: ({ email, password }) => loginUser({ email, password }),

    onSuccess: (user) => {
      queryClient.setQueriesData(["user"], user.username);
      queryClient.invalidateQueries(["session"]);

      if (onSuccessCallback) {
        onSuccessCallback();
      }
    },

    onError: (err) => {
      console.log(err);
    },
  });

  return { login, isPending, error };
}
