import create from "zustand";
import { devtools } from "zustand/middleware";

type FileInfo = {
  name: string;
  kind: "directory" | "file";
};

interface FileState {
  files: FileInfo[];
  setFiles: (files: FileInfo[]) => void;
  addFile: (file: FileInfo) => void;
}

const useFileStore = create<FileState>()(
  devtools((set) => ({
    files: [{ name: "dfd", kind: "directory" }],
    setFiles: (files: FileInfo[]) => {
      set({ files });
    },
    addFile: (file: FileInfo) => {
      set((state) => ({ files: state.files.concat(file) }));
    },
  }))
);

export default useFileStore;
