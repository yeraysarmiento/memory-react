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

export const resetBoardAction = () => ({
  type: actionTypes.resetBoard,
});

export const addPlayerAction = (player) => ({
  type: actionTypes.addPlayer,
  player,
});

export const setTurnAction = (player) => ({
  type: actionTypes.setTurn,
  player,
});

export const addPointsAction = (player) => ({
  type: actionTypes.addPoints,
  player,
});
