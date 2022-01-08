import PropTypes from "prop-types";
import "./Cell.scss";

function Cell({ cell, actionOnClick, boardLength }) {
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
        <span className={boardLength === 16 ? "cell__icon" : "cell__icon s5x5"}>
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
  boardLength: PropTypes.number.isRequired,
};

export default Cell;
