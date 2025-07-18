import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { computerWins, computerReset } from '../redux/actions/computerScoreActionCreator';
import { playerWins, playerReset } from '../redux/actions/playerScoreActionCreator';
import { youWin, youLose, draw, computerWon, playerWon } from '../redux/actions/resultActionCreator';
import avengersSound from '../redux/sounds/avengers.mp3';
import punch from '../redux/sounds/select.mp3';

const Arena = () => {
    const [avengersPlaying, setAvengersPlaying] = useState(0);
    const [soundLoop, setSoundLoop] = useState(0);
    const computerScore = useSelector((state) => state.computerScore);
    const playerScore = useSelector((state) => state.playerScore);
    const dispatch = useDispatch();
    useEffect(() => {
       maxScore();       
       bso();  
    }, [playerScore, computerScore])
    const battle = (playerWeapon) => {
        const enemy = computerSelection();
        if ((playerWeapon === 'rock') && (enemy === 'rock')){
            document.getElementById('punch-rock').play();
            chosenRock();
            dispatch(draw());
        }
        if ((playerWeapon === 'rock') && (enemy === 'scissors')){
            document.getElementById('punch-rock').play();
            dispatch(playerWins());
            chosenRock();
            dispatch(youWin());
        }
        if ((playerWeapon === 'rock') && (enemy === 'paper')){
            document.getElementById('punch-rock').play();
            chosenRock();
            dispatch(computerWins());
            dispatch(youLose());
        }
        if ((playerWeapon === 'paper') && (enemy === 'paper')){
            document.getElementById('paper-rock').play();
            chosenPaper();
            dispatch(draw());
        }
        if ((playerWeapon === 'paper') && (enemy === 'scissors')){
            document.getElementById('paper-rock').play();
            chosenPaper();
            dispatch(computerWins());
            dispatch(youLose());
        }
        if ((playerWeapon === 'paper') && (enemy === 'rock')){
            document.getElementById('paper-rock').play();
            chosenPaper();
            dispatch(playerWins());
            dispatch(youWin());
        }
        if ((playerWeapon === 'scissors') && (enemy === 'scissors')){
            document.getElementById('scissors-rock').play();
            chosenScissors();
            dispatch(draw());
        }
        if ((playerWeapon === 'scissors') && (enemy === 'rock')){
            document.getElementById('scissors-rock').play();
            chosenScissors();
            dispatch(computerWins());
            dispatch(youLose());
        }
        if ((playerWeapon === 'scissors') && (enemy === 'paper')){
            document.getElementById('scissors-rock').play();
            chosenScissors();
            dispatch(playerWins());
            dispatch(youWin());
       }  
    }

    function resetScore(){
        dispatch(playerReset());
        dispatch(computerReset());
    }
    function computerSelection(){
        let randomNumber = Math.floor(Math.random()*3);
        if (randomNumber === 0) {
            document.getElementById('computer__choose__vertical').className = 'rock--computer--vertical';
            document.getElementById('title__computer').innerHTML = 'ROCK';
            return ('rock');
        }
        if (randomNumber === 1) {
            document.getElementById('computer__choose__vertical').className = 'paper--computer--vertical';
            document.getElementById('title__computer').innerHTML = 'PAPER';
            return ('paper');
        }
        if (randomNumber === 2) {
            document.getElementById('computer__choose__vertical').className = 'scissors--computer--vertical';
            document.getElementById('title__computer').innerHTML = 'SCISSORS';
            return ('scissors');
        }
    }
    function maxScore(){ 
        if (playerScore === 5){
            dispatch(playerWon());
            resetScore();
        }
        if (computerScore === 5){
            dispatch(computerWon());
            resetScore();
        }
    }
    function chosenRock(){
        document.getElementById('rock--choose').style.border = 'solid 10px lightgreen';
        document.getElementById('paper--choose').style.border = 'none';        
        document.getElementById('scissors--choose').style.border = 'none';              
    }
    function chosenPaper(){
        document.getElementById('paper--choose').style.border = 'solid 10px lightgreen';
        document.getElementById('rock--choose').style.border = 'none';        
        document.getElementById('scissors--choose').style.border = 'none';
    }
    function chosenScissors(){
        document.getElementById('scissors--choose').style.border = 'solid 10px lightgreen';
        document.getElementById('paper--choose').style.border = 'none';        
        document.getElementById('rock--choose').style.border = 'none';
    }
    function bso(){
        if (playerScore === 1){
            setAvengersPlaying(1);
            if(avengersPlaying === 0 && soundLoop === 0){
                document.getElementById('beep').muted = false;
                document.getElementById('beep').play();
                setSoundLoop(1);
            }
        }else{
            setAvengersPlaying(0);
        }
    }
 
    return (
        <>
        <audio id="beep" src={avengersSound} autoPlay muted />
        <div className='arena--vertical'>
            <div className='player--container--vertical' data-testid='playerContainer'>
                <div className='rock--vertical' id='rock--choose' onClick={()=>battle('rock')}>
                    <audio id="punch-rock"src={punch}></audio>
                    <span className='title__weapon'>ROCK</span>
                </div>
                <div className='paper--vertical' id='paper--choose' onClick={()=>battle('paper')}>
                    <audio id="paper-rock"src={punch}></audio>
                    <span className='title__weapon'>PAPER</span>
                </div>
                <div className='scissors--vertical' id='scissors--choose' onClick={()=>battle('scissors')}>
                    <audio id="scissors-rock"src={punch}></audio>
                    <span className='title__weapon'>SCISSORS</span>
                </div>
            </div>
            <div className='computer--container--vertical' id='computer--container' data-testid='computerContainer'>
                <div className='computer__choose__vertical' id='computer__choose__vertical'>
                    <span className='title__computer' id='title__computer' data-testid='computerSubtitle'></span>
                </div>
            </div>
        </div>
        </>
    );
}

export default Arena;