import React from 'react';
import logo from '../images/logo.png';
import Score from './Score';

const Header = () => {
    return (
        <>
        <div className='header'>
            <div className="logo--container">
                <img className='logo' src={logo} alt='logo'/>
                <span className='subtitle'>ROCK PAPER SCISSORS</span>
            </div>
            <Score />
        </div>
        </>
    );
};

export default Header;