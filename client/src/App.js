import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Home } from "./pages";
/*
When it's time, we can do:
import { Home, Page1, Page2, Page 3 } from "./pages";
 */

const App = () => {
    return (
        <Home />
    )
}

export default App;