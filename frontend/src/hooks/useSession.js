import { useQuery } from "@tanstack/react-query";
import { fetchSession } from "../services/apiUsers";

export function useSession() {
  const {
    isPending,
    data: session,
    error,
  } = useQuery({
    queryKey: ["session"],
    queryFn: fetchSession,
  });

  return { isPending, session, error };
}
