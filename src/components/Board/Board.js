import PropTypes, { objectOf } from "prop-types";
import Cell from "../Cell/Cell";
import "./Board.scss";

function Board({ boardList, onPair }) {
  const boardLength = boardList.length;

  return (
    <ul
      className={boardLength === 16 ? "board board--4x4" : "board board--5x5"}
    >
      {boardList.map((cell) => (
        <Cell
          cell={cell}
          key={cell.id}
          actionOnClick={onPair}
          boardLength={boardLength}
        />
      ))}
    </ul>
  );
}

Board.propTypes = {
  boardList: PropTypes.arrayOf(objectOf).isRequired,
  onPair: PropTypes.func.isRequired,
};

export default Board;
