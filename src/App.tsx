import React, { useState } from "react";
// import { Button } from "./components/Button";
import { Game } from "./components/Game";

import "./App.less";
import { Button } from "./components/Button";

/* eslint-disable react/jsx-no-target-blank */
export const App = () => {
  const [date, setDate] = useState<Date>(new Date());

  const handleRestart = () => {
    setDate(new Date());
  };

  return (
    <div className="App">
      <div className="header">
        <div>
          <h1>Game 2048</h1>
        </div>
        <div>
          <Button onClick={handleRestart}>Restart</Button>
        </div>
      </div>
      <div className="game-container">
        <Game key={date.toISOString()} restart={handleRestart}/>
      </div>
    </div>
  );
};
/* eslint-enable react/jsx-no-target-blank */
