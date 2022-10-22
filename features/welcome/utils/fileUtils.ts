export const openDir = async () => {
  const directoryHandle = await window.showDirectoryPicker();

  for await (const entry of directoryHandle.values()) {
    console.log(entry.kind, entry.name);
  }
};
