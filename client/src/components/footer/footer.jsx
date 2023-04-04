import React, { useState } from 'react';
import './style.css';
import logo from '../../assets/logo.png';

const Menu = () => (
    <>
        <h4>Menu</h4>
        <p><a href="/">Home</a></p>
    </>
)

const Info = () => (
    <>
        <h4>Information</h4>
        <p><a href="/">Privacy Policy</a></p>
        <p><a href="aboutus">Terms of Service</a></p>
    </>
)

const Company = () => (
    <>
        <h4>Company</h4>
        <p><a href="aboutus">Contact Us</a></p>
    </>
)

const Footer = () => {

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
                        <Menu />
                    </div>

                    <div className="footer-links_div">
                        <Info />
                    </div>

                    <div className="footer-links_div">
                        <Company />
                    </div>

                </div>

                <div className="footer-copyright">
                    <p>© 2023 Virtual eSports Coach. All rights reserved.</p>
                </div>

            </div>
        </div>
    );
};

export default Footer;