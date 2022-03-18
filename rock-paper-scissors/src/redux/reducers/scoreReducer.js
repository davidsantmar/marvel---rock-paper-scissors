import scoreActionTypes from "../actions/countActionTypes";

function scoreReducer(computer = 0, player = 0, action) {
  switch (action.type) {
    case scoreActionTypes.COMPUTER_WINS:
      return computer + 1;
    case scoreActionTypes.PLAYER_WINS:
      return player + 1;
    default:
      return ;
  }
}

export default scoreReducer;
