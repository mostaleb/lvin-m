"use client";
import PlayerState from "./playerState";
import Board from "./board";
import { useState } from "react";

export default function Game() {
  const [turn, setTurn] = useState("X");
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [gameState, SetGameState] = useState("Started");

  function changeSymbolTurn(index) {
    if (board[index] != "" || gameState == "Winner") {
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

    calculateWinner(nextSquare);
  }

  function checkWin(nextBoard) {
    for (let i = 0; i < 7; i += 3) {
      if (
        nextBoard[i] === nextBoard[i + 1] &&
        nextBoard[i + 1] === nextBoard[i + 2] &&
        nextBoard[i + 2] !== ""
      ) {
        return nextBoard[i];
      }
    }

    for (let i = 0; i < 3; i += 1) {
      if (
        nextBoard[i] === nextBoard[i + 3] &&
        nextBoard[i + 3] === nextBoard[i + 6] &&
        nextBoard[i + 6] !== ""
      ) {
        return nextBoard[i];
      }
    }

    if (
      nextBoard[0] === nextBoard[4] &&
      nextBoard[4] === nextBoard[8] &&
      nextBoard[8] !== ""
    ) {
      return nextBoard[0];
    }

    if (
      nextBoard[2] === nextBoard[4] &&
      nextBoard[4] === nextBoard[6] &&
      nextBoard[6] !== ""
    ) {
      return nextBoard[2];
    }
    return "";
  }

  function calculateWinner(nextBoard) {
    if (nextBoard.includes("") === false) {
      if (checkWin(nextBoard) === "") {
        SetGameState("Tie");
      } else {
        SetGameState("Winner");
      }
    } else {
      if (checkWin(nextBoard) !== "") {
        SetGameState("Winner");
      }
    }
  }

  return (
    <>
      <PlayerState turn={turn} gameState={gameState} />
      <Board turn={turn} board={board} changeSymbolTurn={changeSymbolTurn} />
    </>
  );
}
