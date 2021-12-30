import Board from "../../components/Board/Board";
import Player from "../../components/Player/Player";
import useBoard from "../../hooks/useBoard";
import useSelected from "../../hooks/useSelected";

function GamePage() {
  const { boardList } = useBoard();
  const { selectedCells, addSelectedCell, removeSelectedCell } = useSelected();
  const { setMatchedCell } = useBoard();

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
    } else {
      setMatchedCell(cellOne);
      setMatchedCell(cellTwo);
      removeSelectedCell(cellOne);
      removeSelectedCell(cellTwo);
    }
  };

  if (selectedCells.length === 2) {
    setTimeout(() => {
      checkPair(selectedCells);
    }, 500);
  }

  return (
    <>
      <header>
        <h1 className="title">memory</h1>
        <ul className="menu">
          <li className="menu__element menu__element--restart">Restart</li>
          <li className="menu__element menu__element--new-game">New Game</li>
        </ul>
      </header>
      <main>
        <div className="board-container">
          <Board boardList={boardList} onPair={setPair} />
        </div>
        <section className="players">
          {players.map((player) => (
            <Player player={player} key={player.name} />
          ))}
        </section>
      </main>
    </>
  );
}

export default GamePage;
