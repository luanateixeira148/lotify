import './App.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from "./components/Button"
import Show from './components/TaskListItem/Show';
import Checked from './components/TaskListItem/Checked';
import Form from './components/TaskListItem/Form';
import Header from './components/Header';
import TaskList from './components/TaskList';
import Footer from './components/Footer';

function App() {

  const [formState, setFormState] = useState('hide');
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  /* makes initial axios get request and sets initial tasks */
  useEffect(() => {
    axios.get("http://localhost:8080/api/tasks")
    .then(res => { 
      setTasks(res.data);  
      setLoading(false);
    })
  }, [loading])

  return (
    <div className="App">
      <Header />
      <Form 
        setFormState={setFormState}
        formState={formState}
        setLoading={setLoading}
      />
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        setLoading={setLoading}
      />
      <Footer
        setFormState={setFormState}
        formState={formState}
      />
    </div>
  );
}

export default App;