import React, { useState } from 'react';

const Arena = () => {
    let computer = '';
    let randomNumber = Math.floor(Math.random()*3);
    const [weapon, setWeapon] = useState('');
    const [result, setResult] = useState('CHOOSE YOUR WEAPON');

    if (randomNumber === 0) {computer = 'rock';}
    if (randomNumber === 1) {computer = 'paper';}
    if (randomNumber === 2) {computer = 'scissors';}

    function chosenRock(){
        setWeapon('rock');
        //setResult('YOU WIN');
        if (weapon === ''){
            document.getElementById('rock--choose').style.border = 'solid 10px lightgreen';
        }
        //document.getElementById('result--container').innerHTML = result;
    }
    function chosenPaper(){
        setWeapon('paper');
        if (weapon === ''){
            document.getElementById('paper--choose').style.border = 'solid 10px lightgreen';
        }    
    }
    function chosenScissors(){
        setWeapon('scissors');
        if (weapon === ''){
            document.getElementById('scissors--choose').style.border = 'solid 10px lightgreen';
        }
    }

    return (
        <div className='arena'>
            <div className='player--container'>
                <div className='rock--choose' id='rock--choose' onClick={chosenRock}></div>
                <div className='paper--choose' id='paper--choose' onClick={chosenPaper}></div>
                <div className='scissors--choose' id='scissors--choose' onClick={chosenScissors}></div>
            </div>
            <div className='result--container'>
                <div className='result__subtitle' id='result--container'>
                    {result}
                </div>
            </div>
            <div className='computer--container'>
                <div className='computer__choose' id='computer__choose'></div>
            </div>
        </div>
    );
};

export default Arena;