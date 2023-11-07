import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';
import { NewNavbar } from './components';
import { Dashboard, Home, NewHome, Privacy, Register, ThreePlayGround, ToS } from "./pages";
/*
When it's time, we can do:
import { Home, Page1, Page2, Page 3 } from "./pages";
 */

const App = () => {
    return (
      <ParallaxProvider>
    <Router>
      <NewNavbar />
      <div /*className="gradient__bg"*/>
      <Routes>
        <Route path="/" /*element={<Layout />}*/>
          <Route index element={<NewHome />} />
          <Route path="aboutus" element={<Home />} />
          <Route path="test" element={<ThreePlayGround />} />
          <Route path="register" element={<Register />} />
          <Route path="tos" element={<ToS />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="three" element={<ThreePlayGround/>} />
        </Route>
      </Routes>
      </div>
      
    </Router>{/*<div className="footer">
      <Footer />
    </div>*/}
    </ParallaxProvider>
    )
}

export default App;