import { useSelector } from "react-redux";

function Score() {
  const computerScore = useSelector((state) => state.computerScore);
  const playerScore = useSelector((state) => state.playerScore);
  
  return (
      <>
      <div className='score'>
        <div className='player--score'>
          {playerScore}
        </div>
        <div className='computer--score'>
          {computerScore}
        </div>
      </div>
      </>
  );
}

export default Score;
