export default function PlayerState({ currentPlayer, winner, isDraw }) {
  if (winner) {
    return <div>{winner} won!</div>;
  }

  if (isDraw) {
    return <div>It's a tie</div>;
  }

  return <div>it's {currentPlayer}'s turn</div>;
}
