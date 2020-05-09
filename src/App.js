import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
//import Slider from './Slider/Slider';
//import MultipleSlider from './MultipleSlider/MultipleSlider';
import Navigation from './Components/Navigation/Navigation';
import TopicsList from './Components/TopicsList/TopicsList';
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      {/* <Home />*/}
      {/* <Slider />*/} 
     {/*<MultipleSlider /> */} 
     <Navigation />
     <TopicsList />
     <Footer />
    </div>
  );
}

export default App;
