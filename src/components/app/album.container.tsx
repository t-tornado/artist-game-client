import React from "react";
import { BsFillLockFill } from "react-icons/bs";

interface Props {
  title: string;
  visible: boolean;
}

export const AlbumContainer: React.FC<Props> = (props) => {
  return (
    <div className="relative overflow-hidden w-72 h-16 rounded-md bg-white flex items-center justify-center">
      <p className="font-poppins text-sm font-bold">{props.title}</p>
      {!props?.visible && (
        <div className="absolute flex items-center justify-center h-full w-full bg-[#00000040] backdrop-blur-sm">
          <BsFillLockFill color="white" size="20px" />
        </div>
      )}
    </div>
  );
};
