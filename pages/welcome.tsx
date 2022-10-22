import Editor from "@monaco-editor/react";
import { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import ButtonsContainer from "../features/welcome/components/ButtonsContainer";

const Welcome: NextPage = () => {
  return (
    <>
      <Head>
        <title>Welcome to PLASMA IDE</title>
      </Head>

      <main className=" h-screen bg-gradient-to-r from-gray-700 to-sky-800">
        <h1 className="text-white font-extrabold text-6xl flex justify-center">
          PL
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            ASM
          </span>
          A IDE
        </h1>
        <ButtonsContainer />
      </main>
    </>
  );
};

export default Welcome;
