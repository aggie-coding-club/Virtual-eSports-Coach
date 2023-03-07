import React, { Component } from 'react';
import icon from './../searchicon.png'

export default class Searchbar extends Component {

    render() {
        return (
            <div className="searchbar lg">
                <input
                    placeholder="Enter your username"
                    value=""
                    onChange={() => {}}
                    />
                <img
                    src={icon}
                    alt="search"
                    onClick={()=>{}}
                    />
            </div>
        );
    }
}