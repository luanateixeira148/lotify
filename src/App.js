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
import Dropdown from './components/TaskListItem/Dropdown';

function App() {

  const [formState, setFormState] = useState('hide');
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [bestRoute, setBestRoute] = useState('https://www.google.com/maps/dir/49.2773808,-123.1275059/Breka+Bakery+%26+Caf%C3%A9+(Davie),+855+Davie+St,+Vancouver,+BC+V6Z+1B7/Shoppers+Drug+Mart,+1006+Homer+St,+Vancouver,+BC+V6B+2W9/H-Mart+Downtown,+590+Robson+St+#200,+Vancouver,+BC+V6B+2B7/');
  const [bestRoute, setBestRoute] = useState([]);

  /* makes initial axios get request and sets initial tasks */
  useEffect(() => {
    axios.get("http://localhost:8080/api/tasks")
    .then(res => { 
      setTasks(res.data);  
      setLoading(false);
    })
  }, [loading])


  useEffect(() => {
    axios.get("http://localhost:8080/api/bestroute")
    .then(res => { 
      setBestRoute(res.data);
      // console.log('res.data', res.data)
    })
  }, [])

  console.log('bestRoute:',bestRoute); //array of objects
  
  return (
    <div className="App">
      <Header 
        bestRoute={bestRoute}
        // setBestRoute={setBestRoute}
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
    </div>
  );
}

export default App;