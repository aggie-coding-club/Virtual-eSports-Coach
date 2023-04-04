import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Home,Register,ToS,Privacy, Dashboard } from "./pages";
import { Navbar,Footer } from './components';
import { ParallaxProvider} from 'react-scroll-parallax';
/*
When it's time, we can do:
import { Home, Page1, Page2, Page 3 } from "./pages";
 */

const App = () => {
    return (
      <ParallaxProvider>
    <Router>
      
      
      <Navbar />
      <div className="gradient__bg">
      <Routes>
        <Route path="/" /*element={<Layout />}*/>
          <Route index element={<Home />} />
          <Route path="aboutus" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="tos" element={<ToS />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>
      </Routes>
      </div>
      {/*<div className="footer">
      <Footer />
    </div>*/}
    </Router>
    <Footer />
    </ParallaxProvider>
    )
}

export default App;