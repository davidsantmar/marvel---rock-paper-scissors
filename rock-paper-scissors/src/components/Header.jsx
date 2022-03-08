import React from 'react';
import logo from '../images/Logo.png';

const Header = () => {
    return (
        <div className='header'>
                <img className='Logo' src={logo} alt='Logo'/>
            <div className='score'>
                Score
            </div>
        </div>
    );
};

export default Header;