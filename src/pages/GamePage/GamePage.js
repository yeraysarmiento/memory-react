import Board from "../../components/Board/Board";
import Player from "../../components/Player/Player";
import useBoard from "../../hooks/useBoard";
import useSelected from "../../hooks/useSelected";
import usePlayers from "../../hooks/usePlayers";
import { useEffect } from "react";

function GamePage() {
  const { boardList, setMatchedCell, resetBoard } = useBoard();
  const { selectedCells, addSelectedCell, removeSelectedCell } = useSelected();
  const { players, setTurn, addPoints, resetPoints } = usePlayers();

  const resetGame = () => {
    resetBoard();
    resetPoints();
    setTurn(players[0]);
  };

  const setPair = (cell) => {
    if (!cell.isMatched) {
      if (!selectedCells.includes(cell)) {
        if (selectedCells.length < 2) {
          addSelectedCell(cell);
        }
      }
    }
  };

  const checkPair = (cells) => {
    const cellOne = cells[0];
    const cellTwo = cells[1];

    if (cellOne.content !== cellTwo.content) {
      removeSelectedCell(cellOne);
      removeSelectedCell(cellTwo);
      if (players[0].isPlaying) {
        setTurn(players[1]);
      } else {
        setTurn(players[0]);
      }
    } else {
      setMatchedCell(cellOne);
      setMatchedCell(cellTwo);
      removeSelectedCell(cellOne);
      removeSelectedCell(cellTwo);
      if (players[0].isPlaying) {
        addPoints(players[0]);
      } else {
        addPoints(players[1]);
      }
    }
  };

  useEffect(() => {
    if (selectedCells.length === 2) {
      setTimeout(() => {
        checkPair(selectedCells);
      }, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCells]);

  return (
    <>
      <header>
        <h1 className="title">memory</h1>
        <ul className="menu">
          <li className="menu__element menu__element--restart">
            <button onClick={resetGame}>Restart</button>
          </li>
          <li className="menu__element menu__element--new-game">New Game</li>
        </ul>
      </header>
      <main>
        <div className="board-container">
          <Board boardList={boardList} onPair={setPair} />
        </div>
      </main>
      <footer className="players">
        {players.map((player) => (
          <Player player={player} key={player.name} />
        ))}
      </footer>
    </>
  );
}

export default GamePage;
