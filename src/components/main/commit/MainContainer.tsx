"use client";
import CommitHeader from "./CommitHeader";
import FileAccordionItem from "./FileAccordionItem";
import { useViewCommit } from "@/src/hooks/commit/useViewCommit";

type tProps = {
  owner: string;
  repo: string;
  sha: string;
};

export default function MainContainer({ owner, repo, sha }: tProps) {
  const { isLoading, error, data } = useViewCommit(owner, repo, sha);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error loading commit</div>;
  }
  return (
    <main className="xl:min-w-7xl  max-w-2xl xl:max-w-7xl  mx-auto  mt-8  p-5">
      <CommitHeader commit={data?.data.commit} />
      <FileAccordionItem files={data?.data?.files} />
    </main>
  );
}
