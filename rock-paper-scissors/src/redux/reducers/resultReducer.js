import resultActionTypes from "../actions/resultActionTypes";

function resultReducer(result = '', action) {
  switch (action.type) {
    case resultActionTypes.YOU_LOSE:
      return result = 'YOU LOSE';
    case resultActionTypes.YOU_WIN:
      return result = 'YOU WIN';
    case resultActionTypes.DRAW:
      return result = 'DRAW';
    default:
      return result;
    }
}

export default resultReducer;
