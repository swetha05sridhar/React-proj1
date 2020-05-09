import React,{useState} from 'react';
import './Slider.css'

function Slider(){
    let sliderArr = ['Web dev',2,3,4,5,6,7,8,9,10];
    const[x, setX] = useState(0); 
    const goleft = () =>{
        x=== 0 ? setX( -100 *( sliderArr.length - 1)) : setX(x+100);
    };
    const goright = () =>{
        x=== -100 * (sliderArr.length - 1) ? setX(0): setX(x-100);
    };
    return(
        <div className="slider">    
        {
            sliderArr.map((item,index)=>{
            return(
            <div key={index} className="slide" style={{transform:`translateX(${x}%)`}}>
                 {item}
            </div>     
             )
        })}
        <button id="goleft" onClick={goleft}>
        <i class="fas fa-chevron-left"></i>
        </button>
        <button id="goright" onClick={goright}>
        <i class="fas fa-chevron-right"></i>
        </button>
</div>
)
}

export default Slider