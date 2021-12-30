import PropTypes, { objectOf } from "prop-types";
import useBoard from "../../hooks/useBoard";
import useSelecteds from "../../hooks/useSelecteds";
import Cell from "../Cell/Cell";
import "./Board.scss";

function Board({ boardList }) {
  const { selectedCells, addSelectedCell, removeSelectedCell } = useSelecteds();
  const { setMatchedCell } = useBoard();

  const checkPair = () => {
    const cellOne = selectedCells[0];
    const cellTwo = selectedCells[1];

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

  const setPair = (cell) => {
    if (selectedCells.includes(cell)) {
      removeSelectedCell(cell);
    } else if (selectedCells.length < 2) {
      addSelectedCell(cell);
    }
  };

  if (selectedCells.length === 2) {
    setTimeout(() => {
      checkPair();
    }, 500);
  }

  return (
    <ul className="board">
      {boardList.map((cell) => (
        <Cell cell={cell} key={cell.id} actionOnClick={setPair} />
      ))}
    </ul>
  );
}

Board.propTypes = {
  boardList: PropTypes.arrayOf(objectOf).isRequired,
};

export default Board;
