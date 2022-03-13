import React, { useState } from 'react';

const Arena = () => {
    //const enemyImages = ['./images/ironman.png', './images/the-thing.jpeg', './images/wolverine.jpg'];
    const [weapon, setWeapon] = useState('');
    const [result, setResult] = useState('');
    const [computer, setComputer] = useState('');

    function setEnemy(){
        /*let randomNumber = Math.floor(Math.random()*3);
        if (computer ===''){
            if (randomNumber === 0) {setComputer(result);}
            if (randomNumber === 1) {setComputer(result);}
            if (randomNumber === 2) {setComputer(result);}
        }
        console.log(computer);*/
        //setInterval(document.getElementById('computer__choose').innerHTML += ("Hello", 1000));
    }
    function chosenRock(){
        setEnemyImages();
        setEnemy();
        setWeapon('rock');
        if (weapon === ''){
            document.getElementById('rock--choose').style.border = 'solid 10px lightgreen';
        }
        battle();
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
        setEnemy();
    }
    function show(){
        console.log(computer)
        console.log(weapon)
    }
    function battle(){
        if (weapon === computer){
            setResult('DRAW');
        }
        if ((weapon === 'rock') && (computer === 'paper')){
            setResult('YOU LOSE');
            document.getElementById('result--container').style.color = 'red';
        }
        if ((weapon === 'rock') && (computer === 'scissors')){
            setResult('YOU WIN');
            document.getElementById('result--container').style.color = 'lightgreen';
        }
        show();
    }

    function setEnemyImages(){
        document.getElementById('computer__choose')
        .style.background = "url('./images/wolverine.jpg')";
    }


    return (
        <div className='arena'>
            <div className='player--container'>
                <button className='rock--choose' id='rock--choose' onClick={chosenRock}></button>
                <div className='paper--choose' id='paper--choose' onClick={chosenPaper}></div>
                <div className='scissors--choose' id='scissors--choose' onClick={chosenScissors}></div>
            </div>
            <div className='result--container'>
                <div className='result__subtitle' id='result--container'>
                    {result}
                </div>
            </div>
            <div className='computer--container'>
                <div className='computer__choose' id='computer__choose'>
                    
                </div>
            </div>
        </div>
    );
}

export default Arena;