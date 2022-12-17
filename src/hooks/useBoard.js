import { useDispatch, useSelector } from "react-redux";
import {
  deleteBoardAction,
  loadBoardAction,
  resetBoardAction,
  setMatchedAction,
} from "../redux/actions/actionCreators";
import { iconsList, numbersList } from "../assets/boardThemes";

const useBoard = () => {
  const boardList = useSelector((store) => store.boardList);
  const dispatch = useDispatch();

  const setMatchedCell = (cell, player) => {
    dispatch(setMatchedAction(cell, player));
  };

  const loadBoard = (boardTheme, gridSize) => {
    if (boardTheme === "icons") {
      dispatch(loadBoardAction(iconsList.slice(0, gridSize)));
    } else {
      dispatch(loadBoardAction(numbersList.slice(0, gridSize)));
    }
  };

  const resetBoard = (board) => {
    dispatch(resetBoardAction(board));
  };

  const deleteBoard = () => {
    dispatch(deleteBoardAction());
  };

  return {
    boardList,
    setMatchedCell,
    loadBoard,
    resetBoard,
    deleteBoard,
  };
};

export default useBoard;
