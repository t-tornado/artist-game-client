import React from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export const AppBackground: React.FC<Props> = (props) => {
  return (
    <div
      className={`h-screen w-screen bg-[url('./assets/background.jpg')] overflow-x-hidden overflow-y-auto`}
    >
      <div
        className={`h-full w-full backdrop-blur-3xl bg-[#00000050]  ${props?.className}`}
      >
        {props.children}
      </div>
    </div>
  );
};
