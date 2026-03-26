"use client";
import Square from "./square";

const BOARD_ROWS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];

export default function Board({ board, onSquareClick }) {
  return (
    <div id="board">
      {BOARD_ROWS.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((squareIndex) => (
            <Square
              key={squareIndex}
              value={board[squareIndex]}
              onSquareClick={() => onSquareClick(squareIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
