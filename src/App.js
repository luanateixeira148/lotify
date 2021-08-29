import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect} from 'react';
import React from 'react';
import Button from "./components/Button"


function App() {
  return (
    <div className="App">
      <Button save>--</Button>
      <Button delete>--</Button>
      <Button edit>--</Button>
      <Button add>+</Button>
    </div>
  );
}

export default App;