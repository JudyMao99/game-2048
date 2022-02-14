import React from "react";
import { BoardProvider } from "./context/BoardContext";
import { boardMargin, tileCount as defaultTileCount } from "./boardConfig";
import { Grid } from "../Grid";
import { Tile } from "../Tile";
import { TileMeta, tileTotalWidth } from "../Tile/tileConfig";
import "./board.less";

type Props = {
  tiles: TileMeta[];
  tileCountPerRow: number;
};

export const Board = ({ tiles, tileCountPerRow = defaultTileCount }: Props) => {
  // container width = tile width * tile count per row
  const containerWidth = tileTotalWidth * tileCountPerRow;
  // board width = container width + margin
  const boardWidth = containerWidth + boardMargin;

  // render all tiles on the board
  const tileList = tiles.map(({ id, ...restProps }) => (
    <Tile key={`tile-${id}`} {...restProps} zIndex={id} />
  ));

  return (
    <div className="board" style={{ width: boardWidth }}>
      <BoardProvider
        containerWidth={containerWidth}
        tileCount={tileCountPerRow}
      >
        <div className="tile-container">{tileList}</div>
        <Grid />
      </BoardProvider>
    </div>
  );
};
