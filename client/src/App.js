//import logo from './vallogo.png';
import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/home'
import Stats from './pages/stats'
import Register from './pages/register'
import Users from './pages/users'
import Navbar from './sections/navbar'

function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;