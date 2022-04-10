import scoreActionTypes from "../actions/playerScoreActionTypes";

function playerScoreReducer(player = 0, action) {
  switch (action.type) {
    case scoreActionTypes.PLAYER_WINS:
      return player + 1;
    case scoreActionTypes.PLAYER_RESET:
      return player = 0;
    default:
      return player;
  }
}

export default playerScoreReducer;
