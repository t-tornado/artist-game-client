import React from "react";

interface Props {
  className?: string;
  score: number;
}

export const ScoreTag: React.FC<Props> = (props) => {
  return (
    <div className={`flex ${props?.className}`}>
      <div className="w-20 h-[30px] flex items-center justify-center bg-white font-poppins text-black">
        <span className="font-bold text-sm">
          Score : <span className="font-bold text-md">{props.score}</span>
        </span>
      </div>
      <div className="triangle" />
    </div>
  );
};
