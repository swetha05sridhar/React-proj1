import React, { Component } from 'react';
import './Footer.css'

class Navigation extends Component{
    render(){
        return(
            <div className="main-footer">
                <ul className="footer-items">
                    <li>
                    <a href="/" className="col">
                       .features 
                    </a>
                    </li>
                    <li>
                    <a href="/" className="col">
                       .blog 
                    </a>
                    </li>
                    <li>
                    <a href="/" className="col">
                       .terms of use 
                    </a>
                    </li>
                    <li>
                    <a href="/" className="col">
                       .send feedback 
                    </a>
                    </li>
                </ul>
            </div>
        );
    }

}

export default Navigation