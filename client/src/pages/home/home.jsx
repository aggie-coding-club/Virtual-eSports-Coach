import React from 'react';
import {HomeTitle,ParalaxImg} from "../../components";
import './style.css'


const Home = () => {
  return (
      <div className="App">
        <div className="gradient__bg">
        <ParalaxImg/>
        <HomeTitle />
        </div>
      </div>
  )
}

export default Home;