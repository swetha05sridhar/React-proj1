import React, { Component } from 'react';
import './Navigation.css'

class Navigation extends Component{
    render(){
        return(
            <div className="navbar">
                <ul className="nav-items">
                    <li>
                    <a href="/" className="nav-eachItem">
                       home 
                    </a>
                    </li>
                    <li>
                    <a href="/" className="nav-eachItem">
                       browse 
                    </a>
                    </li>
                    <li>
                    <a href="/" className="nav-eachItem">
                       path 
                    </a>
                    </li>
                    <li>
                    <a href="/" className="nav-eachItem">
                       bookmarks 
                    </a>
                    </li>
                </ul>
            </div>
        );
    }

}

export default Navigation