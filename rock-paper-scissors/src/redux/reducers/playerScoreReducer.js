import scoreActionTypes from "../actions/playerScoreActionTypes";

function playerScoreReducer(player = 0, action) {
  switch (action.type) {
    case scoreActionTypes.PLAYER_WINS:
      return player + 1;
    default:
      return player;
  }
}

export default playerScoreReducer;
