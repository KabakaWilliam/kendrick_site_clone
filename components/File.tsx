import Image from "next/image";
import Draggable from "react-draggable";

interface props {
  file: string;
  bottompx: number;
  leftpx: number;
}

const File = ({ file, bottompx, leftpx }: props) => {
  return (
    <Draggable handle="#handle">
      <div
        id="handle"
        className={`absolute z-30  bottom-[70vh] left-[90%] text-sm flex flex-col items-center justify-center pointer-events-auto w-[90px] h-[90px] hover:border-2 hover:border-dotted border-black`}
      >
        <Image
          id="handle"
          src={file}
          width={64}
          height={64}
          className=" pointer-events-none z-20 "
          style={{ imageRendering: "pixelated" }}
        />
        <span className="pointer-events-auto text-[13px] text-center bg-white">
          nu thoughts
        </span>
      </div>
    </Draggable>
  );
};

export default File;
