import PropTypes, { objectOf } from "prop-types";
import Cell from "../Cell/Cell";
import "./Board.scss";

function Board({ boardList, onPair }) {
  return (
    <ul className="board">
      {boardList.map((cell) => (
        <Cell cell={cell} key={cell.id} actionOnClick={onPair} />
      ))}
    </ul>
  );
}

Board.propTypes = {
  boardList: PropTypes.arrayOf(objectOf).isRequired,
  onPair: PropTypes.func.isRequired,
};

export default Board;
