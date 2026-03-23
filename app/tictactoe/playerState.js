export default function PlayerState({ turn, gameState }) {
  return (
    <>
      {gameState == "Started" ? (
        <div>it's {turn}'s turn</div>
      ) : gameState == "Tie" ? (
        <div>It's a tie</div>
      ) : gameState == "Winner" && turn == "X" ? (
        <div>O won!</div>
      ) : (
        <div>X won!</div>
      )}
    </>
  );
}
