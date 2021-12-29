import PropTypes, { string } from "prop-types";
import Cell from "../Cell/Cell";

function Board({ boardList }) {
  return (
    <ul>
      {boardList.map((cell) => (
        <Cell content={cell} key={cell} />
      ))}
    </ul>
  );
}

Board.propTypes = {
  boardList: PropTypes.arrayOf(string).isRequired,
};

export default Board;
