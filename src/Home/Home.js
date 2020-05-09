import React , {Component}from 'react';
import './Home.css';
import data from '../data/data'
class Home extends Component{
    
    constructor(props){
        super(props)
           this.state = {
            properties: data.properties,
               property: data.properties[0]
           
        };
    }
    prevClick= () =>{
        const newIndex= this.state.property.index -1;
        this.setState({
           property: data.properties[newIndex]
        })
    }
    nextClick= () =>{
        const newIndex= this.state.property.index +1;
        this.setState({
           property: data.properties[newIndex]
        })
    }


   /* plusSlides=(n)=>{
        this.showSlides(this.props.slideIndex+=n);
    }
    showSlides=(n)=>{
          
          if(n > this.props.slides.length){this.props.slideIndex=1}
          if(n < 1){this.props.slideIndex=this.props.slides.length}
          /*for(i = 0; i<this.props.slideIndex; i++){
            this.props.slides[i] =  style.display ="none";
          }
          this.props.slides[slideIndex-1] =  style.display ="block";

    } */

render(){
    const{properties,property}= this.state;
return(
    <div className="wrapper">
        
    <h1 className="pageHead">Web Development</h1>
    <div className="slider">
    <div className="sliderMask">
    <div className="sliderItem">
        <div className="sliderItemInner">Web development
        <h1>{this.state.slideIndex}</h1>
        </div>
    </div>
    <div className="sliderItem">
        <div className="sliderItemInner">Mobile development</div>
    </div>
    <div className="sliderItem">
        <div className="sliderItemInner">Angular</div>
    </div>
    <div className="sliderItem">
        <div className="sliderItemInner">Node JS</div>
    </div>
    <div className="sliderItem">
         <div className="sliderItemInner">React JS</div>
    </div>
    </div>
    
    <div className="leftArrow"  
    onClick={()=>this.prevClick()}
    disabled= {property.index === data.properties.length -1 }
    >
        <i class="fas fa-chevron-left"></i>
    </div>
    <div className="rightArrow" >
        <i class="fas fa-chevron-right"></i>
    </div>
    </div>
    </div>
);
}
}

export default Home
