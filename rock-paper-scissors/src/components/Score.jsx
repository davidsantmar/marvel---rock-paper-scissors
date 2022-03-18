import { useSelector, useDispatch } from "react-redux";

import { computerWins } from "../redux/actions/computerScoreActionCreator";

function Score() {
  const score = useSelector((state) => state.score);
  const dispatch = useDispatch();

  function handleComputerWins() {
    dispatch(computerWins());
  }

  

  return (
    <div>
      <h1>Incrementor</h1>
      <button
        type="button"
        className="btn btn-primary m-1"
        onClick={handleComputerWins}
      >
        +
      </button>
      <button
        type="button"
        className="btn btn-primary m-1"
        onClick={handleComputerWins}
      >
        -
      </button>
    </div>
  );
}

export default Score;
