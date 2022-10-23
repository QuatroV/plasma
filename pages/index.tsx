import Editor from "@monaco-editor/react";
import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import useFileStore from "../stores/fileStore";
import WelcomeModal from "../features/welcome/components/WelcomeModal";
import MenuBar from "../features/menubar/components/Menubar";
import Explorer from "../features/explorer/components/Explorer";
import { get } from "idb-keyval";
import { clear } from "idb-keyval";

const Home: NextPage = () => {
  const currentFile = useFileStore((state) => state.currentFile);
  const [editorText, setEditorText] = useState("");

  useEffect(() => {
    const handleFileChange = async () => {
      const newFileContent = await get("currentFile");
      setEditorText(newFileContent);
    };
    handleFileChange();
  }, [currentFile]);

  // Clear IDB on reload
  useEffect(() => {
    document.addEventListener("onbeforeunload", () => clear());
  }, []);

  return (
    <div className="bg-gray-400">
      <WelcomeModal />
      <MenuBar />
      <main className="flex w-full h-[calc(100vh-40px)]">
        <Explorer />
        <div className="z-0 flex-1">
          <div className="bg-gray-500 flex">
            <div className="bg-gray-300 p-1 border-l-2 shadow-lg cursor-pointer">
              File 1
            </div>
            <div className="bg-gray-400 p-1 border-l-2 cursor-pointer">
              File 2
            </div>
            <div className="bg-gray-400 p-1 border-l-2 cursor-pointer">
              File 3
            </div>
          </div>
          <Editor
            defaultLanguage="javascript"
            defaultValue="// some comment"
            value={editorText}
            theme="vs-dark"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
