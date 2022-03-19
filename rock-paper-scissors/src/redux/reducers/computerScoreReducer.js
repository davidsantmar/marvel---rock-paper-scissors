import scoreActionTypes from "../actions/computerScoreActionTypes";

function computerScoreReducer(computer = 0, action) {
  switch (action.type) {
    case scoreActionTypes.COMPUTER_WINS:
      return computer + 1;
    case scoreActionTypes.COMPUTER_RESET:
      return computer = 0;
    default:
      return computer;
  }
}

export default computerScoreReducer;
