import playerScoreActionTypes from "./playerScoreActionTypes";

export function playerWins() {
  return {
    type: playerScoreActionTypes.PLAYER_WINS,
  };
}

