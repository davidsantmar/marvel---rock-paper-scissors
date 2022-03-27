import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { computerWins, computerReset } from '../redux/actions/computerScoreActionCreator';
import { playerWins, playerReset } from '../redux/actions/playerScoreActionCreator';
import Result from './Result';

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
        }
        if ((weapon === 'rock') && (computer === 'scissors')){
            setResult(' YOU WIN ');
            dispatch(playerWins());
            document.getElementById('result--container').style.backgroundColor = 'lightgreen';
        }
        if ((weapon === 'rock') && (computer === 'paper')){
            setResult(' YOU LOSE ');
            dispatch(computerWins());
            document.getElementById('result--container').style.backgroundColor = 'red';
        }
        if ((weapon === 'paper') && (computer === 'paper')){
            setResult(' DRAW ');
            document.getElementById('result--container').style.backgroundColor = 'yellow';
        }
        if ((weapon === 'paper') && (computer === 'scissors')){
            setResult(' YOU LOSE ');
            document.getElementById('result--container').style.backgroundColor = 'red';
            dispatch(computerWins());
        }
        if ((weapon === 'paper') && (computer === 'rock')){
            setResult(' YOU WIN ');
            document.getElementById('result--container').style.backgroundColor = 'lightgreen';
            dispatch(playerWins());
        }
        if ((weapon === 'scissors') && (computer === 'scissors')){
            setResult(' DRAW ');
            document.getElementById('result--container').style.backgroundColor = 'yellow';
        }
        if ((weapon === 'scissors') && (computer === 'rock')){
            setResult(' YOU LOSE ');
            document.getElementById('result--container').style.backgroundColor = 'red';
            dispatch(computerWins());
        }
        if ((weapon === 'scissors') && (computer === 'paper')){
            setResult(' YOU WIN ');
            dispatch(playerWins());
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
            document.getElementById('computer__choose').className = 'rock--computer';
        }
        if (randomNumber === 1) {
            setComputer('paper');
            document.getElementById('computer__choose').className = 'paper--computer';
        }
        if (randomNumber === 2) {
            setComputer('scissors');
            document.getElementById('computer__choose').className = 'scissors--computer';
        }
    }
    function maxScore(){
        if (playerScore === 5){
            setResult('YOU HAVE WON THE BATTLE');
            document.getElementById('result--container').style.backgroundColor = 'lightgreen';
            resetScore();
        }
        if (computerScore === 5){
            setResult('COMPUTER HAS WON THE BATTLE');
            document.getElementById('result--container').style.backgroundColor = 'red';
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
        <div className='arena'>
            <div className='player--container'>
                <button className='rock' id='rock--choose' onClick={chosenRock}></button>
                <button className='paper' id='paper--choose' onClick={chosenPaper}></button>
                <button className='scissors' id='scissors--choose' onClick={chosenScissors}></button>
            </div>
            <div className='result--container'>
                <div className='result__subtitle' id='result--container'>
                    {result}
                </div>
            </div>
            <div className='computer--container' id='computer--container'>
                <div className='computer__choose' id='computer__choose'></div>
            </div>
            <Result />
        </div>
    );
}

export default Arena;