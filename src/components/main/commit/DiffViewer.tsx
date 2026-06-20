import { courierPrime } from "@/src/lib/fonts";
import { cn } from "@/src/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type tProps = {
  filename: string;
  patch: string;
};

export default function FileDiff({ filename, patch }: tProps) {
  const [open, setOpen] = useState(true);
  const lines = patch.split("\n");
  const atCode = lines.at(0);
  let oldLine = 1;
  let newLine = 1;

  return (
    <div className="max-w-full">
      <div className="flex items-center">
        <div className="shrink-0">
          <ChevronDown
            className={cn(
              "size-5 cursor-pointer  transition ",
              !open && "-rotate-90"
            )}
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="px-4 py-2 text-blue-600 break-all">{filename}</div>
      </div>

      {open && (
        <div
          className={cn(
            "border border-gray-300 shadow overflow-x-auto  bg-white shadow-gray-100 p-1 rounded",
            courierPrime.className
          )}
        >
          <div className="min-w-max">
            <div className="text-slate-600 py-2 pl-6">{atCode}</div>

            {lines?.slice(1).map((line, index) => {
              let bg = "";
              let oldNumber = "";
              let newNumber = "";

              if (line.startsWith("+")) {
                bg = "bg-[#D8FFCB]";
                newNumber = String(newLine++);
              } else if (line.startsWith("-")) {
                bg = "bg-[#FFE4E9]";
                oldNumber = String(oldLine++);
              } else {
                oldNumber = String(oldLine++);
                newNumber = String(newLine++);
              }
              return (
                <div
                  key={index}
                  className={cn("grid grid-cols-[50px_50px_1fr] ", bg)}
                >
                  <div className={cn("px-2 text-slate-600 bg-slate-50", bg)}>
                    {oldNumber}
                  </div>
                  <div className={cn("px-2 text-slate-600 bg-slate-50", bg)}>
                    {newNumber}
                  </div>
                  <pre className="px-2 text-sm text-[#394246]  whitespace-pre">
                    {line}
                  </pre>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
