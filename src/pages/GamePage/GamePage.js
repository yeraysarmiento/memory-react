import Board from "../../components/Board/Board";
import Player from "../../components/Player/Player";
import useBoard from "../../hooks/useBoard";
import useSelected from "../../hooks/useSelected";
import usePlayers from "../../hooks/usePlayers";
import { useEffect } from "react";
import Menu from "../../components/Menu/Menu";
import "./GamePage.scss";

function GamePage() {
  const { boardList, setMatchedCell, resetBoard, deleteBoard } = useBoard();
  const { selectedCells, addSelectedCell, removeSelectedCell } = useSelected();
  const { players, setTurn, addPoints, resetPoints, deletePlayers } =
    usePlayers();

  const resetGame = () => {
    resetBoard(boardList);
    resetPoints();
    setTurn(players[0]);
  };

  const restartGame = () => {
    deleteBoard();
    deletePlayers();
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

      if (players.length > 1) {
        if (players[0].isPlaying) {
          setTurn(players[1]);
        } else {
          setTurn(players[0]);
        }
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
        <Menu onReset={resetGame} onRestart={restartGame} />
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
