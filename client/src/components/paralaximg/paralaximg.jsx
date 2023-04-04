import React from 'react';
import './style.css';
import glass from "../../assets/searchglass.png";
import headerimage from "../../assets/test.png";
import { useGlitch } from 'react-powerglitch'
import {useParallax, Parallax} from 'react-scroll-parallax';


const Header = () => {
    return (
        <div className="vec__header section__padding" id="home">
            {/* Big Gekko image */}
            <div style={{marginTop : 200}}> 
            <Parallax speed={100} translateX={['2000px', '-2000px']} >
            <div className="vec__header-image">
                <img src={headerimage} alt="headerimage" />
            </div>
            </Parallax>
            </div>
        </div>
    );
}

export default Header