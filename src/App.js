import React from 'react';
import Navigation from './components/Navigation';
import girlPicture from './Assets/girlPicture.svg';
import Banner from './components/Banner';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner/>
      <img src={girlPicture}></img>
    </div>
  );
}

export default App;
