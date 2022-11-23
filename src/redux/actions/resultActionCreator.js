import resultActionTypes from "./resultActionTypes";

export function youWin() {
  return {
    type: resultActionTypes.YOU_WIN,
  };
}

export function youLose() {
  return {
    type: resultActionTypes.YOU_LOSE,
  };
}

export function draw() {
    return {
      type: resultActionTypes.DRAW,
    };
}

export function computerWon() {
  return {
    type: resultActionTypes.COMPUTER_WON,
  };
}

export function playerWon() {
  return {
    type: resultActionTypes.PLAYER_WON,
  };
}