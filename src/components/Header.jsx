import React from 'react';
import logo from '../images/logo.png';
import Score from './Score'
import Result from './Result';

const Header = () => {
    return (
        <div className='header'>
                <div className="logo--container">
                    <div>
                        <img className='logo' src={logo} alt='logo'/>
                    </div>
                    <span className='subtitle' data-testid='subtitle'>ROCK PAPER SCISSORS</span>
                </div>
                <div className='result' id='result' data-testid='result'>
                    <Result />
                </div>
            <div className='score--container' data-testid='scoreContainer'>
                <Score />
            </div>
        </div>
    );
};

export default Header;