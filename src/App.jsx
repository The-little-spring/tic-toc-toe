import { useState } from "react";
import "./App.css";
import Square from "./components/Square";

export default function Board() {
  const [isXNext, setIsXNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) return;
    const nextSquares = squares.slice();
    if (isXNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setIsXNext(!isXNext);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `winner is ${winner}`;
  } else {
    status = "Next player: " + (isXNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square squareClicked={() => handleClick(0)} value={squares[0]} />
        <Square squareClicked={() => handleClick(1)} value={squares[1]} />
        <Square squareClicked={() => handleClick(2)} value={squares[2]} />
      </div>
      <div className="board-row">
        <Square squareClicked={() => handleClick(3)} value={squares[3]} />
        <Square squareClicked={() => handleClick(4)} value={squares[4]} />
        <Square squareClicked={() => handleClick(5)} value={squares[5]} />
      </div>
      <div className="board-row">
        <Square squareClicked={() => handleClick(6)} value={squares[6]} />
        <Square squareClicked={() => handleClick(7)} value={squares[7]} />
        <Square squareClicked={() => handleClick(8)} value={squares[8]} />
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[b] === squares[a] && squares[c] === squares[a]) {
      return squares[a];
    }
  }
  return null;
}
