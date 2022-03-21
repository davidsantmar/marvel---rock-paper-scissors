import { combineReducers } from "redux";
import computerScoreReducer from "./computerScoreReducer";
import playerScoreReducer from "./playerScoreReducer";
import resultReducer from './resultReducer';

const rootReducer = combineReducers({
  computerScore: computerScoreReducer,
  playerScore: playerScoreReducer,
  result: resultReducer,
});

export default rootReducer;
