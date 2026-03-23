"use client";
import Square from "./square";
import { useState } from "react";

export default function Board({ winner, board, turn, changeSymbolTurn }) {
  return (
    <div id="board">
      <div>
        <Square
          board={board}
          index={0}
          changeSymbolTurn={() => changeSymbolTurn(0)}
        />
        <Square
          board={board}
          index={1}
          changeSymbolTurn={() => changeSymbolTurn(1)}
        />
        <Square
          board={board}
          index={2}
          changeSymbolTurn={() => changeSymbolTurn(2)}
        />
      </div>
      <div>
        <Square
          board={board}
          index={3}
          changeSymbolTurn={() => changeSymbolTurn(3)}
        />
        <Square
          board={board}
          index={4}
          changeSymbolTurn={() => changeSymbolTurn(4)}
        />
        <Square
          board={board}
          index={5}
          changeSymbolTurn={() => changeSymbolTurn(5)}
        />
      </div>
      <div>
        <Square
          board={board}
          index={6}
          changeSymbolTurn={() => changeSymbolTurn(6)}
        />
        <Square
          board={board}
          index={7}
          changeSymbolTurn={() => changeSymbolTurn(7)}
        />
        <Square
          board={board}
          index={8}
          changeSymbolTurn={() => changeSymbolTurn(8)}
        />
      </div>
    </div>
  );
}
