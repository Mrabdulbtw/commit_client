import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useViewCommit = (owner: string, repo: string, sha: string) => {
  const getCommit = async (owner: string, repo: string, sha: string) => {
    const { data } = await axios.get(
      `${process.env.BACKEND_URL||"http://localhost:5000/api/v1/commit/view"
      }/${owner}/${repo}/${sha}`
    );
    return data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["commit", owner, repo, sha],
    queryFn: () => getCommit(owner, repo, sha),
    enabled: !!owner && !!repo && !!sha,
    staleTime: 1000 * 60 * 5,
  });

  return {
    data,
    isLoading,
    error,
  };
};
