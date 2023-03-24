import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

/* If more const objects are needed, we can add them in these imports later */

import { Navbar } from './components';
import { Header } from './containers';
import './App.css';
const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
        </div>
    )
}

export default App;