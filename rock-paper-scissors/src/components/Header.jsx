import React from 'react';
import logo from '../images/Logo.png';

const Header = () => {
    return (
        <div className='header'>
            <div className="logo--container">
                <img className='Logo' src={logo} alt='Logo'/>
                <div>ROCK PAPER SCISSORS</div>
            </div>
            <div className='score'>
                SCORE
            </div>
        </div>
    );
};

export default Header;