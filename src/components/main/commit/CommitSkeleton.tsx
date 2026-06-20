import Skeleton from "../../utils/Skeleton";

export default function CommitHeaderSkeleton() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-5 gap-6 mb-8">
      <div className="xl:col-span-3 flex gap-4">
        <Skeleton className="h-14 w-14 rounded-full" />

        <div className="flex-1 space-y-3">
          <Skeleton className="h-7 w-64" />
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>

      <div className="xl:col-span-2 space-y-3">
        <Skeleton className="h-4 w-56 ml-auto" />
        <Skeleton className="h-4 w-80 ml-auto" />
        <Skeleton className="h-4 w-72 ml-auto" />
      </div>
    </div>
  );
}

export function FileDiffSkeleton() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-6 w-52" />

      <div className=" rounded bg-white p-3">
        <Skeleton className="h-5 w-40 mb-4" />
        {Array.from({ length: 12 }).map((_, i) => (
          <Skeleton key={i} className="h-7 w-full mb-1" />
        ))}
      </div>
    </div>
  );
}
