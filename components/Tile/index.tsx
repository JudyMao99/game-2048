import React, { useState } from "react";

type Props = {
  val: number,
  preVal: number,
}

const Tile = ({ val, preVal }: Props) => {
  const [scale, setScale] = useState(1);

  return (
    <div className="w-10">{val}</div>
  )
};

export default Tile;