import React from 'react';
import logo from '../images/logo.png';
import Score from './Score'
import { useSelector } from "react-redux";

const Header = () => {
    const result = useSelector((state) => state.result);
    return (
        <div className='header'>
                <div className="logo--container">
                    <div>
                        <img className='logo' src={logo} alt='logo'/>
                    </div>
                    <span className='subtitle' data-testid='subtitle'>ROCK PAPER SCISSORS</span>
                </div>
                <div className='result' id='result' data-testid='result'>
                    <div className='result--container' data-testid='resultContainer'>
                        {result}
                    </div>
                </div>
            <div className='score--container' data-testid='scoreContainer'>
                <Score />
            </div>
        </div>
    );
};

export default Header;