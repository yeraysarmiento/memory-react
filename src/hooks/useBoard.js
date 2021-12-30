import { useDispatch, useSelector } from "react-redux";
import { setMatchedAction } from "../redux/actions/actionCreators";

const useBoard = () => {
  const boardList = useSelector((store) => store.boardList);
  const dispatch = useDispatch();

  const setMatchedCell = (cell) => {
    dispatch(setMatchedAction(cell));
  };

  return {
    boardList,
    setMatchedCell,
  };
};

export default useBoard;
