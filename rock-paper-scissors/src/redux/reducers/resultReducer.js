import resultActionTypes from "../actions/resultActionTypes";
import youWinSound from '../sounds/you-win.mp3';
import youLoseSound from '../sounds/you-lose.mp3';
import drawSound from '../sounds/draw.mp3';
import youWinPerfectSound from '../sounds/you-win-perfect.mp3';
import loseSound from '../sounds/lose.mp3';

function resultReducer(result = '', action) {
  switch (action.type) {
    case resultActionTypes.YOU_WIN:
      document.getElementById('result').style.backgroundColor = 'lightgreen';
      const youWin = new Audio(youWinSound);
      youWin.play(); 
      return result = 'YOU WIN';
    case resultActionTypes.YOU_LOSE:
      document.getElementById('result').style.backgroundColor = '#ED1D24';
      const youLose = new Audio(youLoseSound);
      youLose.play(); 
      return result = 'YOU LOSE';
    case resultActionTypes.DRAW:
      document.getElementById('result').style.backgroundColor = 'orange';
      const draw = new Audio(drawSound);
      draw.play();
      return result = 'DRAW';
    case resultActionTypes.COMPUTER_WON:
      document.getElementById('result').style.backgroundColor = '#ED1D24';
      const lose = new Audio(loseSound);
      lose.play();
      return result = 'THE ENEMY HAS WON THE BATTLE';
    case resultActionTypes.PLAYER_WON:
      document.getElementById('result').style.backgroundColor = 'lightgreen';
      const youWinPerfect = new Audio(youWinPerfectSound);
      youWinPerfect.play();
      return result = 'YOU HAVE WON THE BATTLE';
    default:
      return result;
  }
}

export default resultReducer;
