import React from 'react';
import logo from '../images/logo.png';

const Header = () => {
    return (
        <div className='header'>
            <div className="logo--container">
                <img className='logo' src={logo} alt='logo'/>
                <span className='subtitle'>ROCK PAPER SCISSORS</span>
            </div>
            <div className='score'>
                SCORE
            </div>
        </div>
    );
};

export default Header;