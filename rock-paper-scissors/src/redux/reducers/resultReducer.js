import resultActionTypes from "../actions/resultActionTypes";

function resultReducer(result = '', action) {
  switch (action.type) {
    case resultActionTypes.YOU_WIN:
      return result = ' YOU WIN ';
    case resultActionTypes.YOU_LOSE:
      return result = ' YOU LOSE ';
    case resultActionTypes.DRAW:
      return result = ' DRAW ';
    case resultActionTypes.COMPUTER_WON:
      return result = ' THE ENEMY HAS WON THE BATTLE ';
    case resultActionTypes.PLAYER_WON:
      return result = ' YOU HAVE WON THE BATTLE ';
    default:
      return result;
  }
}

export default resultReducer;
