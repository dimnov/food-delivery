import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutUser } from "../services/apiUsers";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: signOut,
    isPending,
    error,
  } = useMutation({
    mutationFn: logoutUser,

    onSuccess: () => {
      queryClient.invalidateQueries(["session"]);
      navigate("/");
    },
    onError: (error) => {
      console.error("Sign out error:", error);
    },
  });

  return { signOut, isPending, error };
}
