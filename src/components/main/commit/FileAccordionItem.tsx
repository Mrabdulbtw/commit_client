import DiffViewer from "./DiffViewer";
type tProps = {
  files: {
    filename: string;
    patch: string;
  }[];
};
export default function FileAccordionItem({ files }: tProps) {
  return (
    <div className="space-y-4">
      {files.map((file, i) => (
        <DiffViewer key={i} patch={file.patch} filename={file.filename} />
      ))}
    </div>
  );
}
