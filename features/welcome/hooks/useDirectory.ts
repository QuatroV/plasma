import { set } from "idb-keyval";
import useFileStore from "../../../stores/fileStore";
import useWelcomeModalStore from "../stores/modalStore";

export default function useDirectory() {
  const addFile = useFileStore((state) => state.addFile);
  const setIsOpen = useWelcomeModalStore((state) => state.setIsOpen);

  const openDir = async () => {
    const directoryHandle = await window.showDirectoryPicker();

    for await (const entry of directoryHandle.values()) {
      addFile({ name: entry.name, kind: entry.kind });
      set(entry.name, entry);
    }

    setIsOpen(false);
  };

  return { openDir };
}
