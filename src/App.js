import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
//import Slider from './Slider/Slider';
//import MultipleSlider from './MultipleSlider/MultipleSlider';
import Navigation from './Components/Navigation/Navigation';
import Welcome from './Components/Welcome/Welcome'
//import TopicsList from './Components/TopicsList/TopicsList';
import Footer from './Components/Footer/Footer';
import HomeContent from './Components/HomeContent/HomeContent'

function App() {
  return (
    <div className="App">
     
      {/* <Slider />*/} 
     {/*<MultipleSlider /> */} 
     <Navigation />
     <Welcome />
     <HomeContent />
     {/*<TopicsList />*/}
     <Footer />
    </div>
  );
}

export default App;
