import './App.scss';
import React, { useState, useEffect } from 'react';
import MainPage from './components/MainPage';
import axios from 'axios';
import Button from "./components/Button"
import Show from './components/TaskListItem/Show';
import Checked from './components/TaskListItem/Checked';
import Form from './components/TaskListItem/Form';
import Header from './components/Header';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import Dropdown from './components/TaskListItem/Dropdown';
import Slide from './components/TaskListItem/Slide';
import NotificationPage from './components/NotificationPage';

function App() {

  const [visualMode, setVisualMode] = useState('notificationPage');
  
  if (visualMode === 'notificationPage') {
    return (
      <div className="App">
        <NotificationPage 
          onClick={() => setVisualMode('mainPage')}
        />
      </div>
    );
  }

  if (visualMode === 'mainPage') {
    return (
      <div className="App">
        <MainPage />
      </div>
    );
  }
  
}

export default App;