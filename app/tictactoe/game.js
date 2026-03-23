"use client";
import "../global.css";
import PlayerState from "./playerState";
import Board from "./board";
import { useState } from "react";

export default function Game() {
  const [turn, setTurn] = useState("X");
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [gameState, SetGameState] = useState("Started");

  function changeSymbolTurn(index) {
    if (board[index] != "") {
      return;
    }

    const nextSquare = [...board];
    nextSquare[index] = turn;
    setBoard(nextSquare);

    if (turn == "X") {
      setTurn("O");
    } else if (turn == "O") {
      setTurn("X");
    }
  }

  function calculateWinner(board) {
    if (board.includes("") !== false) {
      //its full (a tie or someone won)
    } else {
      //someone won or the game continues
    }
  }

  return (
    <>
      <PlayerState turn={turn} gameState={gameState} />
      <Board turn={turn} board={board} changeSymbolTurn={changeSymbolTurn} />
    </>
  );
}
