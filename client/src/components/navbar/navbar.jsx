import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './style.css'

const Menu = () => (
    <>
        <p><a href="/">Home</a></p>
        <p><a href="aboutus">About Us</a></p>
        <p><a href="dashboard">Dashboard</a></p>
    </>
)

const Navbar = () => {
    /* Const is needed to open/close the navbar on smaller devices */
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="navbar gradient-bg">

            {/* Navbar subsections and linking */}
            <div className="navbar-links">

                {/* Logo (left on the navbar) */}
                <div className="navbar-links-logo">
                    <a href = "/">
                    <img src={logo} alt="logo" />
                    </a>
                </div>

                {/* Menu (this object is created earlier)*/}
                <div className="navbar-links_container">
                    <Menu />
                </div>
            </div>

            {/* Sign in and sign up buttons */}
            <div className="navbar-sign">
                <p>Sign in</p>
                <a href='register'><button type="button">Sign up</button></a>
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