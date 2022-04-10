import { useSelector } from "react-redux";

function Score() {
  const computerScore = useSelector((state) => state.computerScore);
  const playerScore = useSelector((state) => state.playerScore);
  
  return (
      <>
      <div className='score'>
        <span className='score--title'>SCORE</span>
        <div className='player--score' data-testid='playerScore'>
          HERO: {playerScore}
        </div>
        <div className='computer--score' data-testid='computerScore'>
          VILLAIN: {computerScore}
        </div>
      </div>
      </>
  );
}

export default Score;
