"use client";

export default function Square({ board, index, changeSymbolTurn }) {
  return (
    <button className="square" onClick={changeSymbolTurn}>
      {board[index]}
    </button>
  );
}
