import React from 'react';
import {HomeTitle,ParallaxImg,SkyboxCanvas} from "../../components";
import './style.css'


const Home = () => {
  return (
      <div className="App">
        <SkyboxCanvas/><HomeTitle />
        
      </div>
  )
}

export default Home;