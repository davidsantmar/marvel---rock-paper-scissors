import React from 'react';
import logo from '../images/Logo.png';

const Header = () => {
    return (
        <div className='header'>
            <div className="logo--container">
                <img className='Logo' src={logo} alt='Logo'/>
                <span className='subtitle'>ROCK PAPER SCISSORS</span>
                <div className='choose--subtitle'>CHOOSE YOUR WEAPON</div>
            </div>
            <div className='score'>
                SCORE
            </div>
        </div>
    );
};

export default Header;