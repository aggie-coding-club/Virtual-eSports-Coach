import React, { useState } from 'react';
import logo from '../assets/logo.png';
const Menu = () => (
    <>
        <h4>Menu</h4>
        <p><a href="/">Home</a></p>
    </>
)

const Info = () => (
    <>
        <h4>Information</h4>
        <p><a href="privacy">Privacy Policy</a></p>
        <p><a href="tos">Terms of Service</a></p>
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
        <div className="footer pt-3">
            <div className='container'> 
                

                <div className="footer-links mt-5n row">
                    <div className="footer-links_logo col-3">
                        <img src={logo} alt="logo"></img>
                    </div>

                    <div className="footer-links_div col-3">
                        <Menu />
                    </div>

                    <div className="footer-links_div col-3">
                        <Info />
                    </div>

                    <div className="footer-links_div col-3">
                        <Company />
                    </div>

                </div>

                <div className="footer-copyright pb-3">
                    <p>© 2023 Virtual eSports Coach. All rights reserved.</p>
                </div>

            </div>
        </div>
    );
};

export default Footer;