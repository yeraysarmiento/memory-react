import actionTypes from "./actionTypes";

export const addSelectedAction = (cell) => ({
  type: actionTypes.addSelected,
  cell,
});

export const removeSelectedAction = (cell) => ({
  type: actionTypes.removeSelected,
  cell,
});

export const setMatchedAction = (cell) => ({
  type: actionTypes.setMatched,
  cell,
});
