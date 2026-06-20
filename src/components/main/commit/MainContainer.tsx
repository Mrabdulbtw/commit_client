"use client";
import CommitHeader from "./CommitHeader";
import CommitHeaderSkeleton, { FileDiffSkeleton } from "./CommitSkeleton";
import ErrorComponent from "./ErrorComponent";
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
    return (
      <main className="xl:min-w-7xl max-w-xl xl:max-w-7xl mx-auto mt-8 p-5">
        <CommitHeaderSkeleton />
        <div className="space-y-6">
          <FileDiffSkeleton />
          <FileDiffSkeleton />
          <FileDiffSkeleton />
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="xl:min-w-7xl max-w-xl xl:max-w-7xl mx-auto mt-8 p-5">
        <ErrorComponent />
      </main>
    );
  }

  return (
    <main className="xl:min-w-7xl max-w-xl xl:max-w-7xl mx-auto mt-8 p-5">
      <CommitHeader commit={data?.data.commit} />
      <FileAccordionItem files={data?.data?.files} />
    </main>
  );
}
