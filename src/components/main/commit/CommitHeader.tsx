import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { cn } from "@/src/lib/utils";
import { courierPrime, montserrat } from "@/src/lib/fonts";

type tProps = {
  commit?: {
    message: string;
    parentSha: string;
    sha: string;
    author: any;
    committer: any;
  };
};

export default function CommitHeader({ commit }: tProps) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-5 gap-6 mb-8 p-2 ">
      <div className="col-span-1 xl:col-span-3 flex gap-4 ">
        <div className="relative h-14 w-14 shrink-0">
          <Image
            src={commit?.author?.avatar}
            alt={commit?.author?.name}
            fill
            loading="lazy"
            className="rounded-full object-cover"
          />
        </div>

        <div className="flex-1 min-w-0">
          <h1 className="text-xl font-semibold text-slate-700 wrap-break-word">
            {commit?.message}
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Authored by{" "}
            <span className="font-semibold text-slate-800">
              {commit?.author?.name}
            </span>{" "}
            {formatDistanceToNow(new Date(commit?.author?.date), {
              addSuffix: true,
            })}
          </p>

          <p className="mt-1 text-sm leading-6 text-gray-900">
            This is body text. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Eget ipsum massa egestas id pellentesque volutpat
            maecenas amet.
          </p>
        </div>
      </div>

      <div className="col-span-1 xl:col-span-2 xl:text-right">
        <p className="text-sm text-gray-500">
          Commit by{" "}
          <span className="font-semibold text-gray-900">
            {commit?.committer?.name}
          </span>{" "}
          {formatDistanceToNow(new Date(commit?.committer?.date), {
            addSuffix: true,
          })}
        </p>

        <p className="mt-2 text-sm text-gray-500 break-all">
          <span className={montserrat.className}>Commit</span>{" "}
          <span className={cn("text-gray-900", courierPrime.className)}>
            {commit?.sha}
          </span>
        </p>

        {commit?.parentSha && (
          <p className="mt-2 text-sm text-gray-500 break-all">
            <span className={montserrat.className}>Parent</span>{" "}
            <span className={cn("text-blue-700", courierPrime.className)}>
              {commit?.parentSha}
            </span>
          </p>
        )}
      </div>
    </div>
  );
}
