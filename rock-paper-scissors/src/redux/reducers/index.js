import { combineReducers } from "redux";
import computerScoreReducer from "./computerScoreReducer";

const rootReducer = combineReducers({
  score: computerScoreReducer,
});

export default rootReducer;
