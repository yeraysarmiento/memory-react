import PropTypes from "prop-types";
import useBoard from "../../hooks/useBoard";
import "./Cell.scss";

function Cell({ cell, actionOnClick }) {
  const { boardList } = useBoard();

  return cell.isHidden ? (
    <li className="cell">
      <button onClick={() => actionOnClick(cell)} type="button">
        <span className="cell__icon">{cell.content}</span>
      </button>
    </li>
  ) : (
    <li
      className={cell.isMatched ? "cell cell--matched" : "cell cell--showing"}
    >
      <button onClick={() => actionOnClick(cell)} type="button">
        <span
          className={boardList.length === 16 ? "cell__icon" : "cell__icon s6x6"}
        >
          {cell.content}
        </span>
      </button>
    </li>
  );
}

Cell.propTypes = {
  cell: PropTypes.shape({
    content: PropTypes.string.isRequired,
    isHidden: PropTypes.bool,
    isMatched: PropTypes.bool,
  }).isRequired,
  actionOnClick: PropTypes.func.isRequired,
};

export default Cell;
