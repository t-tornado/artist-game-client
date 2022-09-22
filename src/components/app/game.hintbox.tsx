import React from "react";
import { AppAssets } from "../../assets";

interface Props {
  className?: string;
  visible: boolean;
}

export const HintBox: React.FC<Props> = (props) => {
  if (!props.visible) return null;
  return (
    <figure
      className={`flex flex-col space-y-2 items-center w-[120px] h-auto text-white text-md font-poppins ${props?.className}`}
    >
      <img height={100} width={100} src={AppAssets.Mary} alt="album cover" />
      <figcaption>HINT</figcaption>
    </figure>
  );
};
