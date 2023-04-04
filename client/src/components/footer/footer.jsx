import React, { useState } from 'react';
import './style.css';
import logo from '../../assets/logo.png';

const Footer = () => {
    /* Const is needed to open/close the navbar on smaller devices */
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="footer section__padding">
            <div>
                <div className="footer-heading">
                    <h1>Footer example text</h1>
                </div>

                <div className="footer-links">
                    <div className="footer-links_logo">
                        <img src={logo} alt="logo"></img>
                    </div>

                    <div className="footer-links_div">
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Footer;