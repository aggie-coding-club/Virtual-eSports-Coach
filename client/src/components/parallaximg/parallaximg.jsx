import React from 'react';
import './style.css';
import {useParallax,ParallaxProvider, Parallax} from 'react-scroll-parallax';
import img from '../../assets/test.png'
import img2 from '../../assets/test2.png'
import img3 from '../../assets/test3.png'
import img4 from '../../assets/test4.png'
import img5 from '../../assets/test5.png'

const ParallaxImg = () => {
    return (
        <div className="section__padding hometitle-content" id="home" style={{marginTop :500,paddingBottom:1000}}>
            {/* Big Gekko image */}
            <div style={{marginTop :250,marginLeft: -100,position:'absolute',zIndex: 4, transform:'scale(0.7)'}}> 
            <Parallax speed={80}  opacity={ [0.8, 0]} translateX={ [20, -20]} rotate={ [15, -20]}>
            
                <img src={img} alt="headerimage" />
            
            </Parallax>
            </div>
            <div style={{marginTop :300,marginLeft: 400,position:'absolute',zIndex: 2, transform:'scale(0.3)'}}> 
            <Parallax speed={100}  opacity={ [0.8, 0]} translateX={ [-20, 20]} rotate={ [-5, 15]}>
            
                <img src={img2} alt="headerimage" />
            
            </Parallax>
            </div>
            <div style={{marginTop :200,marginLeft: 400,position:'absolute',zIndex: 3, transform:'scale(0.6)'}}> 
            <Parallax speed={300} opacity={ [1, 0]} translateX={ [-5, 35]} rotate={ [-5, 10]}>
            
                <img src={img3} alt="headerimage" />
            
            </Parallax>
            </div>
            <div style={{marginTop :500,marginLeft: -350,position:'absolute',zIndex: 5, transform:'scale(0.3)'}}> 
            <Parallax speed={330}  opacity={ [1, 0]} translateX={ [10, -15]} rotate={ [5, -10]}>
            
                <img src={img4} alt="headerimage" />
            
            </Parallax>
            </div>
            <div style={{marginTop :500,marginLeft: 250,position:'absolute',zIndex: 1, transform:'scale(0.6)'}}> 
            <Parallax speed={150}  opacity={ [1, 0]} >
            
                <img src={img5} alt="headerimage" />
            
            </Parallax>
            </div>
        </div>
    );
}

export default ParallaxImg