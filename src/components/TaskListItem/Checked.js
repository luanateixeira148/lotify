import React from 'react';
import "./styles.scss";
import Button from "../Button";
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

/* Icons */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Checked(props) {
  const deleteTask = (id) => {
    let output = [];
    props.tasks.forEach(task => {
      if (task.id !== id) {
        output.push(task)
      }
    })
    props.setTasks(output)
    return axios
      .delete(`http://localhost:8080/api/tasks/${id}`)
  }

  return (
    
    <Swiper className="checked"
      spaceBetween={1}
      slidesPerView={1}
      slidesOffsetAfter={-348}
    >
      <SwiperSlide>
        <div className="checked-info-container">

          <form className="checked-input-container">
            <input type='checkbox' id='task-checkbox' checked={props.status} onChange={() => props.toggleCheckbox(props.id)} />
            <span className="styled-checkbox">
              <FontAwesomeIcon icon={faCheck} />
            </span>
          </form>

          <div className="checked-location-info">
            <label>
              {props.description}
            </label>
          </div>

          <div className="checked-distance-info">
            <h3>{props.task.distance}km</h3>
            <a href={props.map_url} > 
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </a>
          </div>

        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="checked-button-container">
          <Button smallDelete className="checked-delete-button" onClick={() => deleteTask(props.id)} />
        </div>
      </SwiperSlide>

    </Swiper>
  );
}