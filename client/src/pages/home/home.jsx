import React from 'react';
import {Navbar} from "../../components";
import {Header} from "../../containers";

const Home = () => {
  return (
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
      </div>
  )
}

export default Home;