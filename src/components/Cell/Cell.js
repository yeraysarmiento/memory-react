import PropTypes from "prop-types";
import usePlayers from "../../hooks/usePlayers";
import "./Cell.scss";

function Cell({ cell, actionOnClick, boardLength }) {
  const { players } = usePlayers();

  return (
    <li
      className={
        cell.isHidden
          ? "cell"
          : cell.isMatched
          ? cell.matchedBy.name === players[0]?.name
            ? "cell cell--matched cell--player1"
            : "cell cell--matched cell--player2"
          : "cell cell--showing"
      }
    >
      <div className="content border">
        <button
          onClick={() => actionOnClick(cell)}
          className="cell__back"
        ></button>
        <div
          className={boardLength === 16 ? "cell__front" : "cell__front s6x6"}
        >
          {cell.content}
        </div>
      </div>
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
