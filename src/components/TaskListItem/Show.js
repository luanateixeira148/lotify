import React, { useEffect, useState } from 'react';
import "./styles.scss";
import Button from "../Button";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
const classNames = require('classnames');

export default function Show(props) {
  const deleteTask = (id) => {
    console.log('delete button was clicked');
    props.setEdit('deleted')
    return axios
      .delete(`http://localhost:8080/api/tasks/${id}`)
  }

  return (
    
    <div className="show">
      <div className="info-container">
        <form >
          <input type='checkbox' id='task-checkbox' checked={props.status} onChange={() => props.toggleCheckbox(props.id)} />
        </form>
        <div className="info">
          <label>{props.description}</label>
          <hr />
          <h4>{props.name}</h4>
        </div>
        <h3>{props.distance}km</h3>
        <a href={props.map_url} > 
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </a>
      </div>
      <div className="button-container">
        <Button edit onClick={() => props.setEdit('edit')} />
        <Button delete onClick={() => deleteTask(props.id)} />
      </div>
    </div>

  );

}