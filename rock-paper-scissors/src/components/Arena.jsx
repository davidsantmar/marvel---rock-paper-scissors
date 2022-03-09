import React from 'react';

const Arena = () => {
    let computer = '';
    let randomNumber = Math.floor(Math.random()*3);
    if (randomNumber === 0) {computer = 'rock';}
    if (randomNumber === 1) {computer = 'paper';}
    if (randomNumber === 2) {computer = 'scissors';}

    
    return (
        <div className='arena'>
            <div className='player--container'></div>
            <div className='result--container'></div>
            <div className='computer--container'>{computer}</div>
        </div>
    );
};

export default Arena;