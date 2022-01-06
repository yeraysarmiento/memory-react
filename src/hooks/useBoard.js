import { useDispatch, useSelector } from "react-redux";
import {
  loadBoardAction,
  resetBoardAction,
  setMatchedAction,
} from "../redux/actions/actionCreators";
import { iconsList, numbersList } from "../assets/boardThemes";

const useBoard = () => {
  const boardList = useSelector((store) => store.boardList);
  const dispatch = useDispatch();

  const setMatchedCell = (cell) => {
    dispatch(setMatchedAction(cell));
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

  return {
    boardList,
    setMatchedCell,
    loadBoard,
    resetBoard,
  };
};

export default useBoard;
