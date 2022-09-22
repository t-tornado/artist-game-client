import React from "react";
import Loader from "react-spinners/ClipLoader";
interface Props {
  className?: string;
  height?: number | string;
  color?: string;
  containerClassName?: string;
}

export const Loading: React.FC<Props> = (props) => {
  return (
    <div className={props?.containerClassName}>
      <Loader
        className={props?.className}
        color={props?.color ?? "#000"}
        size={props?.height ?? 30}
      />
    </div>
  );
};
