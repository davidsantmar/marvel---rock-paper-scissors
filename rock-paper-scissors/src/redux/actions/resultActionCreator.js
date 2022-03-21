import resultActionTypes from "./resultActionTypes";

export function youLose() {
  return {
    type: resultActionTypes.YOU_LOSE,
  };
}

export function youWin() {
  return {
    type: resultActionTypes.YOU_WIN,
  };
}

export function draw() {
    return {
      type: resultActionTypes.DRAW,
    };
  }
