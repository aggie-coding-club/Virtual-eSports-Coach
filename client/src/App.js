import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Home,Register,ToS,Privacy } from "./pages";
import { Navbar } from './components';
/*
When it's time, we can do:
import { Home, Page1, Page2, Page 3 } from "./pages";
 */

const App = () => {
    return (
    <Router>
      <div className="gradient__bg">
      <Navbar />
      </div>
      <div className="gradient__bg">
      <Routes>
        <Route path="/" /*element={<Layout />}*/>
          <Route index element={<Home />} />
          <Route path="aboutus" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="tos" element={<ToS />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>
      </Routes>
      </div>
      {/*<div className="footer">
      <Footer />
    </div>*/}
    </Router>
    )
}

export default App;