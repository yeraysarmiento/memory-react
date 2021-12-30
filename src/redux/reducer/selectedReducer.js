import actionTypes from "../actions/actionTypes";

const selectedReducer = (list = [], action = {}) => {
  let selectedCells;

  switch (action.type) {
    case actionTypes.addSelected:
      action.cell.isHidden = false;
      selectedCells = [...list, action.cell];
      break;
    case actionTypes.removeSelected:
      action.cell.isHidden = true;
      selectedCells = [...list.filter((cell) => cell.id !== action.cell.id)];
      break;
    default:
      selectedCells = list;
  }

  return selectedCells;
};

export default selectedReducer;
