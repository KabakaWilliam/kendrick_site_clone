import Image from "next/image";
import React from "react";
import Draggable from "react-draggable";

const BlackFile = () => {
  return (
    <Draggable handle="#handle">
      <div
        id="handle"
        className={`absolute z-30  bottom-[40vh] left-[30%] text-sm flex flex-col items-center justify-center pointer-events-auto w-[90px] h-[90px] hover:border-2 hover:border-dotted border-black`}
      >
        <Image
          src={"/blackFile.png"}
          width={64}
          height={64}
          className=" pointer-events-none z-20 "
          style={{ imageRendering: "pixelated" }}
        />
      </div>
    </Draggable>
  );
};

export default BlackFile;
