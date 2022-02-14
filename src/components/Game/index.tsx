import React, { useEffect, useState } from "react";
import { useThrottledCallback } from "use-debounce";

import { useGame } from "./hooks/useGame";
import { Board } from "../Board";
import { animationDuration, tileCount } from "../Board/boardConfig";
import { Button } from "../Button";
import { Overlay } from "../Overlay";


type Props = {
  restart: () => void;
}
export const Game = ({ restart } : Props) => {
  const [tiles, moveLeft, moveRight, moveUp, moveDown] = useGame();

  const [gameState, setGameState] = useState("inProgess");

  const onClick = () => {
    setGameState("inProgress");
    restart();
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    // disables page scrolling with keyboard arrows
    e.preventDefault();

    switch (e.code) {
      case "ArrowLeft":
        moveLeft();
        break;
      case "ArrowRight":
        moveRight();
        break;
      case "ArrowUp":
        moveUp();
        break;
      case "ArrowDown":
        moveDown();
        break;
    }
  };

    // protects the reducer from being flooded with events.
    const throttledHandleKeyDown = useThrottledCallback(
      handleKeyDown,
      animationDuration,
      { leading: true, trailing: false }
    );
  
    const checkState = () => {
      // Check if won
      for (const tile of tiles) {
        if (tile.value === 2048) setGameState("won");
      }
      console.log(tiles);
    };

    useEffect(() => {
      window.addEventListener("keydown", throttledHandleKeyDown);
  
      return () => {
        window.removeEventListener("keydown", throttledHandleKeyDown);
      };
    }, [throttledHandleKeyDown]);

    useEffect(() => {
      checkState();
    }, [tiles])
  
    return (
      <>
        {gameState === "won" && <Overlay text="Congratulations! You Won!" onClick={onClick}/>}
        <Board tiles={tiles} tileCountPerRow={tileCount} />
      </>
    );
};