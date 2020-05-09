import React, { Component } from 'react';
import Topics from '../Topics/Topics';
import {topicsData} from '../TopicsData'
import './TopicsList.css'

class TopicsList extends Component{
    state = {
        topics: topicsData
    };
    render(){
        const {topics} =  this.state;
        return(
            <section className="topics-list">
               {topics.map( topic =>{
                   return(
                       <Topics
                        key={topic.id}
                        topic={topic} />
                   )
               })}
            </section>
        );
    }

}

export default TopicsList