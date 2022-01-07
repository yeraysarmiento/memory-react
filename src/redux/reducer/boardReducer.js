import actionTypes from "../actions/actionTypes";

const boardReducer = (cells = [], action = {}) => {
  let cellsList;

  switch (action.type) {
    case actionTypes.setMatched:
      cellsList = cells.map((cell) =>
        cell.id === action.cell.id ? { ...cell, isMatched: true } : cell
      );
      break;
    case actionTypes.loadBoard:
      cellsList = action.board.sort(() => Math.random() - 0.5);
      break;
    case actionTypes.resetBoard:
      cellsList = action.board
        .map((cell) => ({ ...cell, isHidden: true, isMatched: false }))
        .sort(() => Math.random() - 0.5);
      break;
    case actionTypes.deleteBoard:
      cellsList = [];
      break;
    default:
      cellsList = cells;
  }

  return cellsList;
};

export default boardReducer;
