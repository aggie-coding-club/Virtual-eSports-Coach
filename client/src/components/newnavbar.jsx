import React, { useState } from 'react';
import logo from '../assets/vallogo2.png';
const Menu = () => (
    <>
        <p><a href="/">Home</a></p>
        <p><a href="aboutus">About Us</a></p>
        <p><a href="dashboard">Dashboard</a></p>
    </>
)

const NewNavbar = () => {
    /* Const is needed to open/close the navbar on smaller devices */
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <>
        <div className='nav' style={{backgroundColor: 'rgba(11,11,11,0.5)', width:'100%',height:'10vh', position:'fixed', zIndex:'1'}}>
            <img src={logo} style={{height:'7vh',position:'absolute', marginLeft:'20px',marginTop:'1.5vh'}}></img>
            <h1 style={{marginLeft:'118px',marginTop:'9px', position:'absolute'}}>Virtual eSports Coach</h1>
            <h1 style={{color:'#ffffff',marginLeft:'120px',marginTop:'1.5vh'}}>Virtual eSports Coach</h1>
            <h1 style={{marginLeft:'50px',marginTop:'1.5vh'}}>About Us</h1>
            <div className='navbutton' style={{marginLeft:'500px',marginTop:'15px'}}><p>SIGN IN</p></div>
            <div className='navbutton2' style={{marginLeft:'20px',marginTop:'15px'}}><p>SIGN UP</p></div>
        </div>
        </>
    );
};

export default NewNavbar