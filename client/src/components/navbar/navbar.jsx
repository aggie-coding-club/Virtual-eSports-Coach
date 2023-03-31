import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.png';

const Menu = () => (
    <>
        <p><a href="home">Home</a></p>
        <p><a href="aboutus">About Us</a></p>
        <p><a href="register">Register</a></p>
    </>
)

const Navbar = () => {
    /* Const is needed to open/close the navbar on smaller devices */
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="navbar">

            {/* Navbar subsections and linking */}
            <div className="navbar-links">

                {/* Logo (left on the navbar) */}
                <div className="vec__navbar-links-logo">
                    <img src={logo} alt="logo" />
                </div>

                {/* Menu (this object is created earlier)*/}
                <div className="navbar-links_container">
                    <Menu />
                </div>
            </div>

            {/* Sign in and sign up buttons */}
            <div className="navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>

            {/* Menu for smaller devices */}
            <div className="navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="navbar-menu_container scale-up-center">
                        <div className="navbar-menu_container-links">
                            <Menu />
                        </div>
                        <div className="navbar-menu_container-links-sign">
                            <p>Sign in</p>
                            <button type="button">Sign up</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar