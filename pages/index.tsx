import Editor from "@monaco-editor/react";
import { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  useEffect(() => {
    open("./welcome", "_blank", "popup width=624 height=240");
  });
  return (
    <>
      <main className="h-screen">
        <Editor
          height="100vh"
          defaultLanguage="javascript"
          defaultValue="// some comment"
        />
      </main>
    </>
  );
};

export default Home;
