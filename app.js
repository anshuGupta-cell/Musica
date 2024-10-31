import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';

function Main (){
  

  return (
  <div>
        <Navbar/>
      
          <Home/>
      
  </div>
);
}
  
ReactDOM.render(
  <Main />,
  document.getElementById('react-app')
);
