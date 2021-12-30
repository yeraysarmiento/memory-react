import { combineReducers } from "redux";
import boardReducer from "./boardReducer";
import selectedReducer from "./selectedReducer";

const rootReducer = combineReducers({
  selectedCells: selectedReducer,
  boardList: boardReducer,
});

export default rootReducer;
