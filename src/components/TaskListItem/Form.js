import React, { useState } from 'react';
import axios from 'axios';
import "./styles.scss";
import Button from '../Button';
const classNames = require('classnames');

export default function Form(props) {

  const [description, setDescription] = useState();
  const [location, setLocation] = useState();

  // handles the save button in the form and submits the input data to the database
  const addTask = () => {
    return axios
      .post(`http://localhost:8080/api/tasks`, {'description': description, 'location_id':  location})
  }

  const editTask = () => {
    return axios
      .put(`http://localhost:8080/api/tasks/edit/${id}?description=${description}?location_id=${location}`)
  }

  return (
    <div className="form">
      <form>
        <input 
          className="description"
          name="description" 
          type="text" 
          placeholder="Add description"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
            console.log(event.target.value);
          }}
        />
        <input 
          className="location" 
          name="location"
          type="text" 
          placeholder="Add location"
          value={location}
          onChange={(event) => {
            setLocation(event.target.value);
            console.log(event.target.value);
          }}
        />
      </form>
      <Button save onClick={() => addTask()} />
    </div>
  );

}