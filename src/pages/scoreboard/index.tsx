import React from "react";
import { FaRobot } from "react-icons/fa";
import { Loading } from "../../components/shared";
import { useScoreboard } from "./scoreboard.component";

export const Scoreboard: React.FC = () => {
  const { data, states } = useScoreboard();
  const { users } = data;
  const { error, loading } = states;

  function renderUserScores() {
    return users.map((usr, idx) => {
      return (
        <React.Fragment key={idx}>
          <tr className="text-lg text-white">
            <td className="flex space-x-5 items-center">
              <div
                style={{ backgroundColor: usr.color }}
                className="h-8 lg:h-10 w-8  lg:w-10 rounded-full flex justify-center items-center"
              >
                <FaRobot color="white" className="h-5 lg:h-8" />
              </div>
              <span>{usr.username}</span>
            </td>
            <td>{usr.score}</td>
          </tr>
        </React.Fragment>
      );
    });
  }
  return (
    <div className="h-full w-full flex flex-col items-center">
      <header className="text-bold text-2xl lg:text-4xl text-white mt-10 lg:mt-5">
        Scoreboard
      </header>
      <main className="h-full w-full">
        {!error && !loading ? (
          <>
            <table className="mx-auto border-separate border-spacing-5 lg:border-spacing-3 w-full lg:w-[60%]">
              <colgroup>
                <col width="80%" />
                <col width="20%" />
              </colgroup>
              <thead>
                <tr className="text-white text-sm ">
                  <th>User</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody className="text-sm lg:text-md text-white">
                {renderUserScores()}
              </tbody>
            </table>
          </>
        ) : (
          <div className="h-full w-full flex items-center justify-center">
            <Loading />
          </div>
        )}
      </main>
    </div>
  );
};
