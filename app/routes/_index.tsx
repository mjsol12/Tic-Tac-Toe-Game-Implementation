import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const player = { X: "X", O: "O" };

export default function Index() {
  const [history, setHistory] = useState(Array(9).fill(null));
  const [currentMove, setCurrentMove] = useState<string>(player.X);
  const [winner, setWinner] = useState<string | null>(null);

  function handleClick(index: number) {
    setHistory((prev) => {
      const newHistory = prev.map((val, i) => {
        if (i === index && val === null) {
          if (currentMove === player.X) {
            setCurrentMove(player.O);
            return player.X;
          } else {
            setCurrentMove(player.X);
            return player.O;
          }
        } else return val;
      });

      const winner = handleWinner(newHistory);

      if (winner) {
        setWinner(currentMove);
      }

      return newHistory;
    });
  }

  const handleWinner = (squares: string[]) => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return true;
      }
    }
    return false;
  };

  const handleReset = () => {
    setHistory((prev) => prev.map(() => null));
    setWinner(null);
  };
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Tictactoe</h1>
      {winner === null && <h3>Your turn player {currentMove}</h3>}
      {winner !== null && <h3>Winner is player {winner}</h3>}
      <div
        style={{
          display: `inline-grid`,
          gridTemplateColumns: `auto auto auto`,
          backgroundColor: `#2196F3`,
          padding: `10px`,
        }}
      >
        {Array(9)
          .fill(null)
          .map((_, i) => (
            <button
              disabled={winner !== null}
              style={{
                height: "50px",
                width: "50px",
                backgroundColor: ` rgba(255, 255, 255, 0.8)`,
                border: `1px solid rgba(0, 0, 0, 0.8)`,
                fontSize: `30px`,
                textAlign: `center`,
              }}
              key={i}
              onClick={() => handleClick(i)}
            >
              {history[i]}
            </button>
          ))}
      </div>
      <div>
        <button onClick={() => handleReset()}>RESET</button>
      </div>
    </div>
  );
}
