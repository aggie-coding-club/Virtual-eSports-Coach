import React from 'react';
import {HomeTitle,ParallaxImg} from "../../components";
import './style.css'


const Home = () => {
  return (
      <div className="App">
        <div className="gradient__bg">
        <HomeTitle />
        <ParallaxImg/>
        </div>
      </div>
  )
}

export default Home;