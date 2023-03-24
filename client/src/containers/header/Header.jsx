import React from 'react';
import './header.css';
import glass from "../../assets/searchglass.png";
import headerimage from "../../assets/test.png";

const Header = () => {
    return (
        <div className="vec__header section__padding" id="home">
            <div className="vec__header-content">

                {/* Big gradient text */}
                <h1 className="gradient__text">Improve your skills at various competitive shooter titles</h1>

                {/* VeC description */}
                <p>The primary goal of Virtual eSports Coach is to serve as a website that helps gamers improve their skills in various popular competitive shooter titles, such as VALORANT, Overwatch 2, and more. First, gamers will enter their username, platform, and other information required to identify them. Then, the program will retrieve their statistics, determine which skills need the most improvement, and offer advice and mentorship. By providing customized training, practice routines, and other guidance for each client, Virtual eSports Coach will allow even casual gamers to make significant progress and advance to the next level of gaming.</p>

                {/* Username input searchbar */}
                <div className="vec__header-username__input">
                    <input type="text" placeholder="Enter your Riot ID"/>

                    {/* Enter button */}
                    <button type="button">
                        <img src={glass} alt="searchglass" />
                    </button>
                </div>

            </div>

            {/* Big Gekko image */}
            <div className="vec__header-image">
                <img src={headerimage} alt="headerimage" />
            </div>
        </div>
    );
}

export default Header