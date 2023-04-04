import React from 'react';
import './style.css';
import {useParallax, Parallax} from 'react-scroll-parallax';
import gekkoimg from '../../assets/test.png'

const ParallaxImg = () => {
    return (
        <div className="hometitle section__padding" id="home">
            {/* Big Gekko image */}
            <div style={{marginTop : 200}}> 
            <Parallax speed={100}  >{/*translateX={['2000px', '-2000px']}*/}
            <div className="hometitle-image">
                <img src={gekkoimg} alt="headerimage" />
            </div>
            </Parallax>
            </div>
        </div>
    );
}

export default ParallaxImg