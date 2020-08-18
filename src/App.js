import React from 'react';
import Navigation from './components/Navigation';
import girlPicture from './Assets/girlPicture.svg';
import Typography from '@material-ui/core/Typography';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Typography variant="h2">
      Your product's trends can be hard to follow, <strong>Let us help.</strong>
      </Typography>
      <img src={girlPicture}></img>
    </div>
  );
}

export default App;
