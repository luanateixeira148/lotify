import React, { useEffect, useState } from 'react';
import "./TaskList.scss";
import Show from './TaskListItem/Show';
import Checked from './TaskListItem/Checked';
import FormOnEdit from './TaskListItem/FormOnEdit';
import TaskListItem from './TaskListItem';
import axios from 'axios';
const classNames = require('classnames');

export default function TaskList(props) {

  const tasks = props.tasks;

  /* checks and unchecks a task when clicked */
  const toggleCheckbox = (id) => {
    let taskFromStates = tasks;
    let status = '';
    /* finds the one that was clicked and changes its status */
    for (let i = 0; i < taskFromStates.length; i++) {
      const taskObj = taskFromStates[i];
      if (taskObj.id === id) {
        taskFromStates[i].status = !taskFromStates[i].status;
        status = taskFromStates[i].status;
      }
    }
    /* sends new status to db */
    axios
      .put(`http://localhost:8080/api/tasks/${id}?status=${status}`)
      .then((res) => {
        props.setTasks([...taskFromStates])
      })
      .catch((err) => console.log(err))
  }

  /* filters tasks to separate checked from unchecked */
  /* unchecked tasks should be at the top, checked tasks should be at the bottom */
  const getCheckedTasks = () => {
    return tasks.filter(task => task.status === true)
  }
  const getUncheckedTasks = () => {
    return tasks.filter(task => task.status === false)
  }

  return (
    <div className="taskList">
      <ul>
        {getUncheckedTasks().map(task => (
          <TaskListItem 
            task={task}
            toggleCheckbox={toggleCheckbox}
            setLoading={props.setLoading}
          />
        ))}
      </ul>

      <ul>
        {getCheckedTasks().map(task => (
          <Checked
            key={task.id}
            id={task.id}
            status={task.status}
            description={task.description}
            logo_url={task.logo_url}
            toggleCheckbox={toggleCheckbox}
            tasks={tasks}
            setTasks={props.setTasks}
          />
        ))}
      </ul>
    </div>
  );
}