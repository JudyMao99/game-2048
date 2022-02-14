import { useState } from "react";
import { Button } from "../Button";

import "./overlay.less";

type Props = {
  text: string;
  onClick: () => void;
};

export const Overlay = ({ text, onClick } : Props) => {
  return (
    <div className="overlay">
      <h2>{text}</h2>
      <Button onClick={onClick}>Restart</Button>
    </div>
  );
};
