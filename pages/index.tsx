import Editor from "@monaco-editor/react";
import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import useFileStore from "../stores/fileStore";
import WelcomeModal from "../features/welcome/components/WelcomeModal";
import MenuBar from "../features/menubar/components/Menubar";

const Home: NextPage = () => {
  const files = useFileStore((state) => state.files);
  return (
    <div className="bg-gray-600">
      <WelcomeModal />
      <MenuBar />
      <main className="h-screen flex w-screen">
        <aside className="flex-1">
          <div>
            {files.map((file, idx) => (
              <div key={idx}>
                {file.kind === "directory" ? "d" : "f"} {file.name}
              </div>
            ))}
          </div>
        </aside>
        <Editor
          height="100vh"
          defaultLanguage="javascript"
          defaultValue="// some comment"
          className="flex-5"
        />
      </main>
    </div>
  );
};

export default Home;
