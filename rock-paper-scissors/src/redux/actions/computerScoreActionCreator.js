import computerScoreActionTypes from "./computerScoreActionTypes";

export function computerWins() {
  return {
    type: computerScoreActionTypes.COMPUTER_WINS,
  };
}

