import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutUser } from "../services/apiUsers";

export function useLogout() {
  const queryClient = useQueryClient();

  const {
    mutate: signOut,
    isPending,
    error,
  } = useMutation({
    mutationFn: logoutUser,

    onSuccess: () => {
      queryClient.invalidateQueries(["session"]);
    },
    onError: (error) => {
      console.error("Sign out error:", error);
    },
  });

  return { signOut, isPending, error };
}
