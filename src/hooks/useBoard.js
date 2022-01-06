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

  const loadBoard = (boardTheme) => {
    if (boardTheme === "icons") {
      dispatch(loadBoardAction(iconsList));
    } else {
      dispatch(loadBoardAction(numbersList));
    }
  };

  const resetBoard = () => {
    dispatch(resetBoardAction());
  };

  return {
    boardList,
    setMatchedCell,
    loadBoard,
    resetBoard,
  };
};

export default useBoard;
