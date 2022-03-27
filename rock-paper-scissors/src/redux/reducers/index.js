import { combineReducers } from "redux";
import computerScoreReducer from "./computerScoreReducer";
import playerScoreReducer from "./playerScoreReducer";

const rootReducer = combineReducers({
  computerScore: computerScoreReducer,
  playerScore: playerScoreReducer,
});

export default rootReducer;
