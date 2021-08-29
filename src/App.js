import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect} from 'react';
import React from 'react';

/* Components */
import Button from "./components/Button"
import Show from './components/TaskListItem/Show';
import Checked from './components/TaskListItem/Checked';


function App() {
  return (
    <div className="App">
      <h1>Buttons</h1>
      <Button save>--</Button>
      <Button delete>--</Button>
      <Button edit>--</Button>
      <Button add>+</Button>

      <h1>TaskItem</h1>
      <h2>Show</h2>
      <Show />
      <h2>Checked</h2>
      <Checked />
    </div>
  );
}

export default App;