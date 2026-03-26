"use client";
import { useState } from "react";
import Board from "./board";
import PlayerState from "./playerState";
import { calculateWinner, isBoardFull } from "./logic";

const EMPTY_BOARD = ["", "", "", "", "", "", "", "", ""];

export default function Game() {
  const [board, setBoard] = useState(EMPTY_BOARD);
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(board);
  const isDraw = !winner && isBoardFull(board);
  const currentPlayer = isXNext ? "X" : "O";

  function handleSquareClick(index) {
    if (winner || isDraw || board[index] !== "") {
      return;
    }

    const nextBoard = [...board];
    nextBoard[index] = currentPlayer;
    setBoard(nextBoard);

    if (!calculateWinner(nextBoard) && !isBoardFull(nextBoard)) {
      setIsXNext((previousValue) => !previousValue);
    }
  }

  return (
    <>
      <PlayerState
        currentPlayer={currentPlayer}
        winner={winner}
        isDraw={isDraw}
      />
      <Board board={board} onSquareClick={handleSquareClick} />
    </>
  );
}
