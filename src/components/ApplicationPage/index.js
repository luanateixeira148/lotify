import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./application-page.scss";
import Form from '../TaskListItem/Form';
import Header from '../Header';
import TaskList from '../TaskList';
import Footer from '../Footer';

export default function MainPage() {

  const [formState, setFormState] = useState('hide');
  const [tasks, setTasks] = useState([]);
  const [reaload, setReload] = useState(false);
  const [bestRoute, setBestRoute] = useState([]);
  const [fetchTasks, setFetchTasks] = useState(false);

  // /* makes initial axios get request and sets initial tasks */
  useEffect(() => {
    axios.get("http://localhost:8080/api/tasks")
    .then(res => { 
      setTasks(res.data);  
      setReload(false);
      setFetchTasks(true);
    })
  }, [reaload])

  /* makes axios get request to set the right Google Maps URL for the best route button */
  useEffect(() => {
    axios.get("http://localhost:8080/api/bestroute")
    .then(res => { 
      setBestRoute(res.data);
    })
  }, [fetchTasks])

  /* show loading page while the tasks are being requested */
  let displayObject;
  
  if(!fetchTasks) {
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
        setLoading={setReload}
      />
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        setLoading={setReload}
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