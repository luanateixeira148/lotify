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

  const [formState, setFormState] = useState('hide');

  return (
    <div className="App">
      <Header />
      <Form 
        setFormState={setFormState}
        formState={formState}
      />
      <TaskList />
      <Footer
        setFormState={setFormState}
        formState={formState}
      />
    </div>
  );
}

export default App;