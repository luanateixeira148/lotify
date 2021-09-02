import React, { useState } from 'react';
import axios from 'axios';
import "./styles.scss";
import Button from '../Button';
const classNames = require('classnames');

export default function FormOnEdit(props) {

  const [description, setDescription] = useState(props.description);
  const [location, setLocation] = useState(props.location);

  // edits the location and description of specific task
  const editTask = () => {
    let id = props.id;
    axios
      .put(`http://localhost:8080/api/tasks/edit/${id}?description=${description}&location_id=${location}`)
      .then((res) => {
        props.setEdit('show');
        props.setLoading(true);
      })
      .catch((err) => console.log(err))
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
          }}
        />
      </form>
      <Button save onClick={() => editTask()} />
    </div>
  );

}