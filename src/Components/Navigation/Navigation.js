import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './Navigation.css'


class Navigation extends Component{
    render(){
        return(
            <Router>
                  <div className="navbar">
                
                <ul className="nav-items">
                    <li className="nav-eachItem">
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
            </Router>
            
        );
    }

}

export default Navigation