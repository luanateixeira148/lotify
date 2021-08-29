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
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <Header />
      <TaskList />
    </div>
  );
}

export default App;