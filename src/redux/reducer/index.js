import { combineReducers } from "redux";
import boardReducer from "./boardReducer";
import playersReducer from "./playersReducer";
import selectedReducer from "./selectedReducer";

const rootReducer = combineReducers({
  selectedCells: selectedReducer,
  boardList: boardReducer,
  players: playersReducer,
});

export default rootReducer;
