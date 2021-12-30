import { useDispatch, useSelector } from "react-redux";
import {
  addSelectedAction,
  removeSelectedAction,
} from "../redux/actions/actionCreators";

const useSelecteds = () => {
  const selectedCells = useSelector((store) => store.selectedCells);
  const dispatch = useDispatch();

  const addSelectedCell = (cell) => {
    dispatch(addSelectedAction(cell));
  };

  const removeSelectedCell = (cell) => {
    dispatch(removeSelectedAction(cell));
  };

  return {
    selectedCells,
    addSelectedCell,
    removeSelectedCell,
  };
};

export default useSelecteds;
