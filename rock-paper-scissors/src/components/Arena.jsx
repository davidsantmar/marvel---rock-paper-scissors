import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { computerWins, computerReset } from '../redux/actions/computerScoreActionCreator';
import { playerWins, playerReset } from '../redux/actions/playerScoreActionCreator';
import { youWin, youLose, draw, computerWon, playerWon } from '../redux/actions/resultActionCreator';

const Arena = () => {
    const enemyImages = ['./components/ironman.png', './components/the-thing.jpeg', './components/wolverine.jpg'];
    const [weapon, setWeapon] = useState('');
    const [result, setResult] = useState('');
    const [computer, setComputer] = useState('');
    const computerScore = useSelector((state) => state.computerScore);
    const playerScore = useSelector((state) => state.playerScore);
    const dispatch = useDispatch();
    useEffect(() => {
        battle();
    }, [weapon]);

    function battle(){
        if ((weapon === 'rock') && (computer === 'rock')){
            setResult(' DRAW ');
            document.getElementById('result--container').style.backgroundColor = 'yellow';
            dispatch(draw());
        }
        if ((weapon === 'rock') && (computer === 'scissors')){
            setResult(' YOU WIN ');
            dispatch(playerWins());
            document.getElementById('result--container').style.backgroundColor = 'lightgreen';
            dispatch(youWin());
        }
        if ((weapon === 'rock') && (computer === 'paper')){
            setResult(' YOU LOSE ');
            dispatch(computerWins());
            document.getElementById('result--container').style.backgroundColor = 'red';
            dispatch(youLose());
        }
        if ((weapon === 'paper') && (computer === 'paper')){
            setResult(' DRAW ');
            document.getElementById('result--container').style.backgroundColor = 'yellow';
            dispatch(draw());
        }
        if ((weapon === 'paper') && (computer === 'scissors')){
            setResult(' YOU LOSE ');
            document.getElementById('result--container').style.backgroundColor = 'red';
            dispatch(computerWins());
            dispatch(youLose());
        }
        if ((weapon === 'paper') && (computer === 'rock')){
            setResult(' YOU WIN ');
            document.getElementById('result--container').style.backgroundColor = 'lightgreen';
            dispatch(playerWins());
            dispatch(youWin());
        }
        if ((weapon === 'scissors') && (computer === 'scissors')){
            setResult(' DRAW ');
            document.getElementById('result--container').style.backgroundColor = 'yellow';
            dispatch(draw());
        }
        if ((weapon === 'scissors') && (computer === 'rock')){
            setResult(' YOU LOSE ');
            document.getElementById('result--container').style.backgroundColor = 'red';
            dispatch(computerWins());
            dispatch(youLose());
        }
        if ((weapon === 'scissors') && (computer === 'paper')){
            setResult(' YOU WIN ');
            dispatch(playerWins());
            dispatch(youWin());
        }  
        clearWeapon();
        maxScore();
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
            setResult('YOU HAVE WON THE BATTLE');
            document.getElementById('result--container').style.backgroundColor = 'lightgreen';
            dispatch(playerWon());
            resetScore();
        }
        if (computerScore === 5){
            setResult('COMPUTER HAS WON THE BATTLE');
            document.getElementById('result--container').style.backgroundColor = 'red';
            dispatch(computerWon());
            resetScore();
        }
    }

    //setInterval(document.getElementById('computer__choose').innerHTML += ("Hello", 1000));
    function chosenRock(){
        //setEnemyImages();
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

    /*function setEnemyImages(){   
    let container = document.getElementById('prueba');
    let i = 0;
    setInterval(function() {
    let newImg = 'url("' + enemyImages[i] + '")'
    //  console.log(newImg);
    container.style.background = newImg;
    i = i + 1;
    if (i === enemyImages.length) {
        i = 0;
    }
    }, 1000);
    }*/

    return (
        <>
        <div className='result--container'>
            <div className='result__subtitle' id='result--container'>
            </div>
        </div>
        <div className='arena--vertical'>
            <div className='player--container--vertical'>
                <span className='title__weapon'>ROCK</span>
                <button className='rock--vertical' id='rock--choose' onClick={chosenRock}></button>
                <span className='title__weapon'>PAPER</span>
                <button className='paper--vertical' id='paper--choose' onClick={chosenPaper}></button>
                <span className='title__weapon'>SCISSORS</span>
                <button className='scissors--vertical' id='scissors--choose' onClick={chosenScissors}></button>
            </div>
            <div className='computer--container--vertical' id='computer--container'>
                <span className='title__computer' id='title__computer'></span>
                <div className='computer__choose__vertical' id='computer__choose__vertical'></div>
            </div>
        </div>
        </>
    );
}

export default Arena;