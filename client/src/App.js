import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Home } from "./pages";
import {Register} from "./pages"
/*
When it's time, we can do:
import { Home, Page1, Page2, Page 3 } from "./pages";
 */

const App = () => {
    return (
    <Router>
      <Routes>
        <Route path="/" /*element={<Layout />}*/>
          <Route index element={<Home />} />
          <Route path="aboutus" element={<Home />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </Router>
    )
}

export default App;