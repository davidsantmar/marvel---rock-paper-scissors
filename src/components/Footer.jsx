import React from 'react';

const Footer = () => {
    return (
        <footer data-testid='footerText'>
            <a className='footer__link' href='http://dasan-dev.web.app' target='blank'>
                Performed by David Santia
                <span className='go--container'>
                    GO
                </span>!&nbsp;
                <sup>
                    &#169;
                </sup>
            </a>
        </footer>
    );
};

export default Footer;