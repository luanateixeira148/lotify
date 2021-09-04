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
  
  return (
    <div className="App">
      <MainPage />
      {/* <NotificationPage /> */}
    </div>
  );
}

export default App;