import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect} from 'react';
import React from 'react';

/* Components */
import Button from "./components/Button"
import Show from './components/TaskListItem/Show';
import Checked from './components/TaskListItem/Checked';
import Form from './components/TaskListItem/Form';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <br /><br />
      <h1>Buttons</h1>
      <Button save>--</Button>
      <Button delete>--</Button>
      <Button edit>--</Button>
      <Button add>+</Button>
      <br /><br />
      <h1>TaskItem</h1>
      <h2>Show</h2>
      <Show />
      <h2>Checked</h2>
      <Checked />
      <h2>Form</h2>
      <Form />
    </div>
  );
}

export default App;