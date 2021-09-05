import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from '../TaskListItem/Form';
import Header from '../Header';
import TaskList from '../TaskList';
import Footer from '../Footer';
import "./styles.scss";

export default function MainPage() {

  const [formState, setFormState] = useState('hide');
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [bestRoute, setBestRoute] = useState([]);
  const [fetchTasks, setFetchTasks] = useState(false);

  /* makes initial axios get request and sets initial tasks */
  useEffect(() => {
    axios.get("http://localhost:8080/api/tasks")
    .then(res => { 
      setTasks(res.data);  
      setLoading(false);
      setFetchTasks(true);
    })
  }, [loading])

  /* makes axios get request to set the right Google Maps URL for the best route button */
  useEffect(() => {
    axios.get("http://localhost:8080/api/bestroute")
    .then(res => { 
      setBestRoute(res.data);
    })
  }, [fetchTasks])
  let displayObject;
  
  if(!fetchTasks) { //Initial Condition
    displayObject = 
    <div className="loading-screen">
      <h1>Lotify</h1>
    </div>
  } else {
    displayObject = <>
      <Header 
        bestRoute={bestRoute}
      />
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
    </>
  }

  return (
    <div className="App">
      {displayObject}
    </div>
  );
}