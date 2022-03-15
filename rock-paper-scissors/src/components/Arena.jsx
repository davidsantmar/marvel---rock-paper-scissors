import React, { useEffect, useState } from 'react';

//funciona pero analiza el resultado anterior, se muestra el resultado
//anterior

const Arena = () => {
    //const enemyImages = ['./images/ironman.png', './images/the-thing.jpeg', './images/wolverine.jpg'];
    const [weapon, setWeapon] = useState();
    const [result, setResult] = useState();
    const [computer, setComputer] = useState();

    useEffect(() =>{
        const newWeapon = weapon;
        setResult(newWeapon);
    }, [])
    useEffect(() =>{
        const newComputer= computer;
        setResult(newComputer);
    }, [])
    useEffect(() =>{
        const newResult = result;
        setResult(newResult);
    }, [])

    function battle(){
        let randomNumber = Math.floor(Math.random()*3);
        if (randomNumber === 0) {setComputer('rock');}
        if (randomNumber === 1) {setComputer('paper');}
        if (randomNumber === 2) {setComputer('scissors');}

        
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
       
    }
    

    //setInterval(document.getElementById('computer__choose').innerHTML += ("Hello", 1000));
    function chosenRock(){
        //setEnemyImages();
        setWeapon('rock');
            document.getElementById('rock--choose').style.border = 'solid 10px lightgreen';
        
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
    }

    /*function setEnemyImages(){
        document.getElementById('computer__choose')
        .style.background = "url('./images/wolverine.jpg')";
    }*/
    console.log(computer);
    console.log(weapon);
    console.log(result);

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
                    {computer}
                </div>
            </div>
        </div>
    );
}

export default Arena;