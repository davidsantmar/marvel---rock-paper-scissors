import scoreActionTypes from "./pokeActionTypes";

export function computerWins() {
  return {
    type: scoreActionTypes.COMPUTER_WINS,
  };
}

export function playerWins() {
  return {
    type: scoreActionTypes.PLAYER_WINS,
  };
}
