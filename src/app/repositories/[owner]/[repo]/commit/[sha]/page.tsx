import MainContainer from "@/src/components/main/commit/MainContainer";
type tPageProps = {
  params: Promise<{
    owner: string;
    repo: string;
    sha: string;
  }>;
};
export default async function CommitPage({ params }: tPageProps) {
  const { owner, repo, sha } = await params;
  return <MainContainer owner={owner} repo={repo} sha={sha} />;
}
