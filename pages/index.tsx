import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Draggable from "react-draggable";
import File from "../components/File";
import BlackFile from "../components/BlackFile";
import GrayFile from "../components/GrayFile";
import KendrickPhoto from "../components/KendrickPhoto";

const Home: NextPage = () => {
  return (
    <div className="min-h-full flex flex-col text-sm">
      <Head>
        <title>oklama </title>
        <meta name="description" content="Mr Morale" />
        <link rel="icon" href="/file.png" />
      </Head>

      <main className="absolute inset-0 overflow-hidden select-none z-10">
        <div className="absolute top-0 left-0 bottom-[90px] right-[90px]  border-red-500">
          {/* file container */}
          <File file="/file.png" leftpx={40} bottompx={70} />
          <BlackFile />
          <GrayFile />

          {/* kendrick image */}
          <KendrickPhoto />
        </div>
      </main>

      {/* top nav options */}
      <div className="fixed top-8 left-8 z-30 text-black/50 font-mono text-[13px] cursor-pointer">
        <span className="hover:text-[#cd3f25]">music</span>
      </div>

      <div className="fixed top-8 right-8 z-30 text-black/50 font-mono text-[13px] cursor-pointer">
        <span className="hover:text-[#cd3f25]">tour</span>
      </div>

      {/* footer */}
      <div className="fixed bottom-8 left-0 right-0 h-0 flex justify-center items-center z-30">
        <div className="absolute bottom-0 text-black/50 font-mono">
          <a
            className="hover:text-[#cd3f25]"
            href="https://twitter.com/kendricklamar"
            target="_blank"
            rel="noreferrer"
          >
            twitter
          </a>{" "}
          /{" "}
          <a
            className="hover:text-[#cd3f25]"
            href="https://www.instagram.com/kendricklamar/"
            target="_blank"
            rel="noreferrer"
          >
            instagram
          </a>{" "}
          /{" "}
          <a
            className="hover:text-[#cd3f25]"
            href="https://www.facebook.com/kendricklamar"
            target="_blank"
            rel="noreferrer"
          >
            facebook
          </a>{" "}
          /{" "}
          <a
            className="hover:text-[#cd3f25]"
            href="https://www.youtube.com/channel/UC3lBXcrKFnFAFkfVk5WuKcQ/videos"
            target="_blank"
            rel="noreferrer"
          >
            youtube
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
