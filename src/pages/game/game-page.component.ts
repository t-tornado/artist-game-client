import React, { useEffect, useMemo, useState } from "react";
import { AppAPI } from "../../api";
import {
  artistes,
  GameState,
  generateRandValue,
  getUserProgress,
  saveUserProgress,
} from "../../utils";

export function useGamePage() {
  const userprogress = getUserProgress();
  const [resetTexbox, setResetTextbox] = useState(false);
  const [GAME_STATE, setGameState] = useState<GameState>("PLAYING");
  const [currentTry, setCurrentTry] = useState(1);
  const [score, setScore] = useState(userprogress?.score ?? 0);
  const [artiste, setArtiste] = useState(generateNewArtiste());
  const [round, setRound] = useState(userprogress?.round ?? 1);
  const [albums, setAlbums] = useState([]);
  const inputElementRef = React.createRef<HTMLInputElement>();

  /**
   * DERIVED VALUES
   */
  const currentAlbum: any = useMemo(() => {
    return albums.find((alb, idx) => idx + 1 === currentTry);
  }, [currentTry, albums]);

  /**
   * HANDLERS
   */

  function onSubmitAnswer(answer: string) {
    setResetTextbox(false);
    let isCorrect = answer.toLowerCase() === artiste.toLowerCase();
    if (isCorrect) {
      updateScore(currentTry);
      setCurrentTry(1);
      updateRound();
      // make api call to itunes for next albums list
      // set album list results to albums state
    } else {
      console.log("Failed try");
      setCurrentTry((prev) => {
        const updatedTry = prev + 1;
        if (updatedTry > 3) {
          // move to next round
          updateRound();
          return 1;
        }
        return updatedTry;
      });
    }
    // end game
    // redirect to score board
  }

  function updateScore(currTry: number) {
    let updateScoreParam = 0;
    if (currTry === 1) updateScoreParam = 5;
    if (currTry === 2) updateScoreParam = 3;
    if (currTry === 3) updateScoreParam = 1;
    setScore(score + updateScoreParam);
  }

  function updateRound() {
    console.log("Calling update rounds");
    setRound(() => {
      const updatedRound = round + 1;
      if (updatedRound > 5) {
        // end game
        setGameState("ENDED");
        return 1;
      }
      return updatedRound;
    });
    if (inputElementRef.current) {
      inputElementRef.current.value = "";
    }
    setArtiste(generateNewArtiste());
  }

  function generateNewArtiste() {
    return artistes[generateRandValue(20)];
  }

  function restartGame() {
    setRound(1);
    setCurrentTry(1);
    setScore(0);
    setArtiste(generateNewArtiste());
  }

  /**
   * EFFECTS
   */
  useEffect(() => {
    console.log({ currentTry });
    const progress = {
      round,
      score,
    };
    saveUserProgress(progress);
  }, [round, score]);

  useEffect(() => {
    // make api call to apple
    // set albums
    (async function () {
      console.log({ artiste });
      const data = await AppAPI.getArtistRandomAlbums(artiste);
      console.log({ data });
      if (data) {
        setAlbums(
          data?.map((alb: any) => ({
            title: alb.collectionCensoredName,
            cover: alb.artworkUrl100,
          }))
        );
      }
    })();
  }, [artiste]);

  //
  return {
    handlers: {
      onSubmitAnswer,
      restartGame,
    },
    data: {
      currentTry,
      albums,
      score,
      currentAlbum,
      round,
    },
    states: {
      GAME_STATE,
      resetTexbox,
    },
    components: {
      inputElementRef,
    },
  };
}
