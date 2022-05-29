import Image from "next/image";
import React from "react";
import Draggable from "react-draggable";

const KendrickPhoto = () => {
  return (
    <Draggable>
      <div
        id="handle"
        className="absolute z-50  bottom-[50vh] left-[50vw] text-sm flex flex-col items-center justify-center pointer-events-auto w-[90px] "
      >
        <Image
          src={"/mm.jpeg"}
          width={84}
          height={84}
          className="select-none pointer-events-none z-20 "
          style={{ imageRendering: "pixelated" }}
        />
      </div>
    </Draggable>
  );
};

export default KendrickPhoto;
