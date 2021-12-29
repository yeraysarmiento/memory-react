import PropTypes from "prop-types";
import "./Cell.scss";

function Cell({ cell, actionOnClick }) {
  return cell.isHidden ? (
    <li className="cell">
      <button onClick={() => actionOnClick(cell)} type="button">
        <span>{cell.content}</span>
      </button>
    </li>
  ) : (
    <li
      className={cell.isMatched ? "cell cell--matched" : "cell cell--showing"}
    >
      <button onClick={() => actionOnClick(cell)} type="button">
        <span>{cell.content}</span>
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
