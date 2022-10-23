import Image from "next/image";
import { set, get } from "idb-keyval";
import useFileStore, { FileInfo } from "../../../stores/fileStore";

const Explorer = () => {
  const files = useFileStore((state) => state.files);
  const setCurrentFile = useFileStore((state) => state.setCurrentFile);
  const currentFile = useFileStore((state) => state.currentFile);

  const handleClick = async (e: any, file: FileInfo) => {
    if (file.kind === "file" && currentFile !== file.name) {
      const fileHandle = (await get(file.name)) as FileSystemFileHandle;
      const fileContent = await fileHandle.getFile();
      var reader = new FileReader();
      reader.onload = function (event) {
        set("currentFile", event.target?.result);
        setCurrentFile(fileContent.name);
      };
      reader.readAsText(fileContent, "UTF-8");
    }
  };

  return (
    <aside className="">
      <div className="bg-gray-300 mb-1 p-1 shadow">Explorer</div>
      <div>
        {files.map((file, idx) => (
          <div
            className="hover:bg-gray-300 cursor-pointer rounded-tl-md rounded-bl-md p-1 mt-1 mb-1 ml-1 flex items-start gap-2"
            key={idx}
            onClick={(e) => handleClick(e, file)}
          >
            <Image
              alt={file.kind === "directory" ? "d" : "f"}
              src={
                file.kind === "directory"
                  ? "/explorer/folder_FILL0_wght400_GRAD0_opsz48.svg"
                  : "/explorer/description_FILL0_wght400_GRAD0_opsz48.svg"
              }
              height="24"
              width="24"
            />{" "}
            {file.name}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Explorer;
