import React, { useEffect } from "react";
import Button from "../Button";


const Game = () => {

  return (
    <div className="header">
      <div>
        <Button text="Restart" onClick={() => console.log("Restart!")}/>
      </div>
      <div className="background">
        
      </div>
    </div>
  );
};

export default Game;