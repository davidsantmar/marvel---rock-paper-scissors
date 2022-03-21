import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { computerWins, computerReset } from '../redux/actions/computerScoreActionCreator';
import { playerWins, playerReset } from '../redux/actions/playerScoreActionCreator';
import { youLose, youWin, draw } from '../redux/actions/resultActionCreator';

//funciona pero analiza el resultado mal
//te da el resultado de la jugada anterior

const Arena = () => {
    //const enemyImages = ['./images/ironman.png', './images/the-thing.jpeg', './images/wolverine.jpg'];
    const [weapon, setWeapon] = useState('');
    const [result, setResult] = useState();
    const [computer, setComputer] = useState();
    const computerScore = useSelector((state) => state.computerScore);
    const playerScore = useSelector((state) => state.playerScore);
    const resultat = useSelector((state) => state.resultat);
    const dispatch = useDispatch();

    useEffect(() =>{
        const newWeapon = weapon;
        setResult(newWeapon);
    }, [])
    useEffect(() =>{
        const newComputer= computer;
        setResult(newComputer);
    }, [])
   
    function resetScore(){
        dispatch(playerReset());
        dispatch(computerReset());
    }

    function battle(){
        //computer selection
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
        //draw
        if (weapon === computer){
            setResult(' DRAW ');
            dispatch(draw());
            document.getElementById('result--container').style.backgroundColor = 'yellow';
        }
        //rock
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
        //paper
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
        //scissors
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
        setWeapon('rock');
        document.getElementById('rock--choose').style.border = 'solid 10px lightgreen';
        document.getElementById('paper--choose').style.border = 'solid 1px black';        
        document.getElementById('scissors--choose').style.border = 'solid 1px black';              
        battle();
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

    /*function setEnemyImages(){
        document.getElementById('computer__choose')
        .style.background = "url('./images/wolverine.jpg')";
    }*/

    return (
        <div className='arena'>
            <div className='player--container'>
                <button className='rock' id='rock--choose' onClick={chosenRock}></button>
                <div className='paper' id='paper--choose' onClick={chosenPaper}></div>
                <div className='scissors' id='scissors--choose' onClick={chosenScissors}></div>
            </div>
            <div className='result--container'>
                <div className='result__subtitle' id='result--container'>
                    {result}
                </div>
            </div>
            <div className='computer--container' id='computer--container'>
                <div className='computer__choose' id='computer__choose'></div>
            </div>
        </div>
    );
}

export default Arena;