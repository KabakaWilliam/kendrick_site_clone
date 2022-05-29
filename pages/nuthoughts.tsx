import Head from "next/head";
import Image from "next/image";

import React from "react";

const nuthoughts = () => {
  return (
    <div className="bg-black w-screen h-max md:h-screen text-white font-mono text-[10px]">
      <Head>
        <title>nu thoughts</title>
        <meta name="description" content="kendricks thoughts" />
        <link rel="icon" href="/file.png" />
      </Head>
      <div className="flex items-end  justify-start w-screen h-[55px] mb-5">
        <a
          href="/"
          className="cursor-pointer md:p-0 md:w-[3%] w-[5%]  h-[100%] flex items-end justify-end  md:justify-center text-[14px]"
        >
          ←
        </a>
        <div className="px-5 md:p-0 md:w-[8%]  h-[100%] flex items-end justify-center">
          august 20 2021
        </div>
      </div>
      <div className="w-[90%]   md:w-[30%] text-[13px] px-5">
        I spend most of my days with fleeting thoughts. Writing. Listening. And
        collecting old Beach cruisers. The morning rides keep me on a hill of
        silence. <br />
        <br />I go months without a phone.
        <br />
        <br /> Love, loss, and grief have disturbed my comfort zone, but the
        glimmers of God speak through my music and family.
        <br />
        <br /> While the world around me evolves, I reflect on what matters the
        most. The life in which my words will land next.
        <br />
        <br /> As I produce my final TDE album, I feel joy to have been a part
        of such a cultural imprint after 17 years. The Struggles. The Success.
        And most importantly, the Brotherhood. May the Most High continue to use
        Top Dawg as a vessel for candid creators. As I continue to pursue my
        life’s calling.
        <br />
        <br /> There’s beauty in completion. And always faith in the unknown.
        <br />
        <br />
        Thank you for keeping me in your thoughts. I’ve prayed for you all.
        <br />
        <br /> See you soon enough. <br />
        <br />
        -oklama
      </div>
      <div className="w-[90%] h-[20vh] px-5  md:w-[30%] flex  justify-center">
        <Image src="/studio.webp" width={210} height={140} layout="fixed" />
      </div>
    </div>
  );
};

export default nuthoughts;
