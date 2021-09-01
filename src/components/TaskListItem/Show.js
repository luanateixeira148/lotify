import React, { useEffect, useState } from 'react';
import "./styles.scss";
import Button from "../Button";
import axios from 'axios';
const classNames = require('classnames');

export default function Show(props) {

  // handles delete button click
  const deleteTask = (id) => {
    console.log('delete buttonw as clicked');
    let output = [];
    props.tasks.map(task => {
      if (task.id !== id) {
        output.push(task)
      }
    })
    props.setTasks(output)

    return axios
      .delete(`http://localhost:8080/api/tasks/${id}`)
  }

  return (
    
    <div className="show">
      <form >
        <input type='checkbox' id='task-checkbox' checked={props.status} onChange={() => props.toggleCheckbox(props.id)} />
      </form>
      <label>
        {props.description}
      </label>
      <img
        src={props.logo_url}
        alt='props.logo_url comes here'
      />
      <Button edit />
      <Button delete onClick={() => deleteTask(props.id)} />
    </div>

  );

}