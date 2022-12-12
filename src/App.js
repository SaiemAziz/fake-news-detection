
import './App.css';
import { useState } from 'react';
import {BiLike, BiDislike} from 'react-icons/bi'
import { info } from 'daisyui/src/colors/colorNames';
import {Country, City} from 'country-state-city' 
import { Outlet } from 'react-router-dom';

function App() {

  
  
  
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
