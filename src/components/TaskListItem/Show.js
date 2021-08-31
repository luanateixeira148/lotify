import React, { useEffect, useState } from 'react';
import "./styles.scss";
import Button from "../Button";
import axios from 'axios';
const classNames = require('classnames');

export default function Show(props) {

    //handles delete button click
  const handleClick = (id) => {
    console.log('delete buttonw as clicked');
    return axios
      .delete(`http://localhost:8080/api/tasks/${id}`)
  }

  return (
    
    <div className="show">
      <form onClick={() => props.toggleCheckbox(props.id)} >
          <input type='checkbox' id='task-checkbox' checked={props.status} />
          <label htmlFor="task-checkbox">
            {props.description}
          </label>
      </form>
      <img
        src={props.logo_url}
        alt='props.logo_url comes here'
      />
      <Button edit />
      <Button delete onClick={() => handleClick(props.id)} />
    </div>
  );

}