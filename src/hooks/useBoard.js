import { useDispatch, useSelector } from "react-redux";
import {
  resetBoardAction,
  setMatchedAction,
} from "../redux/actions/actionCreators";

const useBoard = () => {
  const boardList = useSelector((store) => store.boardList);
  const dispatch = useDispatch();

  const setMatchedCell = (cell) => {
    dispatch(setMatchedAction(cell));
  };

  const resetBoard = () => {
    dispatch(resetBoardAction());
  };

  return {
    boardList,
    setMatchedCell,
    resetBoard,
  };
};

export default useBoard;
