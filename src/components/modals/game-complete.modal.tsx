import React, { useState } from "react";
import { FaSolarPanel } from "react-icons/fa";
import { AppAPI } from "../../api";
import { Loading, TextBox } from "../shared";

interface Props {
  score: number;
}

export const GameCompleteModal: React.FC<Props> = (props) => {
  const [state, setState] = useState<
    "SUBMITTING" | "SUBMITTED" | "ERROR" | "DEFAULT"
  >("DEFAULT");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmitUsername(username: string) {
    if (username) {
      try {
        setState("SUBMITTING");
        await AppAPI.createUser({ username, score: props.score });
        setState("SUBMITTED");
      } catch (error: any) {
        console.log({ error });
        setErrorMessage(error);
        setState("ERROR");
      }
    }
  }

  return (
    <div className="h-56 bg-black p-6 flex flex-col space-y-5 justify-around items-center">
      {state === "DEFAULT" || state === "ERROR" ? (
        <>
          {" "}
          <h5 className="text-white text-sm lg:text-xl">
            Enter a username to save your progress
          </h5>
          <TextBox
            className="w-96"
            placeholder="username"
            onSubmit={onSubmitUsername}
          />
          <span className="text-red-500 text-sm font-bold">{errorMessage}</span>
        </>
      ) : state === "SUBMITTING" ? (
        <>
          <div className="h-full w-[400px] flex items-center justify-center">
            <Loading color="white" />
          </div>
        </>
      ) : (
        <div className="w-[400px] flex flex-col items-center justify-end space-y-5">
          <FaSolarPanel color="white" size="25px" />
          <a href="/scoreboard" className="text-white text-md underline">
            Continue to score board
          </a>
        </div>
      )}
    </div>
  );
};
