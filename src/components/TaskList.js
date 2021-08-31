import React, { useEffect, useState } from 'react';
import "./TaskList.scss";
import Show from './TaskListItem/Show';
import Checked from './TaskListItem/Checked';
import axios from 'axios';

const classNames = require('classnames');

export default function TaskList(props) {

  const [tasks, setTasks] = useState([]);

  // makes axios get request and sets initial tasks
  useEffect(() => {
    axios.get("http://localhost:8080/api/tasks")
    .then(res => { setTasks(res.data) })
  }, [])

  // const updateStatus = function (taskId) {
  //   // get the day object
  //   const taskObj = tasks.find(task => task.id === taskId)
  //   //initialize the num spots to zerio
  //   let status;
  //   // if an interview does not exist, increase the number of spots remainin
  //   (taskObj.status === false) ? taskObj.status = true : taskObj.status = false
    
  //   return axios.put('http://localhost:8080/api/tasks/' + taskId, taskObj)
  //   .then((res) => {
  //     console.log(res);
  //     // const days = updateSpots(state.day, state.days, taskOb);
  //     // setState({...state, appointments, days});
  //   }) 
  // };

  const toggleCheckbox = (id) => {
    let taskFromStates = tasks
    for (let i = 0; i < taskFromStates.length; i++) {
      const taskObj = taskFromStates[i];
      if (taskObj.id === id) {
        taskFromStates[i].status = !taskFromStates[i].status 
      }
    }
    setTasks([...taskFromStates])
  }

  const getCheckedTasks = () => {
    return tasks.filter(task => task.status === true)
  }

  const getUncheckedTasks = () => {
    return tasks.filter(task => task.status === false)
  }

  return (
    <div className="taskList">
      {/* maps over tasks and returns only unchecked ones */}
      <ul>
        {getUncheckedTasks().map(task => (
          <Show
            key={task.id}
            id={task.id}
            // index={index}
            status={task.status}
            description={task.description}
            logo_url={task.logo_url}
            toggleCheckbox={toggleCheckbox}
          />
        ))}
      </ul>

      {/* maps over tasks and returns only checked ones */}
      <ul>
        {getCheckedTasks().map(task => (
          <Checked
            key={task.id}
            id={task.id}
            // index={index}
            status={task.status}
            description={task.description}
            logo_url={task.logo_url}
            toggleCheckbox={toggleCheckbox}
          />
        ))}
      </ul>
    </div>

  );

}