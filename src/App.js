import './App.scss';
import React, { useState } from 'react';

/* Components */
import Button from "./components/Button"
import Show from './components/TaskListItem/Show';
import Checked from './components/TaskListItem/Checked';
import Form from './components/TaskListItem/Form';
import Header from './components/Header';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import { forOfStatement } from '@babel/types';

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <TaskList />
      <Footer />
    </div>
  );
}

export default App;