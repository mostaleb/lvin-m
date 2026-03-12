"use client";
import Square from "./square";
import "../global.css";
import { useState } from "react";
import PlayerState from "./playerState";

export default function Game() {
  const [moves, setMoves] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  return (
    <>
      <PlayerState />
      <div id="board">
        <div>
          <Square />
          <Square />
          <Square />
        </div>
        <div>
          <Square />
          <Square />
          <Square />
        </div>
        <div>
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    </>
  );
}
