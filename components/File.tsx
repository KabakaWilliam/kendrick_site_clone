import Image from "next/image";
import { useRouter } from "next/router";
import Draggable from "react-draggable";

interface props {
  file: string;
  bottompx: number;
  leftpx: number;
}

const File = ({ file, bottompx, leftpx }: props) => {
  const router = useRouter();
  return (
    <Draggable handle="#handle">
      <div
        onClick={() => router.push("/nuthoughts")}
        id="handle"
        className={`absolute z-30  top-[60vh] left-[60%] text-sm flex flex-col items-center justify-center pointer-events-auto w-[90px] h-[90px] hover:border-2 hover:border-dotted border-black`}
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
