import React, { Component } from 'react';
import './Topics.css'

class Topics extends Component{
    render(){
        const{name,img} = this.props.topic;
        return(
            <article className="topics">
                <div className="images">
                    <img
                     width="200"
                     src={img}
                     alt="" className="img"
                    />
                    <div className="text">
                        <h3>{name}</h3>
                    </div>
                </div>
            </article>
        );
    }

}

export default Topics