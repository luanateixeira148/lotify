import React from 'react';
import "./styles.scss";
import Button from "../Button";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

export default function Checked(props) {
  const deleteTask = (id) => {
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


    <div className="checked">
      <form >
        <input type='checkbox' id='task-checkbox' checked={props.status} onChange={() => props.toggleCheckbox(props.id)} />
      </form>
      <label>
        {props.description}
      </label>
      <FontAwesomeIcon icon={faMapMarkerAlt} />


      <Button delete onClick={() => deleteTask(props.id)} />


    </div>
    
  );
}