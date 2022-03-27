import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { computerWins, computerReset } from '../redux/actions/computerScoreActionCreator';
import { playerWins, playerReset } from '../redux/actions/playerScoreActionCreator';
import { youLose, youWin, draw } from '../redux/actions/resultActionCreator';
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
        //dentro va el código con el weapon ya actualizado
        console.log(weapon);
        console.log(computer);
        battle1();
    }, [weapon])

    function battle1(){
        if (weapon === ''){
            console.log('nada');
            setResult('');
        }
        if ((weapon === 'rock') && (computer === 'rock')){
            console.log('draw');
            setResult('draw');
            dispatch(draw());
        }
        if ((weapon === 'rock') && (computer === 'scissors')){
            console.log('you win');
            setResult('you win');
            dispatch(playerWins());

        }
        if ((weapon === 'rock') && (computer === 'paper')){
            console.log('you lose');
            setResult('you lose');
            dispatch(computerWins());

        }
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

    async function battle(){       
        computerSelection(); 
        if (weapon === ''){
            setResult('');
        }  
        //result draw
        if ((weapon === computer) && (weapon !== '')){
            setResult(' DRAW ');
            dispatch(draw());
            document.getElementById('result--container').style.backgroundColor = 'yellow';
        }
        //player selection
        if ((weapon === 'rock') && (computer === 'paper')){
            setResult(' YOU LOSE ');
            dispatch(youLose());
            document.getElementById('result--container').style.backgroundColor = 'red';
            dispatch(computerWins());
        }
        if ((weapon === 'rock') && (computer === 'scissors')){
            setResult(' YOU WIN ');
            dispatch(youWin());
            document.getElementById('result--container').style.backgroundColor = 'lightgreen';
            dispatch(playerWins());
        } 
        if ((weapon === 'paper') && (computer === 'scissors')){
            setResult(' YOU LOSE ');
            dispatch(youLose());
            document.getElementById('result--container').style.backgroundColor = 'red';
            dispatch(computerWins());
        }
        if ((weapon === 'paper') && (computer === 'rock')){
            setResult(' YOU WIN ');
            dispatch(youWin());
            document.getElementById('result--container').style.backgroundColor = 'lightgreen';
            dispatch(playerWins());
        } 
        if ((weapon === 'scissors') && (computer === 'rock')){
            setResult(' YOU LOSE ');
            dispatch(youLose());
            document.getElementById('result--container').style.backgroundColor = 'red';
            dispatch(computerWins());
        }
        if ((weapon === 'scissors') && (computer === 'paper')){
            setResult(' YOU WIN ');
            dispatch(youWin());
            document.getElementById('result--container').style.backgroundColor = 'lightgreen';
            dispatch(playerWins());
        } 
        //max-score
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
        setEnemyImages();
        setWeapon('rock');
        document.getElementById('rock--choose').style.border = 'solid 10px lightgreen';
        document.getElementById('paper--choose').style.border = 'solid 1px black';        
        document.getElementById('scissors--choose').style.border = 'solid 1px black';              
        battle();
        //battle1();
    }
    function chosenPaper(){
        setWeapon('paper');
        document.getElementById('paper--choose').style.border = 'solid 10px lightgreen';
        document.getElementById('rock--choose').style.border = 'solid 1px black';        
        document.getElementById('scissors--choose').style.border = 'solid 1px black'; 
        battle();
    }
    function chosenScissors(){
        setWeapon('scissors');
        document.getElementById('scissors--choose').style.border = 'solid 10px lightgreen';
        document.getElementById('paper--choose').style.border = 'solid 1px black';        
        document.getElementById('rock--choose').style.border = 'solid 1px black'; 
        battle();
    }

    function setEnemyImages(){   
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
    }

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
            <div className='prueba' id='prueba'></div>
            <Result />
        </div>
    );
}

export default Arena;