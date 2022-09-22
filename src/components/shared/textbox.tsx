import React, { useState } from "react";

interface Props {
  onSubmit?: (e?: any) => void;
  onType?: (e?: any) => void;
  className?: string;
  placeholder?: string;
  reset?: boolean;
}

export const TextBox = React.forwardRef((props: Props, ref: any) => {
  const [answer, setAnswer] = useState("");
  return (
    <div
      className={`flex items-center justify-between font-poppins text-white max-w-[600px] h-12 px-3 bg-white ${props?.className}`}
    >
      <input
        ref={ref}
        type="text"
        className="text-md text-medium focus:outline-none w-[75%] text-black"
        placeholder={props?.placeholder ?? "Your Answer"}
        onChange={(e: any) => {
          setAnswer(e.target.value);
        }}
      />
      <button
        onClick={(e: any) => {
          e.preventDefault();
          if (props?.onSubmit && answer) {
            props.onSubmit(answer.trim());
          }
        }}
        className="h-8 text-sm bg-black px-8 items-center justify-center"
      >
        SUBMIT
      </button>
    </div>
  );
});
