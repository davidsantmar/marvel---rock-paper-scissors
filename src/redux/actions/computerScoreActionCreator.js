import computerScoreActionTypes from "./computerScoreActionTypes";

export function computerWins() {
  return {
    type: computerScoreActionTypes.COMPUTER_WINS,
  };
}

export function computerReset() {
  return {
    type: computerScoreActionTypes.COMPUTER_RESET,
  };
}
