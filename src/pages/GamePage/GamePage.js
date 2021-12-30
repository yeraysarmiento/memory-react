import Board from "../../components/Board/Board";
import useBoard from "../../hooks/useBoard";
import useSelected from "../../hooks/useSelected";

function GamePage() {
  const { boardList } = useBoard();
  const { selectedCells, addSelectedCell, removeSelectedCell } = useSelected();
  const { setMatchedCell } = useBoard();

  const setPair = (cell) => {
    if (!cell.isMatched) {
      if (selectedCells.includes(cell)) {
        removeSelectedCell(cell);
      } else if (selectedCells.length < 2) {
        addSelectedCell(cell);
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
          <div className="player">
            <p className="player__name">Player 1</p>
            <p className="player__points">2</p>
            <div className="player__pointer" />
          </div>
          <div className="player">
            <p className="player__name">Player 2</p>
            <p className="player__points">2</p>
            <div className="player__pointer" />
          </div>
        </section>
      </main>
    </>
  );
}

export default GamePage;
