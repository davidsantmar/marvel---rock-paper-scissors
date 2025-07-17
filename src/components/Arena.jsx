import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { computerWins, computerReset } from '../redux/actions/computerScoreActionCreator';
import { playerWins, playerReset } from '../redux/actions/playerScoreActionCreator';
import { youWin, youLose, draw, computerWon, playerWon } from '../redux/actions/resultActionCreator';
import avengersSound from '../redux/sounds/avengers.mp3';


const Arena = () => {
    const [weapon, setWeapon] = useState('');
    const [computer, setComputer] = useState('');
    const [avengersPlaying, setAvengersPlaying] = useState(0);
    const [soundLoop, setSoundLoop] = useState(0);
    const computerScore = useSelector((state) => state.computerScore);
    const playerScore = useSelector((state) => state.playerScore);
    const dispatch = useDispatch();
    //where earlier you did:
    var audiosWeWantToUnlock = []
    audiosWeWantToUnlock.push(new Audio(avengersSound))
    //audiosWeWantToUnlock.push(new Audio('myOtherSoundEffect.wav'))
    document.body.addEventListener('touchstart', function() {
        if(audiosWeWantToUnlock) {
         for(let audio of audiosWeWantToUnlock) {
          audio.play()
          audio.pause()
          audio.currentTime = 0
         }
         audiosWeWantToUnlock = null
       }
       }, false)
       
    useEffect(() => {
        battle();
    }, [weapon]);
    function battle(){
        if ((weapon === 'rock') && (computer === 'rock')){
            dispatch(draw());
        }
        if ((weapon === 'rock') && (computer === 'scissors')){
            dispatch(playerWins());
            dispatch(youWin());
        }
        if ((weapon === 'rock') && (computer === 'paper')){
            dispatch(computerWins());
            dispatch(youLose());
        }
        if ((weapon === 'paper') && (computer === 'paper')){
            dispatch(draw());
        }
        if ((weapon === 'paper') && (computer === 'scissors')){
            dispatch(computerWins());
            dispatch(youLose());
        }
        if ((weapon === 'paper') && (computer === 'rock')){
            dispatch(playerWins());
            dispatch(youWin());
        }
        if ((weapon === 'scissors') && (computer === 'scissors')){
            dispatch(draw());
        }
        if ((weapon === 'scissors') && (computer === 'rock')){
            dispatch(computerWins());
            dispatch(youLose());
        }
        if ((weapon === 'scissors') && (computer === 'paper')){
            dispatch(playerWins());
            dispatch(youWin());
       }  
        clearWeapon();
        maxScore();
        bso();
        audiosWeWantToUnlock[0].play();
    }
    function clearWeapon(){
        setWeapon('');
    }
    function resetScore(){
        dispatch(playerReset());
        dispatch(computerReset());
    }
    function computerSelection(){
        let randomNumber = Math.floor(Math.random()*3);
        if (randomNumber === 0) {
            setComputer('rock');
            document.getElementById('computer__choose__vertical').className = 'rock--computer--vertical';
            document.getElementById('title__computer').innerHTML = 'ROCK';
        }
        if (randomNumber === 1) {
            setComputer('paper');
            document.getElementById('computer__choose__vertical').className = 'paper--computer--vertical';
            document.getElementById('title__computer').innerHTML = 'PAPER';
        }
        if (randomNumber === 2) {
            setComputer('scissors');
            document.getElementById('computer__choose__vertical').className = 'scissors--computer--vertical';
            document.getElementById('title__computer').innerHTML = 'SCISSORS';
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
        setWeapon('rock');
        document.getElementById('rock--choose').style.border = 'solid 10px lightgreen';
        document.getElementById('paper--choose').style.border = 'solid 1px black';        
        document.getElementById('scissors--choose').style.border = 'solid 1px black';              
        computerSelection();
    }
    function chosenPaper(){
        setWeapon('paper');
        document.getElementById('paper--choose').style.border = 'solid 10px lightgreen';
        document.getElementById('rock--choose').style.border = 'solid 1px black';        
        document.getElementById('scissors--choose').style.border = 'solid 1px black';
        computerSelection();
    }
    function chosenScissors(){
        setWeapon('scissors');
        document.getElementById('scissors--choose').style.border = 'solid 10px lightgreen';
        document.getElementById('paper--choose').style.border = 'solid 1px black';        
        document.getElementById('rock--choose').style.border = 'solid 1px black';
        computerSelection();
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
                <div className='rock--vertical' id='rock--choose' onClick={chosenRock}>
                    <span className='title__weapon'>ROCK</span>
                </div>
                <div className='paper--vertical' id='paper--choose' onClick={chosenPaper}>
                    <span className='title__weapon'>PAPER</span>
                </div>
                <div className='scissors--vertical' id='scissors--choose' onClick={chosenScissors}>
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