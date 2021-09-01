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

  const toggleCheckbox = (id) => {
    let taskFromStates = tasks;
    let status = '';
    // loops thro all tasks, finds the one that was clicked, and changes the status
    for (let i = 0; i < taskFromStates.length; i++) {
      const taskObj = taskFromStates[i];
      if (taskObj.id === id) {
        taskFromStates[i].status = !taskFromStates[i].status;
        status = taskFromStates[i].status;
      }
    }
    // uses an axios request to send the new status to the backend
    axios
      .put(`http://localhost:8080/api/tasks/${id}?status=${status}`)
      .then((res) => {
        setTasks([...taskFromStates])
      })
      .catch((err) => console.log(err))
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