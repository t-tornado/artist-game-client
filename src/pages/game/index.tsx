import React from "react";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import { AlbumContainer, HintBox, ScoreTag } from "../../components/app";
import { GameCompleteModal } from "../../components/modals";
import { TextBox } from "../../components/shared";
import { useGamePage } from "./game-page.component";

export const GamePage: React.FC = () => {
  const { data, handlers, states, components } = useGamePage();
  const { currentAlbum, currentTry, score, albums, round } = data;
  const { onSubmitAnswer, restartGame } = handlers;
  const { GAME_STATE, resetTexbox } = states;
  const { inputElementRef } = components;

  function renderPoints(count: number) {
    const points = new Array(count).fill(0);
    return points.map((ct, idx) => (
      <VscDebugBreakpointLog key={idx} color="gold" size="18px" />
    ));
  }

  function renderAlbums() {
    return albums.map((al, idx) => {
      return (
        <AlbumContainer key={idx} title={al} visible={currentTry >= idx + 1} />
      );
    });
  }

  return (
    <>
      {GAME_STATE === "PLAYING" ? (
        <main className="flex flex-col w-full h-full items-center">
          <h1 className="font-bold text-white text-5xl">Round {round}</h1>
          <div className="flex w-full h-full justify-center">
            <section className="w-1/3 h-full space-y-3 mt-16">
              <h4 className="text-sm font-bold font-poppins text-[#a8a8a8]">
                TRIES LEFT
              </h4>
              {renderAlbums()}
            </section>
            <section className="w-2/3 h-full pl-10 font-poppins">
              <div className="flex items-center space-x-4 mt-10">
                <h2 className="text-white text-2xl">
                  For {currentTry === 1 ? 5 : currentTry === 2 ? 3 : 1} points
                </h2>
                <div className="flex space-x-0">
                  {renderPoints(
                    currentTry === 1 ? 5 : currentTry === 2 ? 3 : 1
                  )}
                </div>
              </div>
              <p className="text-white text-md">
                Guess the fullname of this Album's artiste
              </p>
              <h3 className="font-poppins text-4xl text-white font-bold mt-8">
                {currentAlbum ? `"${currentAlbum}"` : null}
              </h3>
              <HintBox className="mt-5" visible={currentTry === 3} />
              <div className="mt-16">
                <TextBox
                  ref={inputElementRef}
                  reset={resetTexbox}
                  onSubmit={onSubmitAnswer}
                />
                <div className="flex w-1/2 justify-between mt-10 items-center">
                  <ScoreTag score={score} />
                  <button
                    onClick={(e: any) => {
                      e.preventDefault();
                      restartGame();
                    }}
                    className="h-[30px] px-5 flex items-center justify-center bg-white font-poppins text-black text-sm"
                  >
                    Restart Game
                  </button>
                </div>
              </div>
            </section>
          </div>
        </main>
      ) : GAME_STATE === "ENDED" ? (
        <div className="h-full w-full flex justify-center items-center">
          <GameCompleteModal score={score} />
        </div>
      ) : null}
    </>
  );
};
