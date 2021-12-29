import PropTypes, { objectOf } from "prop-types";
import { useState } from "react/cjs/react.development";
import Cell from "../Cell/Cell";
import "./Board.scss";

function Board({ boardList }) {
  const [selected, setSelected] = useState([]);

  const checkPair = () => {
    if (selected[0].content !== selected[1].content) {
      console.log("hola");
      selected[0].isHidden = false;
      selected[1].isHidden = true;
      console.log(selected);
    }
  };

  const setPair = (cell) => {
    if (selected.includes(cell)) {
      cell.isHidden = true;
      setSelected(
        selected.filter((selectedCell) => selectedCell.id !== cell.id)
      );
    } else if (selected.length < 2) {
      cell.isHidden = false;
      console.log(cell);
      setSelected([...selected, cell]);
    }
  };

  if (selected.length === 2) {
    setTimeout(() => {
      checkPair();
    }, 1000);
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
